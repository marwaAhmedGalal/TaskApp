import { List, ListItem, ListItemText, IconButton, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import './taskListStyle.css'

import { useState } from "react";
const Task = (props) => {
    const deleteTask = () => {
        props.onCheck(props.id);
    };


    const [edit, setEdit] = useState(false)
    const [newItem, setNewItem] = useState()

    return (
        <List  className="list" sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem
                key={props.id}
                disableGutters
                secondaryAction={
                    <>
                        <IconButton tooltip="Description here">
                            <DeleteIcon onClick={deleteTask} />
                        </IconButton>
                        <IconButton tooltip="Description here" >
                            <ModeEditIcon />
                        </IconButton>

                    </>


                }

            >
                <ListItemText primary={`${props.text}`} />
            </ListItem>
        </List>

    );
};

export default Task;
