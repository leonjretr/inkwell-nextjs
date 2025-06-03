import {JSONContent, useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

type RichTextEditorProps = {
    onContentChange: (json: JSONContent) => void
    initialContent?: JSONContent
}

export default function TipTapRichEditor({onContentChange, initialContent}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: initialContent || '',
        onUpdate({editor}) {
            const json = editor.getJSON()
            onContentChange(json)
        },
    })

    if (!editor) return null

    return <EditorContent editor={editor}/>
}
