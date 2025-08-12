// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CollectionsAPI from './collections';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Share extends APIResource {
  /**
   * Share a collection with public, private, or link-only access
   */
  create(
    id: string,
    body: ShareCreateParams,
    options?: RequestOptions,
  ): APIPromise<CollectionsAPI.ShareSettings> {
    return this._client.post(path`/sharing/collections/${id}/share`, { body, ...options });
  }

  /**
   * Remove sharing settings from a collection, making it private
   */
  remove(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sharing/collections/${id}/share`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ShareCreateParams {
  share_type: 'public' | 'private' | 'link-only';

  allow_comments?: boolean;

  allow_download?: boolean;

  allow_fork?: boolean;

  expires_at?: string;
}

export declare namespace Share {
  export { type ShareCreateParams as ShareCreateParams };
}
