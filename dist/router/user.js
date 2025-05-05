"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controller/userController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const alterStudents = new userController_1.default();
router.get('/', alterStudents.loadAdminPanel);
router.post('/addData', alterStudents.addStudentsData);
router.post('/editData', alterStudents.editeStudentData);
router.get('/deleteData', alterStudents.deleteStudentData);
exports.default = router;
