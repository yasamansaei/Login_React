import axios from 'axios';
import React, { useState, useReducer, useEffect } from 'react'
import Add from './Add'
import ShowList from './ShowList'

export const ListContext = React.createContext()
const initialState = { todos: [] };

const reducer = (preState, action) => {
    switch (action.type) {
        case 'add':
            {
                var list;
                axios({
                    method: 'post', url: 'http://localhost:5000/api/v1/ToDoList', data: { title: action.text },
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((response) => {
                   
                    if (response.data.id > 0) {
                        list = response.data;  
                         if (list.id > 0) {
                             console.log(list);
                    return {
                        ...preState,
                        todos: [...preState.todos, list]
                    }
                }
                    }
                }).catch((error) => { console.log(error) });

              
            }

        case 'list':
            return {
                ...preState,
                todos: action.list
            }
        case 'edit':
            let editlist = preState.todos.find((item) => item.id === action.id)
            editlist.title = action.text;
            let newlist = preState.todos.filter((item) => item.id !== action.id)
            return {
                ...preState,
                todos: [...newlist, editlist]
            }
        case 'delete':
            return {
                ...preState,
                todos: preState.todos.filter((item) => item.id !== action.id)
            }
        default:
            break;
    }
}

function ToDoList() {

    const [list, dispatch] = useReducer(reducer, initialState)
    const [statusShow, setStatusShow] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/ToDoList').then(response => {
            dispatch({ type: 'list', list: response.data })
        }).catch(
            error => console.log(error)
        )

        return () => {

        }
    }, [])

    return (
        <>
            <ListContext.Provider value={{ dispatchList: dispatch, todolist: list.todos, statusDone: statusShow, setstatusshow: setStatusShow }} >
                <Add />
                <ShowList />
            </ListContext.Provider>
        </>
    )
}

export default ToDoList


