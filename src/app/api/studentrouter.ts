import { Router } from 'express';
import studentcontroller from './studentcontroller';

const sroutes = Router();

sroutes.get("/student", studentcontroller.getAllStudents);


module.exports = sroutes;