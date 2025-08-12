// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvitationsAPI from './invitations';
import {
  InvitationAcceptResponse,
  InvitationDeclineResponse,
  InvitationListResponse,
  Invitations,
} from './invitations';
import * as TagsAPI from './tags';
import {
  TagBrowsePublicParams,
  TagBrowsePublicResponse,
  TagImportParams,
  TagImportResponse,
  TagShareParams,
  Tags,
} from './tags';
import * as CollectionsAPI from './collections/collections';
import {
  CollectionAddCollaboratorsParams,
  CollectionAddCollaboratorsResponse,
  CollectionListResponse,
  CollectionUpdatePermissionsParams,
  Collections,
  ShareCollection,
  ShareSettings,
} from './collections/collections';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sharing extends APIResource {
  collections: CollectionsAPI.Collections = new CollectionsAPI.Collections(this._client);
  invitations: InvitationsAPI.Invitations = new InvitationsAPI.Invitations(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Access a publicly shared collection using its share token
   */
  accessPublicCollection(
    shareID: string,
    options?: RequestOptions,
  ): APIPromise<SharingAccessPublicCollectionResponse> {
    return this._client.get(path`/sharing/public/${shareID}`, options);
  }
}

export interface SharingAccessPublicCollectionResponse {
  id?: number;

  content_count?: number;

  created_at?: string;

  description?: string;

  like_count?: number;

  name?: string;

  share_settings?: CollectionsAPI.ShareSettings;

  updated_at?: string;

  view_count?: number;
}

Sharing.Collections = Collections;
Sharing.Invitations = Invitations;
Sharing.Tags = Tags;

export declare namespace Sharing {
  export { type SharingAccessPublicCollectionResponse as SharingAccessPublicCollectionResponse };

  export {
    Collections as Collections,
    type ShareCollection as ShareCollection,
    type ShareSettings as ShareSettings,
    type CollectionListResponse as CollectionListResponse,
    type CollectionAddCollaboratorsResponse as CollectionAddCollaboratorsResponse,
    type CollectionAddCollaboratorsParams as CollectionAddCollaboratorsParams,
    type CollectionUpdatePermissionsParams as CollectionUpdatePermissionsParams,
  };

  export {
    Invitations as Invitations,
    type InvitationListResponse as InvitationListResponse,
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationDeclineResponse as InvitationDeclineResponse,
  };

  export {
    Tags as Tags,
    type TagBrowsePublicResponse as TagBrowsePublicResponse,
    type TagImportResponse as TagImportResponse,
    type TagBrowsePublicParams as TagBrowsePublicParams,
    type TagImportParams as TagImportParams,
    type TagShareParams as TagShareParams,
  };
}
