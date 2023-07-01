"use strict";
// import { Request, Response } from 'express';
// import { pnmRequestSchemaValidate } from '../PnmRequest';
// import IAttributesRequestBody from '../../IAttributesRequestBody';
//
// export class PnmError extends Error {
//     constructor(message: string, status: number) {
//         super(message);
//         this.name = 'PnmError';
//         this.status = status;
//     }
//     status?: number | undefined;
//     name: string;
//     stack?: string | undefined;
// }
//
// export const validateBody = async (body: Request<IAttributesRequestBody> | undefined): Promise<void | Response> => {
//     if (!body) throw new PnmError('Invalid Request Body', 400);
//     if (!pnmRequestSchemaValidate(body)) throw new PnmError('Invalid Body Values', 400);
// };
//# sourceMappingURL=PnmBodyValidator.js.map