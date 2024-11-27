<template>
    <div class="d-flex justify-center">
        <v-date-input v-model="dateItem" label="Select a date"></v-date-input>
    </div>
</template>

<script setup lang="ts">
import { VDateInput } from 'vuetify/labs/VDateInput';
const dateItem = defineModel();
</script>
