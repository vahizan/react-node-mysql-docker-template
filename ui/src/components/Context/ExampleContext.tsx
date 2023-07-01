import React, { useContext, FunctionComponent } from 'react';

export interface ExampleContextProps {}
export const ExampleContext = React.createContext<ExampleContextProps>({});

export const ExampleProvider: FunctionComponent<Partial<React.ReactChild>> = ({ children }) => {
    const contextPayload = React.useMemo(
        () => ({

        }),
        []
    );

    return <ExampleContext.Provider value={contextPayload}>{children}</ExampleContext.Provider>;
};

export const useExampleContext = () => {
    return useContext(ExampleContext);
};
