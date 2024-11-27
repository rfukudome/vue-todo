<template>
    <Header />
    <div style="margin: 10px">
        <h1>Welcome !</h1>
        <b>This is an app to register daily tasks.</b>
    </div>
    <TodoFormDialog />
    <TodoItemList />
    <Footer />
</template>

<script setup lang="ts">
import { provide } from 'vue';
import Header from '../organisms/Header.vue';
import Footer from '../organisms/Footer.vue';
import TodoItemList from '../organisms/TodoItemList.vue';
import TodoFormDialog from '../organisms/TodoFormDialog.vue';
import { todoStore } from '../../store/TodoStore';
import { todoDialogStore } from '../../store/TodoDialogStore';

const todoStoreObj = todoStore();
const todoDialogStoreObj = todoDialogStore();

provide('todoStoreObj', todoStoreObj);
provide('todoDialogStoreObj', todoDialogStoreObj);
</script>
