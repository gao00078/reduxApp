import { TOGGLE_STATUS, SAVE_NEW_TODO, TODO_INPUT_CHANGED } from "./actions";

export default function todoApp(state, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {

    case TOGGLE_STATUS:
        let todoList = newState.todoList.map((item)=>{
            if (item.id == action.id) {return Object.assign({}, item, {status: (item.status) ? 0 : 1});
            } else {  return Object.assign({}, item);}
        });
        newState.todoList = [...todoList];
        break;

    case TODO_INPUT_CHANGED:
        newState.todoInputValue = action.e.target.value;
        break;

    case SAVE_NEW_TODO:
        let lastID = -1;
        for (let i=0; i<newState.todoList.length; i++) {
            if (newState.todoList[i].id > lastID) lastID = newState.todoList[i].id;
        }
        let newTodo = {
            id: lastID + 1,
            key: lastID + 1,
            text: state.todoInputValue,
            status: 0
        };
        newState.todoList = [...newState.todoList, newTodo];
        newState.todoInputValue = "";
        break;

    default:
        return state;
    }
    return newState;
}
