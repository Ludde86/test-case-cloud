import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainContainer from './MainContainer';

describe('MainContainer', () => {
	describe('Layout', () => {
		it('has header', () => {
			const { container } = render(<MainContainer />);
			const header = container.querySelector('h1');
			expect(header).toHaveTextContent("Let's get started");
		});
	});
});
