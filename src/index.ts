import xml2js from 'xml2js';
import { Client, createClient } from 'soap';

const soapServiceUrl = 'https://www.mnb.hu/arfolyamok.asmx?wsdl';

const wsdlRequestHandler = (wsdlUrl: string, method: any, request: object): Promise<object> => {
	return new Promise((resolve, reject) => {
		let result: any = {};

		try {
			createClient(wsdlUrl, {}, function (err: Error, client: Client) {
				client.on('response', (responseXml: any) => {
					result.responseXml = responseXml;
				});

				const clientMethod = client[method];

				clientMethod(request, function (err: Error, response: any) {
					if (err) {
						return reject(err);
					}

					result.response = response;

					return resolve(result);
				});
			});
		} catch (e: unknown) {
			console.log(`Bruh: ${e}`);
		}
	});
};

export async function getMnbRates(): Promise<void> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetCurrentExchangeRates', {});

	const ratesRoot = await xml2js.parseStringPromise(res.response.GetCurrentExchangeRatesResult);
	const rawRates = ratesRoot.MNBCurrentExchangeRates.Day[0].Rate;

	const rates: any = {};

	for (const rate of rawRates) {
		rates[rate.$.curr] = +rate._.replace(',', '.') / +rate.$.unit;
	}

	return rates;
}

export async function getMnbCurrencies(): Promise<Array<string>> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetCurrencies', {});

	const currsRoot = await xml2js.parseStringPromise(res.response.GetCurrenciesResult);
	const currs = currsRoot.MNBCurrencies.Currencies[0].Curr;

	return currs;
}

export async function getMnbDateInterval(): Promise<object> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetDateInterval', {});

	const intervalRoot = await xml2js.parseStringPromise(res.response.GetDateIntervalResult);
	const interval = intervalRoot.MNBStoredInterval.DateInterval[0].$;

	return interval;
}

export async function getMnbStatus(): Promise<object> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetInfo', {});

	const infoRoot = await xml2js.parseStringPromise(res.response.GetInfoResult);
	const info = infoRoot.MNBExchangeRatesQueryValues;

	return info;
}

export async function getHistoricalRates(startDate: string, endDate: string, currencies: string): Promise<String> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetExchangeRates', {
		startDate: startDate,
		endDate: endDate,
		currencyNames: currencies,
	});

	const historyRoot = await xml2js.parseStringPromise(res.response.GetExchangeRatesResult);
	const historical = historyRoot.MNBExchangeRates.Day[0].Rate;

	const history: any = {};

	for (const rate of historical) {
		history[rate.$.curr] = {
			unit: Number(rate.$.unit),
			rate: Number(rate._.replace(',', '.')),
		};
	}

	return history;
}
