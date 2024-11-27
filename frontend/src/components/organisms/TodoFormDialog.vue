<template>
    <v-dialog
        v-model="todoDialogStoreObj!.isTodoFormDaialogVisible.value"
        variant="flat"
        persistent
    >
        <v-card>
            <v-card-title>{{
                todoDialogStoreObj!.isEditMode.value
                    ? 'TODO Edit Form'
                    : 'TODO Add Form'
            }}</v-card-title>
            <v-card-item>
                <InputTask v-model:InputTaskValue="InputTaskValue" />
                <InputDate v-model:InputDateValue="InputDateValue" />
                <InputUsername
                    v-model:InputUsernameValue="InputUsernameValue"
                />
            </v-card-item>
            <v-card-item style="text-align: right">
                <UpsertDaialogButtonGroup
                    v-if="todoDialogStoreObj!.isEditMode.value"
                    @addTodoAction="editTodoItem()"
                />
                <UpsertDaialogButtonGroup
                    v-if="!todoDialogStoreObj!.isEditMode.value"
                    @addTodoAction="addTodoItem()"
                />
            </v-card-item>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import InputDate from '../molecules/InputDate.vue';
import InputTask from '../molecules/InputTask.vue';
import InputUsername from '../molecules/InputUsername.vue';
import UpsertDaialogButtonGroup from '../molecules/UpsertDialogButtonGroup.vue';
import { inject } from 'vue';
import { ITodoStore } from '../../modules/ITodoStore';
import { ITodoDialogStore } from '../../modules/ITodoDialogStore';

const todoStoreObj = inject<ITodoStore>('todoStoreObj');
const todoDialogStoreObj = inject<ITodoDialogStore>('todoDialogStoreObj');

const taskId = ref<number>(0);
const InputDateValue = ref<Date>(new Date());
const InputTaskValue = ref<string>('');
const InputUsernameValue = ref<string>('');

watch(
    () => todoStoreObj!.selectedTodoItem.value,
    (todoItem) => {
        todoDialogStoreObj!.isEditMode.value = true;
        taskId.value = todoItem.taskId;
        InputDateValue.value = todoItem.date;
        InputTaskValue.value = todoItem.task;
        InputUsernameValue.value = todoItem.username;
    }
);

const addTodoItem = () => {
    todoStoreObj!.addTodoItem(
        InputDateValue.value,
        InputTaskValue.value,
        InputUsernameValue.value
    );
    resetForm();
};

const editTodoItem = () => {
    todoStoreObj!.editTodoItem(
        taskId.value,
        InputDateValue.value,
        InputTaskValue.value,
        InputUsernameValue.value
    );
    resetForm();
    todoDialogStoreObj!.isEditMode.value = false;
};

const resetForm = () => {
    InputTaskValue.value = '';
    InputDateValue.value = new Date();
    InputUsernameValue.value = '';
};
</script>
