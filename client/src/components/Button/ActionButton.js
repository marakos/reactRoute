import React from 'react';
import {  Button } from '@material-ui/core/';
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";

export const TYPE = {
        LIKE : "like",
        DELETE : "delete",
}

const ActionButton = ({type, likeCount, onUpdate, color}) => {


    const renderIcon = (t,l) => {
        if (t === TYPE.LIKE){
            return <> <ThumbUpAltIcon fontSize="small" /> Like {l} </>
        }
        else if (t === TYPE.DELETE){
            return <> <DeleteIcon fontSize="small" /> Delete </>
        }
    }

        return (
            <Button size="small" color={color} onClick={onUpdate}> {renderIcon(type,likeCount)} </Button>
        )

}

export default ActionButton;