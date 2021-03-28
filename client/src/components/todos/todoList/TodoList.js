import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './TodoList.module.css'

class TodoList extends Component {

    render() {

        let DeleteBtn = null
        if (this.props.selctedList.list_name !== '') {
            DeleteBtn = (
                <button className={classes.DeleteBtn}
                    onClick={this.props.onOpenDeleteListModal}>Delete List</button>
            )
        }

        return (
            <>
                <table className={classes.Table}>
                    <tbody>
                        { this.props.todos.map(todo => (
                            <tr key={todo.todo_id}>
                                <td width="10px">
                                    <label className={classes.container}>
                                        <input
                                            type="checkbox" 
                                            defaultChecked={todo.completed}
                                            onChange={() => this.props.onCbChangedTodo(todo)}/>
                                        <span className={classes.checkmark}></span>
                                    </label>
                                </td>
                                <td><p className={classes.Description}>{todo.description}</p></td>
                                <td width="60px">
                                    <button 
                                        className={classes.InlineEditBtn}
                                        onClick={() => {
                                            this.props.onSelectEditTodo(todo)
                                            this.props.onOpenModal()
                                        }}>
                                            <img 
                                                className={classes.imgBtn}
                                                src="https://image.flaticon.com/icons/png/512/61/61456.png"></img>
                                        </button>
                                </td>
                                <td width="60px">
                                    <button
                                        className={classes.InlineDeleteBtn}
                                        onClick={() => this.props.onDeleteTodo(todo.todo_id)}
                                        >
                                            <img 
                                                className={classes.imgBtn}
                                                src="https://static.vecteezy.com/system/resources/thumbnails/001/192/554/small/x.png"></img>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {DeleteBtn}
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        selctedList: state.selctedList,
        todos : state.todos,
        selctedEditTodo : state.selctedEditTodo,
        showModal: state.editTodoModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTodo: (todo_id) => dispatch(actionCreators.deleteTodo(todo_id)),
        onSelectEditTodo: (todo) => dispatch(actionCreators.onSelectEditTodo(todo)),
        onCbChangedTodo: (todo) => dispatch(actionCreators.cbChangedTodo(todo)),
        // onDeleteList: (list) => dispatch(actionCreators.deleteList(list)),
        onOpenModal: () => dispatch(actionCreators.openModal('EDIT_TODO_MODAL')),
        onOpenDeleteListModal: () => dispatch(actionCreators.openModal('DELETE_LIST_MODAL')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)