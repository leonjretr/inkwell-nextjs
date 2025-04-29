import React, {FC} from 'react';
import {useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';

interface ParagraphButtonProps {
    level: number;
}

const ParagraphButton: FC<ParagraphButtonProps> = ({level}) => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {keepMarks: true, keepAttributes: false},
                orderedList: {keepMarks: true, keepAttributes: false},
                paragraph: {HTMLAttributes: {class: 'text-gray-800'}},
            }),
            Underline,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TextStyle,
            Color,
            FontFamily,
        ],
        content: '<p>Hello, world! Start writing...</p>',
    });
    return (
        <button
            onClick={() => editor?.chain().focus().toggleHeading({level: 2}).run()}
            className={`px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 ${editor?.isActive('heading', {level: level}) ? 'is-active' : ''}`}
        >
            H{level}
        </button>
    );
};

export default ParagraphButton;