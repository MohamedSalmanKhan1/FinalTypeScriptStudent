import { Request, Response } from "express";
import { Student } from "../entities/student";

class StudentController {

  async getAllStudents(req: Request, res: Response) {
    const students = await Student.find();

    return res.json(students);
  }
}

export default new StudentController();