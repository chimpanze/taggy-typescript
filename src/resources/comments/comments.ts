// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LikeAPI from './like';
import { Like, LikeCollectionResponse, LikeResponse } from './like';

export class Comments extends APIResource {
  like: LikeAPI.Like = new LikeAPI.Like(this._client);
}

Comments.Like = Like;

export declare namespace Comments {
  export {
    Like as Like,
    type LikeCollectionResponse as LikeCollectionResponse,
    type LikeResponse as LikeResponse,
  };
}
