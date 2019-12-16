import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavBar } from './NavBar';

describe('NavBar', () => {
	describe('Layout', () => {
		xit('has span', () => {
			const { container } = render(<NavBar />);
			const span = container.querySelector('span');
			expect(span).toHaveTextContent('User');
		});
	});
});
