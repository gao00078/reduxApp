import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";


class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.todoInputChanged} placeholder="Add a New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addTodoValue: state.todoInputValue
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        todoInputChanged: (e) => dispatch(actions.todoInputChanged(e)),
        saveNewTodo: () => dispatch(actions.saveNewTodo())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddNewTodo);
