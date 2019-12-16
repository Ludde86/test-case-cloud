import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';

describe('Main', () => {
	describe('Layout', () => {
		it('has header', () => {
			const { container } = render(<Main />);
			const header = container.querySelector('h1');
			expect(header).toHaveTextContent("Let's get started");
		});
	});
});
