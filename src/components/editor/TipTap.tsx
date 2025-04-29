import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Blockquote from '@tiptap/extension-blockquote';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import History from '@tiptap/extension-history';

// Define types
type Level = 1 | 2 | 3 | 4 | 5 | 6;

const TipTapEditor: React.FC = () => {
    const [font, setFont] = useState<string>('Inter');

    // Build the editor with each extension explicitly added
    const editor = useEditor({
        extensions: [
            // Core extensions
            Document,
            Paragraph,
            Text,
            History,

            // Formatting extensions
            Bold,
            Italic,
            Underline,

            // Heading with all levels
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),

            // List extensions
            BulletList,
            OrderedList,
            ListItem,

            // Block formatting
            Blockquote,

            // Alignment
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),

            // Color and font extensions
            TextStyle,
            Color,
            FontFamily,
        ],
        content: '<p>Hello, world! Start writing...</p>',
        autofocus: true,
        // Log content changes for debugging
        onUpdate: ({ editor }) => {
            // Uncomment for debugging: console.log('Content updated:', editor.getHTML());
        },
    });

    if (!editor) {
        return <div>Loading editor...</div>;
    }

    const fonts = ['Inter', 'Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Poppins'];
    const headingLevels: Level[] = [1, 2, 3, 4, 5, 6];

    // Helper function for consistent button styling
    const getButtonClass = (isActive?: boolean) => {
        return `px-3 py-1 rounded-md ${
            isActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        } transition-all duration-200`;
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                {/* Paragraph Button */}
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={getButtonClass(editor.isActive('paragraph'))}
                    data-test="paragraph-btn"
                >
                    Paragraph
                </button>

                {/* Heading Buttons */}
                {headingLevels.map((level) => (
                    <button
                        key={level}
                        onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
                        className={getButtonClass(editor.isActive('heading', { level }))}
                        data-test={`h${level}-btn`}
                    >
                        H{level}
                    </button>
                ))}

                {/* Font Selection */}
                <select
                    value={font}
                    onChange={(e) => {
                        const newFont = e.target.value;
                        setFont(newFont);
                        editor.chain().focus().setFontFamily(newFont).run();
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 hover:bg-gray-200 cursor-pointer"
                >
                    {fonts.map((f) => (
                        <option key={f} value={f}>
                            {f}
                        </option>
                    ))}
                </select>

                {/* Text Formatting */}
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`${getButtonClass(editor.isActive('bold'))} font-bold`}
                    data-test="bold-btn"
                >
                    B
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`${getButtonClass(editor.isActive('italic'))} italic`}
                    data-test="italic-btn"
                >
                    I
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`${getButtonClass(editor.isActive('underline'))} underline`}
                    data-test="underline-btn"
                >
                    U
                </button>

                {/* Text Alignment */}
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={getButtonClass(editor.isActive({ textAlign: 'left' }) || (!editor.isActive({ textAlign: 'center' }) && !editor.isActive({ textAlign: 'right' })))}
                    data-test="align-left-btn"
                >
                    ←
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={getButtonClass(editor.isActive({ textAlign: 'center' }))}
                    data-test="align-center-btn"
                >
                    ↔
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={getButtonClass(editor.isActive({ textAlign: 'right' }))}
                    data-test="align-right-btn"
                >
                    →
                </button>

                {/* Text Color */}
                <div className="relative flex items-center">
                    <input
                        type="color"
                        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
                        value={editor.getAttributes('textStyle')?.color || '#000000'}
                        className="w-8 h-8 rounded-md cursor-pointer border-none bg-gray-100 hover:bg-gray-200 transition-all duration-200"
                        data-test="color-picker"
                    />
                    <span className="ml-1 text-xs text-gray-500">Color</span>
                </div>

                {/* Lists */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={getButtonClass(editor.isActive('bulletList'))}
                    data-test="bullet-list-btn"
                >
                    • List
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={getButtonClass(editor.isActive('orderedList'))}
                    data-test="ordered-list-btn"
                >
                    1. List
                </button>

                {/* Quote */}
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={getButtonClass(editor.isActive('blockquote'))}
                    data-test="blockquote-btn"
                >
                    Quote
                </button>

                {/* Undo/Redo */}
                <div className="ml-auto flex gap-2">
                    <button
                        onClick={() => editor.chain().focus().undo().run()}
                        className={getButtonClass()}
                        disabled={!editor.can().undo()}
                        data-test="undo-btn"
                    >
                        Undo
                    </button>
                    <button
                        onClick={() => editor.chain().focus().redo().run()}
                        className={getButtonClass()}
                        disabled={!editor.can().redo()}
                        data-test="redo-btn"
                    >
                        Redo
                    </button>
                </div>
            </div>

            {/* Editor Content */}
            <div className="border border-gray-200 rounded-lg p-4 min-h-[400px] bg-white">
                <EditorContent
                    editor={editor}
                    className="min-h-[380px] w-full outline-none focus:outline-none prose prose-sm max-w-none"
                    style={{ fontFamily: font }}
                />
            </div>

            {/* Debug Panel - Uncomment for troubleshooting */}
            <div className="mt-4">
                <button
                    onClick={() => alert(editor.getHTML())}
                    className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                    Show HTML
                </button>
            </div>
        </div>
    );
};

export default TipTapEditor;