// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CollectionsAPI from './collections/collections';
import { CollectionListParams, CollectionListResponse, Collections } from './collections/collections';

export class Likes extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
}

Likes.Collections = Collections;

export declare namespace Likes {
  export {
    Collections as Collections,
    type CollectionListResponse as CollectionListResponse,
    type CollectionListParams as CollectionListParams,
  };
}
