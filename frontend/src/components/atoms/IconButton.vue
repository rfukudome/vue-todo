<template>
    <v-btn :color="props.color" style="text-transform: none">
        <v-icon :icon="props.icon" />
        {{ props.message }}
    </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
    message: String,
    icon: String,
    color: String,
});
</script>
