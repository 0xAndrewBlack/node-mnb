import { getMnbCurrencies, getMnbStatus, getMnbRates } from '../src/';

test('Method "getCurrencies" being called correctly.', () => {
	expect(getMnbCurrencies()).toBeDefined();
});

test('Method "getMnbStatus" being called correctly.', () => {
	expect(getMnbStatus()).toBeDefined();
});

test('Method "getMnbRates" being called correctly.', () => {
	expect(getMnbRates()).toBeDefined();
});
