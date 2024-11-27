<template>
    <v-data-table
        :items="todoStoreObj!.todoList.value"
        :headers="tableHeaders"
        item-key="taskId"
        :items-per-page="itemsPerPage"
    >
        <template v-slot:[`item.actions`]="{ item }">
            <EditIconButton
                :icon="editIconName"
                :message="editMessage"
                :color="ediButtonColor"
                variant="text"
                @click="editTodo(item as TodoItem)"
            />
            <DeleteIconButton
                :icon="deleteIconName"
                :message="deleteMessage"
                :color="deleteButtonColor"
                variant="text"
                @click="deleteTodoItem(item as TodoItem)"
            />
        </template>
        <template v-slot:[`item.date`]="{ item }">
            {{
                format(
                    new Date((item as TodoItem).date),
                    'yyyy年MM月dd日 HH:mm'
                )
            }}
        </template>
    </v-data-table>
</template>

<script setup lang="ts">
import TodoItem from '../../modules/TodoItem';
import EditIconButton from '../atoms/IconButton.vue';
import DeleteIconButton from '../atoms/IconButton.vue';
import { inject } from 'vue';
import { format } from 'date-fns';
import { ITodoStore } from '../../modules/ITodoStore';
import { ITodoDialogStore } from '../../modules/ITodoDialogStore';

const todoStoreObj = inject<ITodoStore>('todoStoreObj');
const todoDialogStoreObj = inject<ITodoDialogStore>('todoDialogStoreObj');

let editMessage: string = '';
let editIconName: string = 'mdi-file-edit-outline';
let ediButtonColor: string = 'yellow-darken-4';

let deleteMessage: string = '';
let deleteIconName: string = 'mdi-trash-can-outline';
let deleteButtonColor: string = 'red';

let tableHeaders: Array<object> = [
    { title: 'タスクID', key: 'taskId', align: 'start', width: '10%' },
    { title: 'タスク内容', key: 'task', align: 'start', width: '35%' },
    { title: '期限', key: 'date', align: 'start', width: '25%' },
    { title: 'ユーザ名', key: 'username', align: 'start', width: '10%' },
    { title: '操作', key: 'actions', align: 'start', width: '20%' },
];

let itemsPerPage = 5;

const editTodo = (item: TodoItem): void => {
    todoDialogStoreObj!.showDialog();
    todoStoreObj!.selectedTodoItem.value = item;
    todoDialogStoreObj!.isEditMode.value = true;
};

const deleteTodoItem = (item: TodoItem): void => {
    todoStoreObj!.deleteTodoItem(item.taskId);
};
</script>
