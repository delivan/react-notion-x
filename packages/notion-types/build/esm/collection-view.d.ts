import { ID, PropertyID, PropertyType } from './core';
/** Types of collection views supported by Notion */
export declare type CollectionViewType = 'table' | 'gallery' | 'list' | 'board' | 'calendar';
export declare type CollectionCardCoverType = 'page_cover' | 'page_content' | 'property' | 'none' | 'file';
export declare type CollectionCardCoverSize = 'small' | 'medium' | 'large';
export declare type CollectionCardCoverAspect = 'cover' | 'contain';
export interface BaseCollectionView {
    id: ID;
    type: CollectionViewType;
    name: string;
    format: any;
    version: number;
    alive: boolean;
    parent_id: ID;
    parent_table: string;
    query?: any;
    query2: {
        filter?: any;
        aggregations?: object[];
        group_by: PropertyID;
    };
}
export interface TableCollectionView extends BaseCollectionView {
    type: 'table';
    format: {
        table_wrap: boolean;
        table_properties: Array<{
            property: PropertyID;
            visible: boolean;
            width: number;
        }>;
    };
    page_sort: ID[];
}
export interface GalleryCollectionView extends BaseCollectionView {
    type: 'gallery';
    format: {
        gallery_cover: CollectionCardCover;
        gallery_cover_size: CollectionCardCoverSize;
        gallery_cover_aspect: CollectionCardCoverAspect;
        gallery_properties: Array<{
            property: PropertyID;
            visible: boolean;
        }>;
    };
}
export interface ListCollectionView extends BaseCollectionView {
    type: 'list';
    format: {
        list_properties: Array<{
            property: PropertyID;
            visible: boolean;
        }>;
    };
}
export interface CollectionCardCover {
    type: CollectionCardCoverType;
    property?: PropertyID;
}
export interface BoardCollectionView extends BaseCollectionView {
    type: 'board';
    format: {
        board_cover: CollectionCardCover;
        board_cover_size: CollectionCardCoverSize;
        board_cover_aspect: CollectionCardCoverAspect;
        board_properties: Array<{
            property: PropertyID;
            visible: boolean;
        }>;
        board_groups2: Array<{
            property: PropertyID;
            hidden: boolean;
            value: {
                type: PropertyType;
                value: string;
            };
        }>;
    };
}
export interface CalendarCollectionView extends BaseCollectionView {
    type: 'calendar';
}
export declare type CollectionView = TableCollectionView | GalleryCollectionView | ListCollectionView | BoardCollectionView | CalendarCollectionView;
