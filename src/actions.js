export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const SAVE_NEW_TODO = "SAVE_NEW_TODO";
export const TODO_INPUT_CHANGED = "TODO_INPUT_CHANGED";

export function todoToggle(id) {
    return {
        type: TOGGLE_STATUS,
        id: id
    };
}
export function saveNewTodo() {
    return {
        type: SAVE_NEW_TODO
    };
}
export function todoInputChanged(e) {
    return {
        type: TODO_INPUT_CHANGED,
        e: e
    };
}
