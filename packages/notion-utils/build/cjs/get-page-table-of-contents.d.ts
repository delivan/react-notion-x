import * as types from 'notion-types';
export interface TableOfContentsEntry {
    id: types.ID;
    type: types.BlockType;
    text: string;
    indentLevel: number;
}
/**
 * Gets the metadata for a table of contents block by parsing the page's
 * H1, H2, and H3 elements.
 */
export declare const getPageTableOfContents: (recordMap: types.ExtendedRecordMap) => Array<TableOfContentsEntry>;
