import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";


export class SubjectController {
    
    async create(request: Request, response: Response) {
        const { name } = request.body
        
        if(!name){
            return response.status(400).json({ message: "O nome é obrigatório" })
        }

        try {
           const newSubject = subjectRepository.create({ name })

            await subjectRepository.save(newSubject)

           return response.status(201).json(newSubject)

        } catch (error) {
            console.log(error)
            return response.status(500).json({ message: "Ocorreu um erro inesperado" })
        }
    }
}