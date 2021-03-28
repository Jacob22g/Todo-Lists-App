import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

import Modal from '../../components/UI/Modal/Modal'
import * as actionCreators from '../../store/actions/actions'
import AddList from '../../components/lists/addList/AddList'
import ListList from '../../components/lists/listList/ListList'
import classes from './Sidemenu.module.css'

class Sidemenu extends Component {

    // Get the list on init
    componentDidMount() {
        this.props.onLoadList()
    }

    render() {
        return (
            <Fragment>
                <Modal show={this.props.showModal} modalClosed={this.props.onCloseModal}>
                    < AddList />
                </Modal>
                <div className={classes.Sidemenu}>
                    <div>
                        <p className={classes.AppTitle}>Todo Lists App</p>
                    </div>
                    <button className={classes.button} onClick={this.props.onOpenModal}>Add New List</button>
                    < ListList />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showModal: state.newListModal,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadList: () => dispatch(actionCreators.loadLists()),
        onOpenModal: () => dispatch(actionCreators.openModal('NEW_LIST_MODAL')),
        onCloseModal: () => dispatch(actionCreators.closeModal('NEW_LIST_MODAL')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidemenu)