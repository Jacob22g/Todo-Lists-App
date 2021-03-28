import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

import Modal from '../../components/UI/Modal/Modal'
import EditTodo from '../../components/todos/editTodo/EditTodo'
import InputTodo from '../../components/todos/inputTodo/InputTodo'
import TodoList from '../../components/todos/todoList/TodoList'
import DeleteList from '../../components/lists/deleteList/DeleteList'
import * as actionCreators from '../../store/actions/actions'
import classes from './Todos.module.css'


class Todolist extends Component {    
    render() {
        return (
            <Fragment>
                <Modal show={this.props.showEditModal} modalClosed={this.props.onCloseEditModal}>
                    <EditTodo />
                </Modal>
                <Modal show={this.props.showDeleteListModal} modalClosed={this.props.onCloseDeleteListModal}>
                    <DeleteList />
                </Modal>
                <div className={classes.Todo}>
                    <div className={classes.ListName}>{this.props.selctedList.list_name}</div>
                    <InputTodo />
                    <TodoList />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selctedList: state.selctedList,
        showEditModal: state.editTodoModal,
        showDeleteListModal: state.deleteListModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseEditModal: () => dispatch(actionCreators.closeModal('EDIT_TODO_MODAL')),
        onCloseDeleteListModal: () => dispatch(actionCreators.closeModal('DELETE_LIST_MODAL'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist) 