// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ArchiveAPI from './archive';
import * as TagsAPI from './tags';
import * as AIAPI from './ai/ai';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Extension extends APIResource {
  /**
   * Archive the current page from browser extension
   */
  archiveCurrentPage(
    body: ExtensionArchiveCurrentPageParams,
    options?: RequestOptions,
  ): APIPromise<ArchiveAPI.ArchiveResponse> {
    return this._client.post('/extension/archive', { body, ...options });
  }

  /**
   * Check the progress of a media fetch job from browser extension
   */
  checkMediaJobProgress(
    jobID: string,
    options?: RequestOptions,
  ): APIPromise<ExtensionCheckMediaJobProgressResponse> {
    return this._client.get(path`/extension/media-job/${jobID}`, options);
  }

  /**
   * Quickly apply tags to content from browser extension
   */
  quickTagContent(
    body: ExtensionQuickTagContentParams,
    options?: RequestOptions,
  ): APIPromise<ExtensionQuickTagContentResponse> {
    return this._client.post('/extension/quick-tag', { body, ...options });
  }

  /**
   * Get AI-generated tag suggestions for content from browser extension
   */
  retrieveAISuggestions(
    contentID: string,
    options?: RequestOptions,
  ): APIPromise<ExtensionRetrieveAISuggestionsResponse> {
    return this._client.get(path`/extension/ai-suggestions/${contentID}`, options);
  }

  /**
   * Get user's tags for quick selection in browser extension
   */
  retrieveUserTags(
    query: ExtensionRetrieveUserTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExtensionRetrieveUserTagsResponse> {
    return this._client.get('/extension/tags', { query, ...options });
  }

  /**
   * Save a bookmark from browser extension with metadata and tags
   */
  saveBookmark(body: ExtensionSaveBookmarkParams, options?: RequestOptions): APIPromise<ExtensionResponse> {
    return this._client.post('/extension/save-bookmark', { body, ...options });
  }

  /**
   * Save a generic file (by URL reference) from the browser extension with optional
   * provenance
   */
  saveFile(body: ExtensionSaveFileParams, options?: RequestOptions): APIPromise<ExtensionResponse> {
    return this._client.post('/extension/save-file', { body, ...options });
  }

  /**
   * Save an image from browser extension with metadata and tags
   */
  saveImage(body: ExtensionSaveImageParams, options?: RequestOptions): APIPromise<ExtensionResponse> {
    return this._client.post('/extension/save-image', { body, ...options });
  }

  /**
   * Save selected text from browser extension with context and tags
   */
  saveText(body: ExtensionSaveTextParams, options?: RequestOptions): APIPromise<ExtensionResponse> {
    return this._client.post('/extension/save-text', { body, ...options });
  }

  /**
   * Save a video from browser extension for downloading
   */
  saveVideo(body: ExtensionSaveVideoParams, options?: RequestOptions): APIPromise<ExtensionResponse> {
    return this._client.post('/extension/save-video', { body, ...options });
  }
}

export interface ExtensionResponse {
  id?: number;

  /**
   * For async operations like video fetching
   */
  job_id?: number;

  message?: string;

  status?: string;
}

export type ExtensionCheckMediaJobProgressResponse = { [key: string]: unknown };

export interface ExtensionQuickTagContentResponse {
  id?: number;

  /**
   * For async operations like video fetching
   */
  job_id?: number;

  message?: string;

  status?: string;

  tags?: Array<TagsAPI.Tag>;
}

export interface ExtensionRetrieveAISuggestionsResponse {
  id?: number;

  /**
   * For async operations like video fetching
   */
  job_id?: number;

  message?: string;

  status?: string;

  suggestions?: Array<AIAPI.TagSuggestion>;
}

export type ExtensionRetrieveUserTagsResponse = Array<TagsAPI.Tag>;

export interface ExtensionArchiveCurrentPageParams {
  content_id: number;

  url: string;

  format?: string;
}

export interface ExtensionQuickTagContentParams {
  content_id: number;

  tag_ids: Array<number>;
}

export interface ExtensionRetrieveUserTagsParams {
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
}

export interface ExtensionSaveBookmarkParams {
  title: string;

  url: string;

  archive?: boolean;

  description?: string;

  tag_ids?: Array<number>;
}

export interface ExtensionSaveFileParams {
  file_url: string;

  description?: string;

  filename?: string;

  mime?: string;

  /**
   * Legacy alias kept for backward compatibility (deprecated)
   */
  page_url?: string;

  size?: number;

  /**
   * Preferred field name for provenance URL of the hosting page
   */
  source_url?: string;

  tag_ids?: Array<number>;

  title?: string;
}

export interface ExtensionSaveImageParams {
  url: string;

  description?: string;

  file_url?: string;

  /**
   * Legacy alias kept for backward compatibility (deprecated)
   */
  source?: string;

  /**
   * Preferred field name for provenance URL
   */
  source_url?: string;

  tag_ids?: Array<number>;

  thumbnail_url?: string;

  title?: string;
}

export interface ExtensionSaveTextParams {
  content: string;

  title: string;

  context?: string;

  /**
   * Legacy alias kept for backward compatibility (deprecated)
   */
  source?: string;

  /**
   * Preferred field name for provenance URL
   */
  source_url?: string;

  tag_ids?: Array<number>;
}

export interface ExtensionSaveVideoParams {
  url: string;

  audio_only?: boolean;

  description?: string;

  tag_ids?: Array<number>;

  title?: string;
}

export declare namespace Extension {
  export {
    type ExtensionResponse as ExtensionResponse,
    type ExtensionCheckMediaJobProgressResponse as ExtensionCheckMediaJobProgressResponse,
    type ExtensionQuickTagContentResponse as ExtensionQuickTagContentResponse,
    type ExtensionRetrieveAISuggestionsResponse as ExtensionRetrieveAISuggestionsResponse,
    type ExtensionRetrieveUserTagsResponse as ExtensionRetrieveUserTagsResponse,
    type ExtensionArchiveCurrentPageParams as ExtensionArchiveCurrentPageParams,
    type ExtensionQuickTagContentParams as ExtensionQuickTagContentParams,
    type ExtensionRetrieveUserTagsParams as ExtensionRetrieveUserTagsParams,
    type ExtensionSaveBookmarkParams as ExtensionSaveBookmarkParams,
    type ExtensionSaveFileParams as ExtensionSaveFileParams,
    type ExtensionSaveImageParams as ExtensionSaveImageParams,
    type ExtensionSaveTextParams as ExtensionSaveTextParams,
    type ExtensionSaveVideoParams as ExtensionSaveVideoParams,
  };
}
