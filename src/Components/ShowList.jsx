import React, { useState,useEffect ,useContext} from 'react'
import Item from './Item'
import NavComponent from './NavComponent'
import { ListContext } from './ToDoList'


function ShowList() {
    const listcontext=useContext(ListContext)
    const {todolist,statusDone}=listcontext;
    console.log(todolist)
    let todolistFilter=todolist.filter(item=>item.done===statusDone);
    return (
        
        <>
          <div className="d-flex flex-column align-items-center ">
                      <NavComponent></NavComponent>
                        <div className="col-6 mb-2">
                        { todolistFilter.length===0 ? <p>List is Empty</p> :
                       todolistFilter.map((item,index)=>{return <Item id={item.id} title={item.title} done={item.done} key={index}></Item>
                           }) }
                        </div>
               
                    </div>


     
        </>   
    )
}

export default ShowList
