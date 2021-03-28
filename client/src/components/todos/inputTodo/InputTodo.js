import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './InputTodo.module.css'

class InputTodo extends Component {

    state = {
        newTodoDescription: ''
    }

    render() {

        let inputForm = null
        if (this.props.selctedList.list_name !== '') {
            inputForm = (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onAddTodo(this.state.newTodoDescription, this.props.selctedList.list_id)
                    this.setState({ newTodoDescription: ''})
                }}>
                    <input className={classes.Input}
                        type="text" 
                        required
                        maxLength="55" 
                        value={this.state.newTodoDescription} 
                        placeholder='New Todo Description' 
                        onChange={e => this.setState({newTodoDescription :e.target.value})}/>
                    <button className={classes.Button}>Add</button>
                </form>
            )
        }

        return (
            <>
                {inputForm}
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        selctedList : state.selctedList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (description, list_id) => dispatch(actionCreators.addTodo(description, list_id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo)