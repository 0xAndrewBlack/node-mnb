import { soapServiceUrl } from '../src/';

describe('Default constant tests.', () => {
	test('Constant tests', () => {
		expect(soapServiceUrl).toBe('https://www.mnb.hu/arfolyamok.asmx?wsdl');
	});
});
