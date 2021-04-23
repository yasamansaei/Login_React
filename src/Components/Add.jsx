import React,{useState,useContext} from 'react'
import { ListContext } from './ToDoList'

function Add(props) {
    const [active,setActive]=useState();
    
    const listcontext=useContext(ListContext)
    const {dispatchList}=listcontext
    const formHandler=(e)=>
    {
        e.preventDefault();
        dispatchList({type:'add',text:active});
        setActive('')
    }
    return (
        <form onSubmit={(e)=>formHandler(e)}>
        <div className="row">
        <input type="text" className="text-from" placeholder="I do ..."  onChange={(e)=>{setActive(e.target.value)}} value={active}/>
        <button type="submit" className="btn btn-success">Add</button>
        </div>
        </form>
    )
}

export default Add
