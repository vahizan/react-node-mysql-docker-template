"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceRecordValidate = exports.deviceRecordSchema = void 0;
const ajv_1 = __importDefault(require("ajv"));
const ajv = new ajv_1.default();
exports.deviceRecordSchema = {
    type: "object",
    properties: {
        name: {
            type: "string"
        },
        osType: {
            type: "string"
        }
    },
    required: ["name", "osType"],
    additionalProperties: false
};
exports.deviceRecordValidate = ajv.compile(exports.deviceRecordSchema);
//# sourceMappingURL=DeviceRecordsRequest.js.map