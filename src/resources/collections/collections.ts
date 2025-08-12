// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemsAPI from './items';
import { ItemAddParams, ItemAddResponse, ItemRemoveParams, ItemRemoveResponse, Items } from './items';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Collections extends APIResource {
  items: ItemsAPI.Items = new ItemsAPI.Items(this._client);

  /**
   * Create a new collection for the authenticated user
   */
  create(body: CollectionCreateParams, options?: RequestOptions): APIPromise<CollectionResponse> {
    return this._client.post('/collections', { body, ...options });
  }

  /**
   * Get a specific collection by ID with its contents for the authenticated user
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<CollectionResponse> {
    return this._client.get(path`/collections/${id}`, options);
  }

  /**
   * Update an existing collection for the authenticated user
   */
  update(id: number, body: CollectionUpdateParams, options?: RequestOptions): APIPromise<CollectionResponse> {
    return this._client.put(path`/collections/${id}`, { body, ...options });
  }

  /**
   * Get all collections for the authenticated user with filtering and sorting
   * options
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionListResponse> {
    return this._client.get('/collections', { query, ...options });
  }

  /**
   * Delete an existing collection for the authenticated user
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/collections/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CollectionResponse {
  id?: number;

  created_at?: string;

  description?: string;

  has_liked?: boolean;

  is_public?: boolean;

  is_shared?: boolean;

  item_count?: number;

  like_count?: number;

  name?: string;

  updated_at?: string;

  user_id?: string;

  view_count?: number;
}

export type CollectionListResponse = Array<CollectionResponse>;

export interface CollectionCreateParams {
  name: string;

  description?: string;

  is_public?: boolean;
}

export interface CollectionUpdateParams {
  name: string;

  description?: string;

  is_public?: boolean;
}

export interface CollectionListParams {
  /**
   * Filter by public/private status
   */
  is_public?: boolean;

  /**
   * Filter by shared status
   */
  is_shared?: boolean;

  /**
   * Filter by collection name
   */
  name?: string;

  /**
   * Sort by field (name, created_at, updated_at)
   */
  sort_by?: string;

  /**
   * Sort order (asc, desc)
   */
  sort_order?: string;
}

Collections.Items = Items;

export declare namespace Collections {
  export {
    type CollectionResponse as CollectionResponse,
    type CollectionListResponse as CollectionListResponse,
    type CollectionCreateParams as CollectionCreateParams,
    type CollectionUpdateParams as CollectionUpdateParams,
    type CollectionListParams as CollectionListParams,
  };

  export {
    Items as Items,
    type ItemAddResponse as ItemAddResponse,
    type ItemRemoveResponse as ItemRemoveResponse,
    type ItemAddParams as ItemAddParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
