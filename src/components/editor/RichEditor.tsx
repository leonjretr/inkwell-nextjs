'use client';

import { useRef } from 'react';

const fonts = ['Inter', 'Poppins', 'Arial', 'Georgia', 'Times New Roman', 'Courier New'];

const RichEditor = () => {
    const editorRef = useRef<HTMLDivElement>(null);

    const applyCommand = (command: string, value?: string) => {
        document.execCommand(command, false, value);
        editorRef.current?.focus(); // Focus back to editor
    };

    const applyFontSize = (size: string) => {
        document.execCommand('fontSize', false, '7');
        // Find the inserted <font size="7"> and replace it with a span styled properly
        const editor = editorRef.current;
        if (editor) {
            const fonts = editor.getElementsByTagName('font');
            for (let i = 0; i < fonts.length; i++) {
                if (fonts[i].size === '7') {
                    fonts[i].removeAttribute('size');
                    fonts[i].style.fontSize = size;
                    fonts[i].outerHTML = `<span style="${fonts[i].getAttribute('style')}">${fonts[i].innerHTML}</span>`;
                }
            }
        }
    };

    const getContent = () => {
        console.log(editorRef.current?.innerHTML);
        // You can POST this HTML to Strapi
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-xl shadow-md">
                {/* Font Family */}
                <select
                    onChange={(e) => applyCommand('fontName', e.target.value)}
                    className="border rounded-md px-2 py-1"
                    defaultValue=""
                >
                    <option disabled value="">
                        Font
                    </option>
                    {fonts.map((font) => (
                        <option key={font} value={font}>
                            {font}
                        </option>
                    ))}
                </select>

                {/* Font Size */}
                <select
                    onChange={(e) => applyFontSize(e.target.value)}
                    className="border rounded-md px-2 py-1"
                    defaultValue=""
                >
                    <option disabled value="">
                        Size
                    </option>
                    <option value="12px">Small</option>
                    <option value="16px">Normal</option>
                    <option value="20px">Large</option>
                    <option value="24px">X-Large</option>
                </select>

                {/* Font Color */}
                <input
                    type="color"
                    onChange={(e) => applyCommand('foreColor', e.target.value)}
                    className="w-8 h-8 border rounded-md"
                />

                {/* Alignments */}
                <div className="flex gap-1">
                    <button
                        onClick={() => applyCommand('justifyLeft')}
                        className="px-2 py-1 border rounded-md hover:bg-gray-100"
                    >
                        Left
                    </button>
                    <button
                        onClick={() => applyCommand('justifyCenter')}
                        className="px-2 py-1 border rounded-md hover:bg-gray-100"
                    >
                        Center
                    </button>
                    <button
                        onClick={() => applyCommand('justifyRight')}
                        className="px-2 py-1 border rounded-md hover:bg-gray-100"
                    >
                        Right
                    </button>
                </div>

                {/* Save */}
                <button
                    onClick={getContent}
                    className="ml-auto bg-caribCurrent text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                >
                    Save
                </button>
            </div>

            {/* Editor */}
            <div
                ref={editorRef}
                contentEditable
                suppressContentEditableWarning
                className="min-h-[300px] w-full p-4 border rounded-xl bg-white shadow-md focus:outline-none"
            ></div>
        </div>
    );
}

export default RichEditor;
