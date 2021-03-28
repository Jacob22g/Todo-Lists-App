import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './AddList.module.css'

class AddList extends Component {

    state = {
        newListName: ''
    }

    render() {
        return (
            <>
                <h3 className={classes.classes}>Add New List</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onAddList(this.state.newListName)
                    this.props.onCloseModal()
                    this.setState({newListName: ''})
                }}>
                    <input 
                        className={classes.Input}
                        type="text"
                        maxLength="25" 
                        value={this.state.newListName} 
                        placeholder='Insert Name' 
                        required 
                        onChange={e => this.setState({newListName: e.target.value})}/>
                    <button className={classes.AddButton}>Add</button>
                </form>
                <button className={classes.CancelButton} onClick={this.props.onCloseModal}>Cancel</button>
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddList: (list_name) => dispatch(actionCreators.addNewList(list_name)),
        onCloseModal: () => dispatch(actionCreators.closeModal('NEW_LIST_MODAL')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddList)