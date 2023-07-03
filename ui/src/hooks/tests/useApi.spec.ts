import { act } from '@testing-library/react-hooks/dom';
import { getSomething} from '../../services/api';
import useApi from '../useApi';
import {renderHook} from "../../testUtils/test-utils";

jest.mock('../../services/api', () => {
    return {
        ...jest.requireActual('../../services/api'),
        getSomething: jest.fn()
    };
});

describe('useApi', () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    it('When hook is called Then should call getSomething endpoint with all the required params', async () => {
        const setErrorStatusCodeMock = jest.fn();
        (getSomething as jest.Mock).mockResolvedValue({something:"something"});

        renderHook(
            () =>
                useApi(getSomething, [], {

                    id: '1234'
                }),
            { wrapperProps: { errorContext: { setErrorStatusCode: setErrorStatusCodeMock, errorStatusCode: 200 } } }
        );

        act(() => {
            expect(getSomething as jest.Mock).toHaveBeenCalledWith({
                id: '1234',
            });
            expect(setErrorStatusCodeMock).not.toHaveBeenCalled();
        });
    });
});
