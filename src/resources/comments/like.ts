// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Like extends APIResource {
  /**
   * Like a comment for the authenticated user
   */
  create(id: number, options?: RequestOptions): APIPromise<LikeCollectionResponse> {
    return this._client.post(path`/comments/${id}/like`, options);
  }

  /**
   * Unlike a comment for the authenticated user
   */
  delete(id: number, options?: RequestOptions): APIPromise<LikeCollectionResponse> {
    return this._client.delete(path`/comments/${id}/like`, options);
  }

  /**
   * Check if the authenticated user has liked a comment
   */
  check(id: number, options?: RequestOptions): APIPromise<LikeResponse> {
    return this._client.get(path`/comments/${id}/like`, options);
  }
}

export interface LikeCollectionResponse {
  message?: string;
}

export interface LikeResponse {
  liked?: boolean;
}

export declare namespace Like {
  export { type LikeCollectionResponse as LikeCollectionResponse, type LikeResponse as LikeResponse };
}
