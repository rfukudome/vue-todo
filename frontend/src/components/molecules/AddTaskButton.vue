<template>
    <AddIconButton
        :icon="addIconName"
        :message="addMessage"
        :color="addButtonColor"
        variant="flat"
    />
</template>

<script setup lang="ts">
import AddIconButton from '../atoms/IconButton.vue';
let addMessage: string = 'Add Task';
let addIconName: string = 'mdi-plus-box-outline';
let addButtonColor: string = 'green';
</script>
