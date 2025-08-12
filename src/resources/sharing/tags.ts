// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CollectionsAPI from './collections/collections';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Get a list of publicly shared tag libraries
   */
  browsePublic(
    query: TagBrowsePublicParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagBrowsePublicResponse> {
    return this._client.get('/sharing/tags/public', { query, ...options });
  }

  /**
   * Import tags from a shared library to the authenticated user's tags
   */
  import(body: TagImportParams, options?: RequestOptions): APIPromise<TagImportResponse> {
    return this._client.post('/sharing/tags/import', { body, ...options });
  }

  /**
   * Share a tag library with other users
   */
  share(
    id: string,
    body: TagShareParams,
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.ShareSettings> {
    return this._client.post(path`/sharing/tags/${id}/share`, { body, ...options });
  }
}

export type TagBrowsePublicResponse = Array<TagBrowsePublicResponse.TagBrowsePublicResponseItem>;

export namespace TagBrowsePublicResponse {
  export interface TagBrowsePublicResponseItem {
    id?: number;

    category?: string;

    created_at?: string;

    description?: string;

    is_public?: boolean;

    name?: string;

    rating?: number;

    share_settings?: CollectionsAPI.ShareSettings;

    tag_count?: number;

    updated_at?: string;

    use_count?: number;
  }
}

export type TagImportResponse = { [key: string]: string };

export interface TagBrowsePublicParams {
  /**
   * Limit number of results (default 20, max 100)
   */
  limit?: number;

  /**
   * Offset for pagination (default 0)
   */
  offset?: number;
}

export interface TagImportParams {
  library_id: number;
}

export interface TagShareParams {
  share_type: 'public' | 'private';
}

export declare namespace Tags {
  export {
    type TagBrowsePublicResponse as TagBrowsePublicResponse,
    type TagImportResponse as TagImportResponse,
    type TagBrowsePublicParams as TagBrowsePublicParams,
    type TagImportParams as TagImportParams,
    type TagShareParams as TagShareParams,
  };
}
