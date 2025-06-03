import React, {FC} from 'react';
import {useCreateBlockNote} from "@blocknote/react";
import {BlockNoteView} from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

interface IBlockNoteProps {
    setBlocks: (value: string) => void;
}

const BlockNote: FC<IBlockNoteProps> = ({setBlocks}) => {
    const editor = useCreateBlockNote();
    const handleChange = async () => {
        const blocks = editor.document;
        const markdown = await editor.blocksToMarkdownLossy(blocks);
        setBlocks(markdown);
    }

    return (
        <div className="w-full max-w-3xl h-52 border-2 border-black rounded-lg">
            <BlockNoteView editor={editor} linkToolbar={true} onChange={handleChange}/>
        </div>

    );
};

export default BlockNote;