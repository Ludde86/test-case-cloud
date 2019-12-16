import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Nav } from './Nav';

describe('Nav', () => {
	describe('Layout', () => {
		it('has span', () => {
			const { container } = render(<Nav />);
			const span = container.querySelector('span');
			expect(span).toHaveTextContent('User');
		});
	});
});
