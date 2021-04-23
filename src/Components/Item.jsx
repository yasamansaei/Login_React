import React, { useContext, useState } from 'react'
import Edit from './Edit'
import { ListContext } from './ToDoList'

function Item(props) {
    const listcontext=useContext(ListContext)
    const [edit, setEdit] = useState(false)
    const {dispatchList}=listcontext
    const {id,title,done}=props;
    const editHandler=()=>
    {
        setEdit(true);
    }
    return (
     <>
     {edit ?  <Edit cancel={setEdit} id={id}/> :  
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>
        {title}
        </div>
        <div>
            <button type="button" className="btn btn-info btn-sm" onClick={editHandler}>edit</button>
            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>dispatchList({type:'delete',id:id})}>delete</button>
        </div>
    </div>
     }
</>
    )
}

export default Item
