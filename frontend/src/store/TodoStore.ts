import { ref } from 'vue';
import TodoItem from '../modules/TodoItem';

export const todoStore = () => {
    const todoList = ref<TodoItem[]>([]);
    const selectedTodoItem = ref<TodoItem | null>(null);

    const addTodoItem = (
        InputDateValue: Date,
        InputTaskValue: string,
        InputUsernameValue: string
    ) => {
        if (
            InputTaskValue == null ||
            InputDateValue == null ||
            InputUsernameValue == null
        ) {
            console.error('Some input components are not properly referenced.');
            return;
        }
        const lastTaskId =
            todoList.value.length > 0
                ? todoList.value[todoList.value.length - 1].taskId + 1
                : 1;
        const todoItem: TodoItem = {
            taskId: lastTaskId,
            task: InputTaskValue,
            date: InputDateValue,
            username: InputUsernameValue,
        };
        todoList.value.push(todoItem);
    };

    const editTodoItem = (
        selectedTaskId: number,
        InputDateValue: Date,
        InputTaskValue: string,
        InputUsernameValue: string
    ) => {
        const editTodoIndex = todoList.value.findIndex(
            (todo) => todo.taskId === selectedTaskId
        );
        const updateTodoItem: TodoItem = {
            taskId: selectedTaskId,
            date: InputDateValue,
            task: InputTaskValue,
            username: InputUsernameValue,
        };
        if (editTodoIndex !== -1) {
            todoList.value[editTodoIndex] = {
                ...todoList.value[editTodoIndex],
                ...updateTodoItem,
            };
        }
    };

    const deleteTodoItem = (taskId: number) => {
        const todoIndex = todoList.value.findIndex(
            (todo: TodoItem) => todo.taskId === taskId
        );
        if (todoIndex !== -1) {
            todoList.value.splice(todoIndex, 1);
        }
    };

    return {
        todoList,
        selectedTodoItem,
        addTodoItem,
        editTodoItem,
        deleteTodoItem,
    };
};
