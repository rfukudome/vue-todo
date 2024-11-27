import { ref } from 'vue';

export const todoDialogStore = () => {
    const isTodoFormDaialogVisible = ref(false);
    const isEditMode = ref(false);

    const showDialog = (): void => {
        isTodoFormDaialogVisible.value = true;
    };

    const closeDialog = (): void => {
        isTodoFormDaialogVisible.value = false;
    };

    return {
        isTodoFormDaialogVisible,
        isEditMode,
        showDialog,
        closeDialog,
    };
};
