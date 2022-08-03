import xml2js from 'xml2js';
import { soapServiceUrl, wsdlRequestHandler } from '.';

export async function getMnbStatus(): Promise<object> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetInfo', {});

	const infoRoot = await xml2js.parseStringPromise(res.response.GetInfoResult);
	const info = infoRoot.MNBExchangeRatesQueryValues;

	const formattedInfo = {
		firstDate: info.FirstDate[0],
		lastDate: info.LastDate[0],
		currencies: info.Currencies[0].Curr,
	};

	return formattedInfo;
}

export async function getMnbRates(): Promise<object> {
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

	const formattedInterval = {
		startDate: interval.startdate,
		endDate: interval.enddate,
	};

	return formattedInterval;
}

export async function getHistoricalRates(startDate: string, endDate: string, currencies: string): Promise<object> {
	const res: any = await wsdlRequestHandler(soapServiceUrl, 'GetExchangeRates', {
		startDate: startDate,
		endDate: endDate,
		currencyNames: currencies.replace(' ', ''),
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

getMnbRates().then((d) => console.log(d));
