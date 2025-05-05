import {Request,Response} from 'express'
import User from '../model/userModel'
import user from '../model/userModel';

export default class StudentData{
  //Loading
   async loadAdminPanel(req:Request,res:Response):Promise<void>{
      try {
        const user = await User.find()
        return res.render('adminPanel',{user})
      } catch (error) {
        console.log('admin panel page not found');
      }
    }
    // Adding student Data
    async addStudentsData(req:Request,res:Response):Promise <void>{
      try {
        const {name,age,email} = req.body
        const newData = {
          name,
          age,
          email
        }
        await User.insertOne(newData);
        res.redirect('/');
       return
      } catch (error) {
        console.log('student data is not getting',error);
      }
    }
    //Editing student data
    async editStudentData(req:Request,res:Response):Promise<void>{
      try {
      const id = req.query.userId
      const {name,age,email} = req.body

      await User.findByIdAndUpdate(id,{name,email,age})
      res.redirect('/');
    
      return;
      } catch (error) {
        console.log('student data editing error',error);
      }
    }
  //Delete Student Data
   async deleteStudentData(req:Request,res:Response):Promise<void>{
      try {
        const id = req.query.id
        await User.findByIdAndDelete(id);
        res.redirect('/');
        return;
      } catch (error) {
        console.log('user data deleting error',error);
  
      }
    }
}