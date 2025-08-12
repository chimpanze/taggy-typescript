// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CollectionsAPI from './collections';
import * as ShareAPI from './share';
import { Share, ShareCreateParams } from './share';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Collections extends APIResource {
  share: ShareAPI.Share = new ShareAPI.Share(this._client);

  /**
   * Get all collections shared by or with the authenticated user
   */
  list(options?: RequestOptions): APIPromise<CollectionListResponse> {
    return this._client.get('/sharing/collections', options);
  }

  /**
   * Add collaborators to a shared collection with specified permissions
   */
  addCollaborators(
    id: string,
    body: CollectionAddCollaboratorsParams,
    options?: RequestOptions,
  ): APIPromise<CollectionAddCollaboratorsResponse> {
    return this._client.post(path`/sharing/collections/${id}/collaborate`, { body, ...options });
  }

  /**
   * Update sharing permissions and settings for a shared collection
   */
  updatePermissions(
    id: string,
    body: CollectionUpdatePermissionsParams,
    options?: RequestOptions,
  ): APIPromise<ShareSettings> {
    return this._client.put(path`/sharing/collections/${id}/permissions`, { body, ...options });
  }
}

export interface ShareCollection {
  share_type: 'public' | 'private' | 'link-only';

  allow_comments?: boolean;

  allow_download?: boolean;

  allow_fork?: boolean;

  expires_at?: string;
}

export interface ShareSettings {
  id?: number;

  allow_comments?: boolean;

  allow_download?: boolean;

  allow_fork?: boolean;

  created_at?: string;

  expires_at?: string;

  is_active?: boolean;

  share_token?: string;

  share_type?: string;

  updated_at?: string;

  view_count?: number;
}

export type CollectionListResponse = Array<CollectionListResponse.CollectionListResponseItem>;

export namespace CollectionListResponse {
  export interface CollectionListResponseItem {
    id?: number;

    created_at?: string;

    description?: string;

    is_public?: boolean;

    is_shared?: boolean;

    like_count?: number;

    name?: string;

    share_settings?: CollectionsAPI.ShareSettings;

    updated_at?: string;

    view_count?: number;
  }
}

export type CollectionAddCollaboratorsResponse = { [key: string]: string };

export interface CollectionAddCollaboratorsParams {
  collaborators: Array<CollectionAddCollaboratorsParams.Collaborator>;
}

export namespace CollectionAddCollaboratorsParams {
  export interface Collaborator {
    permission: 'viewer' | 'contributor' | 'editor' | 'admin';

    email?: string;

    user_id?: string;
  }
}

export interface CollectionUpdatePermissionsParams {
  share_type: 'public' | 'private' | 'link-only';

  allow_comments?: boolean;

  allow_download?: boolean;

  allow_fork?: boolean;

  expires_at?: string;
}

Collections.Share = Share;

export declare namespace Collections {
  export {
    type ShareCollection as ShareCollection,
    type ShareSettings as ShareSettings,
    type CollectionListResponse as CollectionListResponse,
    type CollectionAddCollaboratorsResponse as CollectionAddCollaboratorsResponse,
    type CollectionAddCollaboratorsParams as CollectionAddCollaboratorsParams,
    type CollectionUpdatePermissionsParams as CollectionUpdatePermissionsParams,
  };

  export { Share as Share, type ShareCreateParams as ShareCreateParams };
}
