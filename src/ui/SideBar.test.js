import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SideBar } from './SideBar';

describe('SideBar', () => {
	describe('Layout', () => {
		it('has header', () => {
			const { container } = render(<SideBar />);
			const header = container.querySelector('h3');
			expect(header).toHaveTextContent('Sweet');
		});
	});
});
