import React, { Dispatch, FunctionComponent, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../AppRoutes';

export type ErrorContextType = {
    errorStatusCode: number | undefined;
    setErrorStatusCode: Dispatch<SetStateAction<number | undefined>>;
    errorMessage: string | undefined;
    setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
};

export const ErrorStatusContext = React.createContext<ErrorContextType | undefined>(undefined);

export const ErrorContextProvider: FunctionComponent = ({ children }) => {
    const navigate = useNavigate();
    const [errorStatusCode, setErrorStatusCode] = React.useState<number>();
    const [errorMessage, setErrorMessage] = React.useState<string>();

    useEffect(() => {
        if (errorStatusCode && errorStatusCode >= 401 && errorStatusCode !== 404) {
            navigate(ROUTE_PATHS.ERROR);
        }
    }, [errorStatusCode]);

    // We wrap it in a useMemo for performance reasons. More here:
    // https://kentcdodds.com/blog/how-to-optimize-your-context-value/
    const contextPayload = React.useMemo(
        () => ({ errorStatusCode, setErrorStatusCode, errorMessage, setErrorMessage }),
        [errorStatusCode, setErrorStatusCode, errorMessage, setErrorMessage]
    );

    return <ErrorStatusContext.Provider value={contextPayload}>{children}</ErrorStatusContext.Provider>;
};

export const useErrorStatus = () => {
    const context = React.useContext(ErrorStatusContext);
    if (!context) {
        throw new Error('No error context set');
    }
    return context;
};

export default ErrorContextProvider;
