import StudentData from '../controller/userController'
import { Router } from "express"
const router = Router()
const alterStudents = new StudentData()
router.get('/',alterStudents.loadAdminPanel)
router.post('/addData',alterStudents.addStudentsData)
router.post('/editData',alterStudents.editStudentData);
router.get('/deleteData',alterStudents.deleteStudentData);
export default router