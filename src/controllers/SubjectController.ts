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

    async deleteSubject(request: Request, response: Response) {
        const { id } = request.params;
    
        try {
            const Id = parseInt(id, 10);
    
            if (isNaN(Id)) {
                return response.status(400).json({ message: 'ID da disciplina inválido' });
            }
    
            const subject = await subjectRepository.findOneBy({ id: Id });
    
            if (!subject) {
                return response.status(404).json({ message: 'Disciplina não encontrada' });
            }
    
            await subjectRepository.remove(subject);
    
            return response.status(200).json({ message: 'Disciplina deletada com sucesso' });
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: 'Ocorreu um erro inesperado' });
        }
    }

    async updateSubject(request: Request, response: Response) {
        const { id } = request.params;
        const { name } = request.body;
    
        try {
            const Id = parseInt(id, 10);
    
            if (isNaN(Id)) {
                return response.status(400).json({ message: 'ID da disciplina inválido' });
            }
    
            const subject = await subjectRepository.findOneBy({ id: Id });
    
            if (!subject) {
                return response.status(404).json({ message: 'Disciplina não encontrada' });
            }
    
            subject.name = name;
    
            await subjectRepository.save(subject);
    
            return response.status(200).json(subject);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: 'Ocorreu um erro inesperado' });
        }
    }
    
    

    
}