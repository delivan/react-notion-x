import { OptionsOfJSONResponseBody } from 'got';
import * as notion from 'notion-types';
import * as types from './types';
/**
 * Main Notion API client.
 */
export declare class NotionAPI {
    private readonly _apiBaseUrl;
    private readonly _authToken?;
    private readonly _activeUser?;
    private readonly _userLocale;
    private readonly _userTimeZone;
    constructor({ apiBaseUrl, authToken, activeUser, userLocale, userTimeZone }?: {
        apiBaseUrl?: string;
        authToken?: string;
        userLocale?: string;
        userTimeZone?: string;
        activeUser?: string;
    });
    getPage(pageId: string, { concurrency, fetchCollections, signFileUrls, gotOptions }?: {
        concurrency?: number;
        fetchCollections?: boolean;
        signFileUrls?: boolean;
        gotOptions?: OptionsOfJSONResponseBody;
    }): Promise<notion.ExtendedRecordMap>;
    getPageRaw(pageId: string, gotOptions?: OptionsOfJSONResponseBody): Promise<notion.PageChunk>;
    getCollectionData(collectionId: string, collectionViewId: string, { type, query, groups, limit, searchQuery, userTimeZone, userLocale, loadContentCover, gotOptions }?: {
        type?: notion.CollectionViewType;
        query?: any;
        groups?: any;
        limit?: number;
        searchQuery?: string;
        userTimeZone?: string;
        userLocale?: string;
        loadContentCover?: boolean;
        gotOptions?: OptionsOfJSONResponseBody;
    }): Promise<notion.CollectionInstance>;
    getUsers(userIds: string[], gotOptions?: OptionsOfJSONResponseBody): Promise<notion.RecordValues<notion.User>>;
    getBlocks(blockIds: string[], gotOptions?: OptionsOfJSONResponseBody): Promise<notion.PageChunk>;
    getSignedFileUrls(urls: types.SignedUrlRequest[], gotOptions?: OptionsOfJSONResponseBody): Promise<types.SignedUrlResponse>;
    search(params: notion.SearchParams, gotOptions?: OptionsOfJSONResponseBody): Promise<notion.SearchResults>;
    fetch<T>({ endpoint, body, gotOptions, headers: clientHeaders }: {
        endpoint: string;
        body: object;
        gotOptions?: OptionsOfJSONResponseBody;
        headers?: any;
    }): Promise<T>;
}
