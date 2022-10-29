import { Box, Typography } from '@material-ui/core';
import { ContentState, convertFromHTML, convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import React, { useEffect } from 'react'
import MUIEditor, { MUIEditorState } from "react-mui-draft-wysiwyg";

export const CustomEditor = (props) => {
    const { label, value, key, required, error, errorMsz, pageData, setPageData, setEditorState, editorState } = props
    const config = {
        editor: {
            className: 'custom-wrapper',
        },
    }

    useEffect(() => {
        const blocksFromHTML = convertFromHTML(value);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap,
        );
        setEditorState(EditorState.createWithContent(state))
    }, [value])


    const onEditorChange = newState => {
        setEditorState(newState)
    }

    return (
        <>
            <MUIEditor
                editorState={editorState}
                onChange={onEditorChange}
                config={config}
            />
            {
                required && error &&
                <Typography variant='body1' className="errorDom" component="span" style={{ color: "rgb(211, 47, 47)", fontSize: 12 }}>
                    <Box>{errorMsz}</Box>
                </Typography>
            }
        </>
    )
}
