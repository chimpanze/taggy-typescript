// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Add content items to an existing collection for the authenticated user
   */
  add(id: number, body: ItemAddParams, options?: RequestOptions): APIPromise<ItemAddResponse> {
    return this._client.post(path`/collections/${id}/items`, { body, ...options });
  }

  /**
   * Remove a content item from an existing collection for the authenticated user
   */
  remove(itemID: number, params: ItemRemoveParams, options?: RequestOptions): APIPromise<ItemRemoveResponse> {
    const { id } = params;
    return this._client.delete(path`/collections/${id}/items/${itemID}`, options);
  }
}

export type ItemAddResponse = { [key: string]: string };

export type ItemRemoveResponse = { [key: string]: string };

export interface ItemAddParams {
  content_ids: Array<number>;
}

export interface ItemRemoveParams {
  /**
   * Collection ID
   */
  id: number;
}

export declare namespace Items {
  export {
    type ItemAddResponse as ItemAddResponse,
    type ItemRemoveResponse as ItemRemoveResponse,
    type ItemAddParams as ItemAddParams,
    type ItemRemoveParams as ItemRemoveParams,
  };
}
