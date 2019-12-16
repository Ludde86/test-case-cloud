import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Side } from './Side';

describe('Side', () => {
	describe('Layout', () => {
		it('has header', () => {
			const { container } = render(<Side />);
			const header = container.querySelector('h1');
			expect(header).toHaveTextContent('Sweet');
		});
	});
});
