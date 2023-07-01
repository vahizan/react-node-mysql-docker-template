"use strict";
// import { Request } from 'express';
// import IAttributesRequestBody from '../../../IAttributesRequestBody';
// import { validatePnmBody } from '../PnmBodyValidator';
//
// describe('PnmBodyValidator', () => {
//     it('should return 400 when request body is invalid', (done) => {
//         const invalidRequest = {
//             body: { addressId: undefined, userReference: undefined }
//         } as Request<IAttributesRequestBody>;
//
//         validatePnmBody(invalidRequest).catch((err) => {
//             expect(err.status).toEqual(400);
//             expect(err.message).toEqual('Invalid Body Values');
//             done();
//         });
//     });
//
//     it('should throw PnmError of status 400 when request body does not have a houseIdentifier', (done) => {
//         const invalidRequest = {
//             body: { postcode: 'postcode', userReference: 'reference' }
//         } as Request<IAttributesRequestBody>;
//
//         validatePnmBody(invalidRequest).catch((err) => {
//             expect(err.status).toEqual(400);
//             expect(err.message).toEqual('Invalid Body Values');
//             done();
//         });
//     });
//
//     it('should throw PnmError of status 400 when request body does not have a postcode', (done) => {
//         const invalidRequest = {
//             body: { houseIdentifier: 'houseIdentifier', userReference: 'reference' }
//         } as Request<IAttributesRequestBody>;
//
//         validatePnmBody(invalidRequest).catch((err) => {
//             expect(err.status).toEqual(400);
//             expect(err.message).toEqual('Invalid Body Values');
//             done();
//         });
//     });
//
//     it('should throw PnmError of status 400 when request body is undefined', (done) => {
//         validatePnmBody(undefined).catch((err) => {
//             expect(err.status).toEqual(400);
//             expect(err.message).toEqual('Invalid Request Body');
//             done();
//         });
//     });
// });
//# sourceMappingURL=PnmBodyValidator.spec.js.map