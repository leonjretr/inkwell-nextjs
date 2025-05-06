import htmlToDraft from 'html-to-draftjs';
import { ContentState, EditorState } from 'draft-js';


export const htmlToDraftBlocks = (html:string) => {
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    return editorState;
}