import { hello } from '../src/';

test('Method "hello" correctly creates proper greeting.', () => {
	expect(hello('npm')).toBe('Hello npm!');
});
