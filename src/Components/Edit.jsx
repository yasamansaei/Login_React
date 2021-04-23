import React, { useContext, useState } from 'react'
import { ListContext } from './ToDoList'

function Edit(props) {
    const listcontext=useContext(ListContext)
    const {dispatchList}=listcontext
    const [title,setTitle]=useState('')
    const Edit=()=>
    {
        dispatchList({type:'edit',id:props.id,text:title})
        props.cancel(false)
    }
        return (
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div>
            <button type="button" className="btn btn-info btn-sm" onClick={Edit}>edit</button>
            <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>props.cancel(false)}>cancle</button>
        </div>
    </div>
    )
}

export default Edit
