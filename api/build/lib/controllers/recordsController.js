"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExampleData = void 0;
const getExampleData = (req, res) => {
    const exampleData = {
        message: 'This is an example response',
    };
    res.json(exampleData);
};
exports.getExampleData = getExampleData;
//# sourceMappingURL=recordsController.js.map