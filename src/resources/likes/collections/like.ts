// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LikeAPI from '../../comments/like';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Like extends APIResource {
  /**
   * Like a collection for the authenticated user
   */
  create(id: number, options?: RequestOptions): APIPromise<LikeAPI.LikeCollectionResponse> {
    return this._client.post(path`/likes/collections/${id}/like`, options);
  }

  /**
   * Unlike a collection for the authenticated user
   */
  delete(id: number, options?: RequestOptions): APIPromise<LikeAPI.LikeCollectionResponse> {
    return this._client.delete(path`/likes/collections/${id}/like`, options);
  }

  /**
   * Check if the authenticated user has liked a collection
   */
  check(id: number, options?: RequestOptions): APIPromise<LikeAPI.LikeResponse> {
    return this._client.get(path`/likes/collections/${id}/like`, options);
  }
}
