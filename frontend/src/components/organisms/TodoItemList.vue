<template>
    <div>
        <AddTaskButton @click="addShowDialog()" />
        <TodoDataTable />
    </div>
</template>

<script setup lang="ts">
import TodoDataTable from '../molecules/TodoDataTable.vue';
import AddTaskButton from '../molecules/AddTaskButton.vue';
import { inject } from 'vue';
import { ITodoDialogStore } from '../../modules/ITodoDialogStore';

const todoDialogStoreObj = inject<ITodoDialogStore>('todoDialogStoreObj');

const addShowDialog = () => {
    todoDialogStoreObj!.showDialog();
};
</script>
