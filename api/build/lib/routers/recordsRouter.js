"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordsRouter = void 0;
const recordsController_1 = require("../controllers/recordsController");
const express_1 = __importDefault(require("express"));
exports.recordsRouter = express_1.default.Router();
exports.recordsRouter.get('/', recordsController_1.getExampleData);
exports.recordsRouter.post('/', () => { });
//# sourceMappingURL=recordsRouter.js.map