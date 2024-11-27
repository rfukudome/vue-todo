<template>
    <div>
        <label>task:</label>
        <TextArea v-model="textareaItem" />
    </div>
</template>
<script setup lang="ts">
import TextArea from '../atoms/TextArea.vue';
const textareaItem = defineModel('InputTaskValue');
</script>
