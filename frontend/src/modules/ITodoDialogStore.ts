export interface ITodoDialogStore {
    isTodoFormDaialogVisible: boolean;
    isEditMode: boolean;
    showDialog: () => void;
    closeDialog: () => void;
}
