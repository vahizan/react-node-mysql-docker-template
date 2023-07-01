"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pnmRequestSchemaValidate = exports.pnmRequestSchema = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
const propertyAddressSchema = {
    type: 'object',
    properties: {
        postcode: { type: 'string' },
        houseIdentifier: { type: 'string' }
    },
    required: ['postcode', 'houseIdentifier'],
    additionalProperties: true
};
const propertyUprnSchema = {
    type: 'object',
    properties: {
        uprn: { type: 'number' }
    },
    required: ['uprn'],
    additionalProperties: true
};
const propertyAddressIdSchema = {
    type: 'object',
    properties: {
        addressId: { type: 'string' }
    },
    required: ['addressId'],
    additionalProperties: true
};
exports.pnmRequestSchema = {
    type: 'object',
    anyOf: [propertyAddressSchema, propertyUprnSchema, propertyAddressIdSchema]
};
exports.pnmRequestSchemaValidate = ajv.compile(exports.pnmRequestSchema);
//# sourceMappingURL=PnmRequest.js.map