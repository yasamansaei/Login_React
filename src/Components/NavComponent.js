import React,{useContext} from 'react'
import { ListContext } from './ToDoList'

function NavComponent() {
    const listcontext=useContext(ListContext)
    const {todolist,statusDone,setstatusshow}=listcontext
    return (
        <nav className="col-6 mb-3">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className={`nav-item nav-link font-weight-bold ${statusDone===false ? 'active' :''}`} 
            id="nav-home-tab" onClick={()=>setstatusshow(false)}>
                undone <span className="badge badge-secondary" >{todolist.filter(item=>item.done===false).length}</span></a>

            <a className={`nav-item nav-link font-weight-bold ${statusDone===true ? 'active' :''}`} 
            id="nav-profile-tab" onClick={()=>setstatusshow(true)}>
                done <span className="badge badge-success">{todolist.filter(item=>item.done===true).length}</span></a>
        </div>
    </nav>
    )
}

export default NavComponent
