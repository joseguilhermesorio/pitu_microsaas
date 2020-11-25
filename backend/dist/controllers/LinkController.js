"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const LinkRepository_1 = __importDefault(require("../models/LinkRepository"));
function generateCode() {
    let link = '';
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        link += caracters.charAt(Math.floor(Math.random() * caracters.length));
    }
    return link;
}
function postLink(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const link = request.body;
        link.code = generateCode();
        link.id = uuid_1.v4();
        link.hits = 0;
        const result = yield LinkRepository_1.default.add(link);
        return response.status(201).json(result);
    });
}
function getLink(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code } = request.params;
        const link = yield LinkRepository_1.default.findByCode(code);
        ;
        if (!link) {
            return response.status(404).json({ message: "NOT FOUND" });
        }
        return response.status(200).json(link);
    });
}
function hitLink(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { code } = request.params;
        const link = yield LinkRepository_1.default.hitLink(code);
        if (!link) {
            return response.status(404).json({ message: "NOT FOUND" });
        }
        return response.status(200).json(link);
    });
}
exports.default = { postLink, getLink, hitLink };
