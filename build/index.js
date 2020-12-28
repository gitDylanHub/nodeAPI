"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var bodyparser = __importStar(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var server = http.createServer(app);
var port = 8081;
var routes = [];
// here we are adding middleware to parse all incoming requests as JSON 
app.use(bodyparser.json());
// here we are adding middleware to allow cross-origin requests
app.use(cors_1.default());
// routes.push(new UsersRoutes(app));
/**
 * Default Route for the Base Application Health Check API.
 */
app.get('/', function (req, res) {
    res.status(200).send("Server up and running!");
});
server.listen(port, function () {
    console.info("Server is running at http://localhost:" + port);
    routes.forEach(function (route) {
        console.info("Configured Routes: " + route.getName);
    });
});
//# sourceMappingURL=index.js.map