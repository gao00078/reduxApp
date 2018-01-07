import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Todo extends Component {
    render() {
        return (
            <li className={this.props.status ? "done" : "open"} id={"todo-" + this.props.id}>
                <button className="todo" onClick={this.props.onClick}>{this.props.status ? "✅" : "❎"}</button>
                {this.props.text}
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => dispatch(actions.todoToggle(ownProps.id))
    };
};
export default connect(undefined, mapDispatchToProps)( Todo );
