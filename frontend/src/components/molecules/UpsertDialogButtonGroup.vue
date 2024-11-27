<template>
    <div>
        <CloseButton
            color="red"
            :message="closeMessage"
            variant="flat"
            @click="closeDaialog()"
        />
        <UpsertButton
            color="info"
            :message="upsertMessage"
            variant="flat"
            @click="addTodo()"
        />
    </div>
</template>

<script setup lang="ts">
import UpsertButton from '../atoms/Button.vue';
import CloseButton from '../atoms/Button.vue';
import { inject } from 'vue';
import { ITodoDialogStore } from '../../modules/ITodoDialogStore';

const todoDialogStoreObj = inject<ITodoDialogStore>('todoDialogStoreObj');
let upsertMessage: string = 'Save';
let closeMessage: string = 'Exit';

const emit = defineEmits<{
    (event: 'addTodoAction'): void;
}>();
const addTodo = (): void => {
    emit('addTodoAction');
    todoDialogStoreObj!.closeDialog();
};

const closeDaialog = (): void => {
    todoDialogStoreObj!.closeDialog();
    todoDialogStoreObj!.isEditMode.value = false;
};
</script>
