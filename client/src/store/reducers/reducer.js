import * as actionTypes from '../actions/actionTypes'

const initialState = {
    lists: [],
    todos : [],
    selctedList: {
        list_name: '',
        list_id: -1
    },
    selctedEditTodo: {
        todo_id: 0,
        todo_name: '',
        completed: false
    },
    newListModal: false,
    deleteListModal: false,
    editTodoModal: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_LISTS:
            return {
                ...state,
                lists : action.lists
            }
        case actionTypes.ADD_LIST:
            return {
                ...state,
                lists : state.lists.concat(action.newList),
                modal: action.modal
            } 
        case actionTypes.DELETE_LIST:
            return {
                ...state,
                lists : action.lists
            }   
        case actionTypes.GET_TODOS:
            return {
                ...state,
                todos : action.todos,
                selctedList: action.selctedList
            }
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos : state.todos.concat(action.todos),
                newTodoDesc: action.newTodoDesc
            }       
        case actionTypes.CB_TODO:
            return {
                ...state,
                todos : action.todos
            }  
        case actionTypes.SELECT_EDIT_TODO:
            return {
                ...state,
                selctedEditTodo : action.selctedEditTodo
            }
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos : action.todos
            }
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos : action.todos
            }  
        case actionTypes.NEW_LIST_MODAL:
            return {
                ...state,
                newListModal : action.modal
            }
        case actionTypes.DELETE_LIST_MODAL:
            return {
                ...state,
                deleteListModal : action.modal
            } 
        case actionTypes.EDIT_TODO_MODAL:
            return {
                ...state,
                editTodoModal : action.modal
            }              
        default:
            return state
    }
}

export default reducer