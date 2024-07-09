import {Snackbar, Button} from "@mui/material";
import { useState } from "react";

export const MuiSnackbar = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string ) => {
        if(reason === 'clickaway') {
            return
        }
        setOpen(false);
    }
    return (
        <>
            <Button onClick={() => setOpen(true)}> submit </Button>
            <Snackbar
                message='Form submitted successfully!'
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
            />
        </>
    )
}
