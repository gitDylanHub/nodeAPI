"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
/**
 * Base Configuration to modularize routing by abstraction
 */
var CommonRoutesConfig = /** @class */ (function () {
    function CommonRoutesConfig(app, name) {
        this.app = app;
        this.name = name;
    }
    CommonRoutesConfig.prototype.getName = function () {
        return this.name;
    };
    return CommonRoutesConfig;
}());
exports.CommonRoutesConfig = CommonRoutesConfig;
//# sourceMappingURL=routes.config.js.map