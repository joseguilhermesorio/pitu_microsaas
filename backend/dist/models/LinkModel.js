"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = __importDefault(require("../database"));
const linkModel = database_1.default.define('link', {
    id: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    url: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    code: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        unique: true
    },
    hits: {
        type: sequelize_1.default.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
});
exports.default = linkModel;
