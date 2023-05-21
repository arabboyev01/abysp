import { ActionType } from './Actions'

export const initialState = {
    toDoData: [],
}
let id = 0
const ToDoReducer = (state: any, action: any) => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return {
                toDoData: [...state.toDoData, {
                    id: id++,
                    name: action.payload
                }],
            };
        case ActionType.DELETE_TODO:
            return {
                toDoData: state.toDoData.filter((item: any) => item.id !== action.payload),
            };
        default:
            return state;
    }
}

export default ToDoReducer;