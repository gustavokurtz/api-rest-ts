import { Router } from 'express'
import { SubjectController } from './controllers/SubjectController'
import { RoomController } from './controllers/RoomController'


const routes = Router()

// rotas de criação
routes.post('/subject', new SubjectController().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)

// rotas de listagem
routes.get('/room', new RoomController().list)

// rotas de exclusão
routes.delete('/room/:idRoom', new RoomController().deleteRoom)
routes.delete('/subject/:id', new SubjectController().deleteSubject)

//rotas de atualizção
routes.put('/room/:idRoom', new RoomController().updateRoom)
routes.put('/subject/:id', new SubjectController().updateSubject)


export default routes 