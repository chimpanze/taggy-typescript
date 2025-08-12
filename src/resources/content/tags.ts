// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Add tags to specific content for the authenticated user
   */
  add(id: number, body: TagAddParams, options?: RequestOptions): APIPromise<SuccessResponse> {
    return this._client.post(path`/content/${id}/tags`, { body, ...options });
  }

  /**
   * Remove a specific tag from content for the authenticated user
   */
  remove(tagID: number, params: TagRemoveParams, options?: RequestOptions): APIPromise<SuccessResponse> {
    const { id } = params;
    return this._client.delete(path`/content/${id}/tags/${tagID}`, options);
  }
}

export interface SuccessResponse {
  status?: string;
}

export interface TagAddParams {
  tag_ids: Array<number>;
}

export interface TagRemoveParams {
  /**
   * Content ID
   */
  id: number;
}

export declare namespace Tags {
  export {
    type SuccessResponse as SuccessResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
