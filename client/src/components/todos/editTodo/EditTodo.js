import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './EditTodo.module.css'

class EditTodo extends Component {

    state = {
        editDecription: ''
    }

    render() {
        return (
            <>
                <h3 className={classes.Title}>Edit Todo</h3>
                <div className={classes.Text}>{this.props.selctedEditTodo.todo_name}</div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onEditTodo(this.props.selctedEditTodo, this.state.editDecription)
                    this.props.onCloseModal()
                    this.setState({editDecription: ''})
                }}>
                    <p>{this.props.selctedEditTodo.description}</p>
                    <input 
                        className={classes.Input}
                        type="text" 
                        maxLength="55" 
                        value={this.state.editDecription} 
                        onChange={e => this.setState({editDecription: e.target.value})} 
                        placeholder='Insert New Description' 
                        required/>
                    <button className={classes.EditButton}>Edit</button>
                </form>
                <button className={classes.CancelButton} onClick={ this.props.onCloseModal }>Cancel</button>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        selctedEditTodo : state.selctedEditTodo,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditTodo: (todo, newDescription) => dispatch(actionCreators.editTodo(todo, newDescription)),
        onCloseModal: () => dispatch(actionCreators.closeModal('EDIT_TODO_MODAL'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo)