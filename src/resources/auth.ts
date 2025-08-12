// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  /**
   * Gets the profile information of the currently authenticated user
   */
  retrieveUser(options?: RequestOptions): APIPromise<AuthRetrieveUserResponse> {
    return this._client.get('/auth/user', options);
  }

  /**
   * Validates a JWT token with Hanko authentication service and creates/updates user
   * in database
   */
  validateToken(
    body: AuthValidateTokenParams,
    options?: RequestOptions,
  ): APIPromise<AuthValidateTokenResponse> {
    return this._client.post('/auth/validate', { body, ...options });
  }
}

export interface AuthRetrieveUserResponse {
  id?: string;

  created_at?: string;

  email?: string;

  is_active?: boolean;

  last_login_at?: string;

  name?: string;

  profile_pic_url?: string;

  role?: string;

  updated_at?: string;
}

export interface AuthValidateTokenResponse {
  is_valid?: boolean;
}

export interface AuthValidateTokenParams {
  audience?: string;

  jwt?: string;
}

export declare namespace Auth {
  export {
    type AuthRetrieveUserResponse as AuthRetrieveUserResponse,
    type AuthValidateTokenResponse as AuthValidateTokenResponse,
    type AuthValidateTokenParams as AuthValidateTokenParams,
  };
}
