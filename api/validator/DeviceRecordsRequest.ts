import Ajv, { JSONSchemaType } from 'ajv';
import {RecordsRequest} from "../common/types";

const ajv = new Ajv();
export const deviceRecordSchema: JSONSchemaType<RecordsRequest> = {
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

export const deviceRecordValidate = ajv.compile<RecordsRequest>(deviceRecordSchema);
