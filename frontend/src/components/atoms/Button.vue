<template>
    <v-btn style="text-transform: none">
        {{ props.message }}
    </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
    message: String,
});
</script>
