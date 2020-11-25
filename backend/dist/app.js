"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
//Instanciando o express
const app = express_1.default();
//Middlewares
app.use(express_1.default.json());
//Routes
app.use(routes_1.default);
exports.default = app;
