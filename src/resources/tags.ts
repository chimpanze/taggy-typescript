// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Create a new tag for the authenticated user
   */
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/tags', { body, ...options });
  }

  /**
   * Update an existing tag for the authenticated user
   */
  update(id: number, body: TagUpdateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.put(path`/tags/${id}`, { body, ...options });
  }

  /**
   * Get all tags for the authenticated user with optional filtering
   */
  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/tags', { query, ...options });
  }

  /**
   * Delete an existing tag for the authenticated user
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tags/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get tag suggestions based on query for the authenticated user
   */
  getSuggestions(
    query: TagGetSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<TagGetSuggestionsResponse> {
    return this._client.get('/tags/suggestions', { query, ...options });
  }
}

export interface Tag {
  id?: number;

  color?: string;

  icon?: string;

  name?: string;

  parent_id?: number;
}

export type TagListResponse = Array<Tag>;

export type TagGetSuggestionsResponse = Array<Tag>;

export interface TagCreateParams {
  name: string;

  color?: string;

  icon?: string;

  parent_id?: number;
}

export interface TagUpdateParams {
  name: string;

  color?: string;

  icon?: string;

  parent_id?: number;
}

export interface TagListParams {
  /**
   * Limit number of results
   */
  limit?: number;

  /**
   * Get popular tags
   */
  popular?: boolean;

  /**
   * Get recent tags
   */
  recent?: boolean;

  /**
   * Include tags with content
   */
  with_content?: boolean;
}

export interface TagGetSuggestionsParams {
  /**
   * Search query for tag suggestions
   */
  q: string;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagGetSuggestionsResponse as TagGetSuggestionsResponse,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagGetSuggestionsParams as TagGetSuggestionsParams,
  };
}
