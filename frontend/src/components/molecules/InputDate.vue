<template>
    <div>
        <label>date:</label>
        <DateTextInput v-model="dateItem" />
    </div>
</template>
<script setup lang="ts">
import DateTextInput from '../atoms/DateTextInput.vue';
const dateItem = defineModel('InputDateValue');
</script>
