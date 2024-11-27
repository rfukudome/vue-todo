<template>
    <div>
        <label>username:</label>
        <TextField v-model="textFieldItem" />
    </div>
</template>
<script setup lang="ts">
import TextField from '../atoms/TextField.vue';
const textFieldItem = defineModel('InputUsernameValue');
</script>
