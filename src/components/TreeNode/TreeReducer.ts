import { Todo, Action } from '../types'

const updateChildTodos = (children: Todo[], parentId: number, newChildTodo: Todo): Todo[] => {
  return children.map((child) =>
    child.id === parentId
      ? { ...child, children: [...child.children, newChildTodo] }
      : { ...child, children: updateChildTodos(child.children, parentId, newChildTodo) }
  );
}

const TodoReducer = function(state: Todo[], action: Action): Todo[] {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload!.newTodo!];
    case 'ADD_CHILD_TODO':
      return state.map((todo) =>
        todo.id === action.payload!.parentId
          ? { ...todo, children: [...todo.children, action.payload!.newTodo!] }
          : { ...todo, children: updateChildTodos(todo.children, action.payload!.parentId!, action.payload!.newTodo!) }
      );
      case "DELETE_TODO":
            return state.filter((item: any) => item.id !== action!.payload!.parentId)
    default:
      return state;
  }
}
export default TodoReducer;