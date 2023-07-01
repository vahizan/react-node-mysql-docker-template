import React, { ReactElement, FunctionComponent, SetStateAction, Dispatch } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { renderHook, RenderHookOptions, RenderHookResult } from '@testing-library/react-hooks/dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import * as ErrorContext from '../components/Context/ErrorContextProvider';
import * as ExampleContext from '../components/Context/ExampleContext';

interface ErrorProviderProps {
    errorStatusCode: number;
    setErrorStatusCode: Dispatch<SetStateAction<number | undefined>>;
}

interface AllTheProvidersProps {
    history?: MemoryHistory;
    errorContext?: ErrorProviderProps;
}

const ErrorProvider: FunctionComponent<{
    errorContext?: { errorStatusCode: number; setErrorStatusCode: Dispatch<SetStateAction<number | undefined>> };
}> = ({ children }) => {
    return <ErrorContext.ErrorContextProvider>{children}</ErrorContext.ErrorContextProvider>;
};

export const allTheProviders: FunctionComponent<AllTheProvidersProps> = ({
    children,
    history = createMemoryHistory(),
    errorContext
}) => {
    return (
        <Router navigator={history} location={{ pathname: '/' }}>
            <ErrorProvider errorContext={errorContext}>
                    <ExampleContext.ExampleProvider>{children}</ExampleContext.ExampleProvider>
            </ErrorProvider>
        </Router>
    );
};

interface CustomRenderOptions extends RenderOptions {
    wrapperProps?: {
        route?: string;
        history?: MemoryHistory;
        errorContext?: ErrorProviderProps;
    };
}

const customRender: (ui: ReactElement, options?: CustomRenderOptions) => RenderResult = (ui, options?) =>
    render(ui, { wrapper: (props) => allTheProviders({ ...props, ...options?.wrapperProps }), ...options });

const customHookRender: <TProps, TResult>(
    callback: (props: TProps) => TResult,
    options?: RenderHookOptions<TProps> & CustomRenderOptions
) => RenderHookResult<TProps, TResult> = (hook, options?) => {
    // @ts-ignore
    return renderHook(hook, {
        wrapper: (props) => allTheProviders({ ...props, ...options?.wrapperProps }),
        ...options
    });
};

export const mockErrorStatusContext = (
    contextModule: typeof ErrorContext,
    options?: Partial<ErrorContext.ErrorContextType>
): void => {
    const mockContext = jest.spyOn(contextModule, 'useErrorStatus');
    const context = {
        errorStatusCode: null,
        setErrorStatusCode: () => ({}),
        ...options
    } as ErrorContext.ErrorContextType;
    mockContext.mockReturnValue(context);
};


export const mockExampleContext = (
    contextModule: typeof ExampleContext,
    options?: Partial<ExampleContext.ExampleContextProps>
): void => {
    const mockContext = jest.spyOn(contextModule, 'useExampleContext');
    const context = {
        ...options
    } as ExampleContext.ExampleContextProps;
    mockContext.mockReturnValue(context);
};

export const flushAllPromises = (): Promise<void> => new Promise(setImmediate);

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
export { customHookRender as renderHook };
