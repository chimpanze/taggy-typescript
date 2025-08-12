// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invitations extends APIResource {
  /**
   * Get all collaboration invitations for the authenticated user
   */
  list(options?: RequestOptions): APIPromise<InvitationListResponse> {
    return this._client.get('/sharing/invitations', options);
  }

  /**
   * Accept a collaboration invitation for the authenticated user
   */
  accept(id: string, options?: RequestOptions): APIPromise<InvitationAcceptResponse> {
    return this._client.post(path`/sharing/invitations/${id}/accept`, options);
  }

  /**
   * Decline a collaboration invitation for the authenticated user
   */
  decline(id: string, options?: RequestOptions): APIPromise<InvitationDeclineResponse> {
    return this._client.post(path`/sharing/invitations/${id}/decline`, options);
  }
}

export type InvitationListResponse = Array<InvitationListResponse.InvitationListResponseItem>;

export namespace InvitationListResponse {
  export interface InvitationListResponseItem {
    id?: number;

    email?: string;

    invited_at?: string;

    joined_at?: string;

    permission?: string;

    status?: string;

    user_id?: string;
  }
}

export type InvitationAcceptResponse = { [key: string]: string };

export type InvitationDeclineResponse = { [key: string]: string };

export declare namespace Invitations {
  export {
    type InvitationListResponse as InvitationListResponse,
    type InvitationAcceptResponse as InvitationAcceptResponse,
    type InvitationDeclineResponse as InvitationDeclineResponse,
  };
}
