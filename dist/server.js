"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const connectDB_1 = require("./db/connectDB");
const app = (0, express_1.default)();
(0, connectDB_1.connectDB)();
const user_1 = __importDefault(require("./router/user"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', user_1.default);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
const PORT = 3000;
app.listen(PORT, () => {
    console.log('http://localhost:3000');
});
