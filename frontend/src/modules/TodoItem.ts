import ITodoItem from './ITodoItem';

class TodoItem implements ITodoItem {
    taskId: number;
    task: string;
    date: Date;
    username: string;

    constructor(taskId: number, task: string, date: Date, username: string) {
        this.taskId = taskId;
        this.task = task;
        this.date = date;
        this.username = username;
    }
}

export default TodoItem;
