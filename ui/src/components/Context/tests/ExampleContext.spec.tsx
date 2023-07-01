import React from 'react';

import { renderHook } from '@testing-library/react-hooks';
import { act, render } from '@testing-library/react';
import { ExampleProvider, useExampleContext } from '../ExampleContext';

describe('ValuationProvider', () => {
    it('renders children', () => {
        const { getByText } = render(
            <ExampleProvider>
                <div>Test</div>
            </ExampleProvider>
        );
        expect(getByText('Test')).toBeInTheDocument();
    });

    it('provides default context values', () => {
        const { result } = renderHook(() => useExampleContext(), { wrapper: ExampleProvider });


    });
it('updates context values', () => {
        const { result } = renderHook(() => useExampleContext(), { wrapper: ExampleProvider });

    });
});
