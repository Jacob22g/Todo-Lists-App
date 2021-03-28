import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './DeleteList.module.css'

class Delete extends Component {
    render() {
        return (
            <>
                <h3 className={classes.Title} >Delete List</h3>
                <p className={classes.Text} >Are you sure you want to delete this list?</p>
                <button className={classes.CancelButton} onClick={this.props.onCloseModal}>Cancel</button>
                <button className={classes.DelButton} onClick={ () => this.props.onDeleteList(this.props.selctedList) }>Delete</button>
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        selctedList: state.selctedList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteList: (list) => dispatch(actionCreators.deleteList(list)),
        onCloseModal: () => dispatch(actionCreators.closeModal('DELETE_LIST_MODAL'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete)