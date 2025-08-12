// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TagsAPI from './tags';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search through user's content with filters and pagination
   */
  retrieve(query: SearchRetrieveParams, options?: RequestOptions): APIPromise<SearchRetrieveResponse> {
    return this._client.get('/search', { query, ...options });
  }

  /**
   * Get search suggestions based on query for the authenticated user
   */
  getSuggestions(
    query: SearchGetSuggestionsParams,
    options?: RequestOptions,
  ): APIPromise<SearchGetSuggestionsResponse> {
    return this._client.get('/search/suggestions', { query, ...options });
  }

  /**
   * Get recently created/updated content for the authenticated user
   */
  listRecent(
    query: SearchListRecentParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchListRecentResponse> {
    return this._client.get('/search/recent', { query, ...options });
  }

  /**
   * Get trending/popular content for the authenticated user
   */
  listTrending(
    query: SearchListTrendingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SearchListTrendingResponse> {
    return this._client.get('/search/trending', { query, ...options });
  }
}

export interface SearchResult {
  id?: number;

  content_type?: string;

  created_at?: string;

  description?: string;

  highlights?: { [key: string]: string };

  tags?: Array<TagsAPI.Tag>;

  title?: string;

  updated_at?: string;

  url?: string;
}

export interface SearchRetrieveResponse {
  page?: number;

  per_page?: number;

  results?: Array<SearchResult>;

  total?: number;
}

export interface SearchGetSuggestionsResponse {
  suggestions?: Array<string>;
}

export type SearchListRecentResponse = Array<SearchResult>;

export type SearchListTrendingResponse = Array<SearchResult>;

export interface SearchRetrieveParams {
  /**
   * Search query
   */
  q: string;

  /**
   * Start date filter (YYYY-MM-DD)
   */
  from_date?: string;

  /**
   * Page number (default: 1)
   */
  page?: number;

  /**
   * Items per page (default: 20, max: 100)
   */
  per_page?: number;

  /**
   * Tag IDs filter (comma-separated)
   */
  tags?: string;

  /**
   * End date filter (YYYY-MM-DD)
   */
  to_date?: string;

  /**
   * Content type filter
   */
  type?: string;
}

export interface SearchGetSuggestionsParams {
  /**
   * Search query for suggestions
   */
  q: string;
}

export interface SearchListRecentParams {
  /**
   * Limit number of results (default: 10, max: 100)
   */
  limit?: number;
}

export interface SearchListTrendingParams {
  /**
   * Limit number of results (default: 10, max: 100)
   */
  limit?: number;
}

export declare namespace Search {
  export {
    type SearchResult as SearchResult,
    type SearchRetrieveResponse as SearchRetrieveResponse,
    type SearchGetSuggestionsResponse as SearchGetSuggestionsResponse,
    type SearchListRecentResponse as SearchListRecentResponse,
    type SearchListTrendingResponse as SearchListTrendingResponse,
    type SearchRetrieveParams as SearchRetrieveParams,
    type SearchGetSuggestionsParams as SearchGetSuggestionsParams,
    type SearchListRecentParams as SearchListRecentParams,
    type SearchListTrendingParams as SearchListTrendingParams,
  };
}
