// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CollectionsAPI from '../../collections/collections';
import * as LikeAPI from './like';
import { Like } from './like';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Collections extends APIResource {
  like: LikeAPI.Like = new LikeAPI.Like(this._client);

  /**
   * Get collections liked by the authenticated user
   */
  list(
    query: CollectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CollectionListResponse> {
    return this._client.get('/likes/collections', { query, ...options });
  }
}

export type CollectionListResponse = Array<CollectionsAPI.CollectionResponse>;

export interface CollectionListParams {
  /**
   * Limit the number of results (default: 10)
   */
  limit?: number;
}

Collections.Like = Like;

export declare namespace Collections {
  export {
    type CollectionListResponse as CollectionListResponse,
    type CollectionListParams as CollectionListParams,
  };

  export { Like as Like };
}
