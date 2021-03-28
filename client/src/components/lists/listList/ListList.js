import React, { Component } from 'react'
import { connect } from "react-redux";

import * as actionCreators from '../../../store/actions/actions'
import classes from './ListList.module.css'

class ListList extends Component {

    render() {
        return (
            <>
                <div className={classes.List}>
                    {this.props.lists.map((list) => (
                        <div key={list.list_id}>
                            <a onClick={() => this.props.onListClicked(list)}>{list.list_name}</a>
                        </div>
                    ))}
                </div>
            </>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListClicked: (list) => dispatch(actionCreators.selectList(list)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListList)