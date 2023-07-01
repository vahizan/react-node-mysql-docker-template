import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../../testUtils/test-utils';
import Navigation from './Navigation';

jest.mock('../Icons', () => ({
    RightmoveLogo: jest.fn().mockReturnValue(<div data-test="rightmove-logo" />)
}));

jest.mock('../../hooks/useGetDataServiceUrl');

describe('navigation', () => {

    it('Should render logo and link', () => {
        render(<Navigation />);
        expect(screen.getByTestId('rightmove-logo')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', 'https://rmplusportal.qa.rightmove.com/');
    });
});
