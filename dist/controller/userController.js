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
const userModel_1 = __importDefault(require("../model/userModel"));
class StudentData {
    loadAdminPanel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.default.find();
                return res.render('adminPanel', { user });
            }
            catch (error) {
                console.log('admin panel page not found');
            }
        });
    }
    addStudentsData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {              
                const { name, age, email } = req.body;
                const newData = {
                    name,
                    age,
                    email
                };
                yield userModel_1.default.insertOne(newData);
                res.redirect('/');
                return;
            }
            catch (error) {
                console.log('student data is not getting', error);
            }
        });
    }
    editStudentData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.userId;
                const { name, age, email } = req.body;
                yield userModel_1.default.findByIdAndUpdate(id, { name, email, age });
                res.redirect('/');
                return;
            }
            catch (error) {
                console.log('studnet data editing error', error);
            }
        });
    }
    deleteStudentData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                yield userModel_1.default.findByIdAndDelete(id);
                res.redirect('/');
                return;
            }
            catch (error) {
                console.log('user data deleting error', error);
            }
        });
    }
}
exports.default = StudentData;
