import { useContext } from 'react';
import { SnackbarContext } from "./SnackbarProvider";

export default function useSnack() {
    return useContext(SnackbarContext);
}