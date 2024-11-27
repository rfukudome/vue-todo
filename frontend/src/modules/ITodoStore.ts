import TodoItem from './TodoItem';

export interface ITodoStore {
    todoList: TodoItem[];
    selectedTodoItem: TodoItem;
    addTodoItem: (
        InputDateValue: Date,
        InputTaskValue: string,
        InputUsernameValue: string
    ) => void;
    editTodoItem: (
        selectedTaskId: number,
        InputDateValue: Date,
        InputTaskValue: string,
        InputUsernameValue: string
    ) => void;
    deleteTodoItem: (taskId: number) => void;
}
