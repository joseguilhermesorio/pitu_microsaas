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
const LinkModel_1 = __importDefault(require("./LinkModel"));
function findByCode(code) {
    return LinkModel_1.default.findOne({ where: { code: code } });
}
function add(link) {
    return LinkModel_1.default.create(link);
}
function hitLink(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const link = yield findByCode(code);
        if (!link) {
            return false;
        }
        link.hits++;
        yield link.save();
        return link;
    });
}
exports.default = { findByCode, add, hitLink };
