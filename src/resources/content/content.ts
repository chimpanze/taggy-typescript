// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from '../tags';
import * as ContentTagsAPI from './tags';
import { SuccessResponse, TagAddParams, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { MyPageNumberPage, type MyPageNumberPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Content extends APIResource {
  tags: ContentTagsAPI.Tags = new ContentTagsAPI.Tags(this._client);

  /**
   * Save new content for the authenticated user
   */
  create(body: ContentCreateParams, options?: RequestOptions): APIPromise<ContentResponse> {
    return this._client.post('/content', { body, ...options });
  }

  /**
   * Get specific content by ID for the authenticated user
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ContentResponse> {
    return this._client.get(path`/content/${id}`, options);
  }

  /**
   * Update existing content for the authenticated user
   */
  update(id: number, body: ContentUpdateParams, options?: RequestOptions): APIPromise<ContentResponse> {
    return this._client.put(path`/content/${id}`, { body, ...options });
  }

  /**
   * Get all content for the authenticated user with pagination and filtering
   */
  list(
    query: ContentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContentResponsesMyPageNumberPage, ContentResponse> {
    return this._client.getAPIList('/content', MyPageNumberPage<ContentResponse>, { query, ...options });
  }

  /**
   * Delete existing content for the authenticated user
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/content/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Perform bulk operations (delete, add tags, remove tags) on multiple content
   * items
   */
  bulkOperations(
    body: ContentBulkOperationsParams,
    options?: RequestOptions,
  ): APIPromise<ContentTagsAPI.SuccessResponse> {
    return this._client.post('/content/bulk', { body, ...options });
  }

  /**
   * Import bookmarks via JSON (items array), NDJSON, or basic CSV. Each item should
   * include url and title; optional description and tag_ids.
   */
  import(
    body: ContentImportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContentImportResponse> {
    return this._client.post('/content/import', { body, ...options });
  }
}

export type ContentResponsesMyPageNumberPage = MyPageNumberPage<ContentResponse>;

export interface ContentResponse {
  id?: number;

  content?: string;

  created_at?: string;

  description?: string;

  file_url?: string;

  source?: ContentResponse.Source;

  tags?: Array<TagsAPI.Tag>;

  thumbnail_url?: string;

  title?: string;

  type?: string;

  updated_at?: string;

  url?: string;
}

export namespace ContentResponse {
  export interface Source {
    archive_url?: string;

    archived_at?: string;

    captured_at?: string;

    host?: string;

    page_title?: string;

    url?: string;
  }
}

export interface ContentImportResponse {
  duplicates?: number;

  imported?: number;

  total?: number;
}

export interface ContentCreateParams {
  title: string;

  type: string;

  content?: string;

  description?: string;

  file_url?: string;

  tag_ids?: Array<number>;

  thumbnail_url?: string;

  url?: string;
}

export interface ContentUpdateParams {
  title: string;

  content?: string;

  description?: string;

  file_url?: string;

  thumbnail_url?: string;

  url?: string;
}

export interface ContentListParams extends MyPageNumberPageParams {
  /**
   * Filter by collection ID
   */
  collection_id?: number;

  /**
   * Search query
   */
  search?: string;

  /**
   * Filter by tag ID
   */
  tag_id?: number;

  /**
   * Content type filter
   */
  type?: string;
}

export interface ContentBulkOperationsParams {
  content_ids: Array<number>;

  operation: string;

  tag_ids?: Array<number>;
}

export interface ContentImportParams {
  items?: Array<ContentImportParams.Item>;
}

export namespace ContentImportParams {
  export interface Item {
    description?: string;

    tag_ids?: Array<number>;

    title?: string;

    url?: string;
  }
}

Content.Tags = Tags;

export declare namespace Content {
  export {
    type ContentResponse as ContentResponse,
    type ContentImportResponse as ContentImportResponse,
    type ContentResponsesMyPageNumberPage as ContentResponsesMyPageNumberPage,
    type ContentCreateParams as ContentCreateParams,
    type ContentUpdateParams as ContentUpdateParams,
    type ContentListParams as ContentListParams,
    type ContentBulkOperationsParams as ContentBulkOperationsParams,
    type ContentImportParams as ContentImportParams,
  };

  export {
    Tags as Tags,
    type SuccessResponse as SuccessResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
