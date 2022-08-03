import { getMnbCurrencies, getMnbStatus, getMnbRates, getMnbDateInterval } from '../src/mnb';

describe('Default defined tests.', () => {
	test('Method "getCurrencies" being called correctly.', async () => {
		expect(await getMnbCurrencies()).toBeDefined();
	});

	test('Method "getMnbStatus" being called correctly.', async () => {
		expect(await getMnbStatus()).toBeDefined();
	});

	test('Method "getMnbRates" being called correctly.', async () => {
		expect(await getMnbRates()).toBeDefined();
	});

	test('Method "getMnbDateInterval" being called correctly.', async () => {
		expect(await getMnbDateInterval()).toBeDefined();
	});
});
