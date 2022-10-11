import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { CreateAcount } from '../pages/CreateAcount/CreateAcount'
import { Login } from '../pages/Login/Login'
import { NotFound } from '../pages/NotFound/NotFound'
import { Perfil } from '../pages/Perfil/Perfil'
import { Todo } from '../pages/Todo/Todo'

export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Todo/>}/>
            <Route path='perfil' element={<Perfil/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='createacount' element={<CreateAcount/>}/>
            <Route path='*' element={<NotFound/>}/>
        </ReactDomRoutes>
    )
}
