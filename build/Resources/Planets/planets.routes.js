"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetsRoutes = void 0;
var routes_config_1 = require("../../Common/routes.config");
var PlanetsRoutes = /** @class */ (function (_super) {
    __extends(PlanetsRoutes, _super);
    function PlanetsRoutes(app) {
        return _super.call(this, app, 'PlanetsRoutes') || this;
    }
    PlanetsRoutes.prototype.configureRoutes = function () {
        this.app.route('/planets')
            .get(function (req, res) {
            res.status(200).send();
        })
            .post(function (req, res) {
            res.status(200).send();
        });
        this.app.route('/planets/:planetId')
            .get(function (req, res) {
            res.status(200).send();
        })
            .post(function (req, res) {
            res.status(200).send();
        })
            .put(function (req, res) {
            res.status(200).send();
        })
            .patch(function (req, res) {
            res.status(200).send();
        })
            .delete(function (req, res) {
            res.status(200).send();
        });
        return this.app;
    };
    return PlanetsRoutes;
}(routes_config_1.CommonRoutesConfig));
exports.PlanetsRoutes = PlanetsRoutes;
//# sourceMappingURL=planets.routes.js.map