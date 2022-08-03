import { Client, createClient } from 'soap';

export const soapServiceUrl = 'https://www.mnb.hu/arfolyamok.asmx?wsdl';

export const wsdlRequestHandler = (wsdlUrl: string, method: any, request: object): Promise<object> => {
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
