import axios from 'axios'
import * as actionTypes from './actionTypes'

// -- Lists --

// LOAD
export const loadLists = () => {
    return(dispatch, getState) => {
        axios.get('/lists')
            .then((response) => {
                dispatch(load(response.data))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const load = (data) => {
    return {
        type: actionTypes.GET_LISTS,
        lists : data
    }
}

// SELECT A LIST OF TODOS
export const selectList = (list) => {
    return(dispatch, getState) => {
        axios.get(`/lists/todos/${list.list_id}`)
            .then((response) => {
                dispatch(loadTodo(response.data, list))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const loadTodo = (data, list) => {
    return {
        type: actionTypes.GET_TODOS,
        todos : data,
        selctedList : list
    }
}

// ADD LIST
export const addNewList = (list_name) => {
    return(dispatch, getState) => {
        axios.post('/lists', {
            list_name
        })
            .then((response) => {
                dispatch(addLis(response.data))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const addLis = (data) => {
    return {
        type: actionTypes.ADD_LIST,
        newList : data,
        modal: false
    }
}


//DELETE LIST
export const deleteList = ({ list_id }) => {
    return(dispatch, getState) => {
        axios.delete(`/lists/${list_id}`)
            .then((response) => {
                dispatch(delLis(response.data, getState))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const delLis = (data, getState) => {
    window.location = '/'
    const newLists = getState().lists.filter((list) => {
        return list.list_id !== data.list_id
    })  
    return {
        type: actionTypes.DELETE_LIST,
        lists: newLists
    }
}


// -- TODOS --

// ADD TODO
export const addTodo = (description, list_id) => {
    return(dispatch, getState) => {
        axios.post('/todos', {
            description,
            list_id
        })
            .then((response) => {
                dispatch(addT(response.data))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const addT = (data) => {
    return {
        type: actionTypes.ADD_TODO,
        todos : data,
        newTodoDesc: ''
    }
}

// SELECT EDIT TODO
export const onSelectEditTodo = ({todo_id, completed, description}) => {
    return {
        type: actionTypes.SELECT_EDIT_TODO,
        selctedEditTodo: {todo_id, completed, description}
    }
}

// EDIT TODO
export const editTodo = ({todo_id, completed}, newDescription) => {
    return(dispatch, getState) => {
        axios.put(`/todos/${todo_id}`, {
            description: newDescription,
            completed
        })
            .then((response) => {
                dispatch(editT(todo_id, newDescription, getState))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const editT = (todo_id, newDescription, getState) => {
    const newTodos = getState().todos.map((todo) => {
        if(todo.todo_id === todo_id){
            return {
                ...todo,
                description: newDescription
            }
        }
        return todo
    })  
    return {
        type: actionTypes.EDIT_TODO,
        todos: newTodos
    }
}

// CB clicked
export const cbChangedTodo = ({todo_id, completed, description}) => {
    return(dispatch, getState) => {
        axios.put(`/todos/${todo_id}`, {
            description,
            completed: !completed
        })
            .then((response) => {
                dispatch(cbTodo(todo_id, getState))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const cbTodo = (todo_id, getState) => {

    const newTodos = getState().todos.map((todo) => {
        if(todo.todo_id === todo_id){
            return {
                ...todo,
                completed: !todo.completed
            }
        }
        return todo
    })  

    return {
        type: actionTypes.CB_TODO,
        todos: newTodos
    }
}

//DELETE TODO
export const deleteTodo = (todo_id) => {
    return(dispatch, getState) => {
        axios.delete(`/todos/${todo_id}`)
            .then((response) => {
                dispatch(delTo(response.data, getState))
            })
            .catch((err) => {
                console.error(err.message)
            })
    }
}
const delTo = (data, getState) => {
    const newTodos = getState().todos.filter((todo) => {
        return todo.todo_id !== data.todo_id
    })  
    return {
        type: actionTypes.DELETE_TODO,
        todos: newTodos
    }
}



//Modal
export const openModal = (modalType) => {
    return {
        type: modalType,
        modal: true
    }
}
export const closeModal = (modalType) => {
    return {
        type: modalType,
        modal: false
    }
}