"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LinkController_1 = __importDefault(require("../controllers/LinkController"));
const routes = express_1.Router();
routes.get('/links/:code', LinkController_1.default.hitLink);
routes.get('/links/:code/stats', LinkController_1.default.getLink);
routes.post('/links', LinkController_1.default.postLink);
exports.default = routes;
