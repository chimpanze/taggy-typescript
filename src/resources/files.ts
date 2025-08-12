// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Files extends APIResource {
  /**
   * Delete a file by ID for the authenticated user
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/files/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download a file by ID for the authenticated user
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/files/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Generate a presigned URL for temporary file access for the authenticated user
   */
  generatePresignedURL(
    body: FileGeneratePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<PresignedURL> {
    return this._client.post('/files/presigned', { body, ...options });
  }

  /**
   * Get a presigned URL for viewing a file by ID for the authenticated user
   */
  getViewPresignedURL(
    id: string,
    query: FileGetViewPresignedURLParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PresignedURL> {
    return this._client.get(path`/files/view/${id}`, { query, ...options });
  }

  /**
   * Upload a file with optional title and description for the authenticated user
   */
  upload(body: FileUploadParams, options?: RequestOptions): APIPromise<FileUploadResponse> {
    return this._client.post(
      '/files/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface PresignedURL {
  url?: string;
}

export interface FileUploadResponse {
  id?: number;

  created_at?: string;

  description?: string;

  file_size?: number;

  file_url?: string;

  mime_type?: string;

  thumbnail_url?: string;

  title?: string;

  type?: string;

  updated_at?: string;
}

export interface FileGeneratePresignedURLParams {
  /**
   * in seconds
   */
  expiry?: number;

  file_id?: number;
}

export interface FileGetViewPresignedURLParams {
  /**
   * Use thumbnail image
   */
  use_thumbnail?: boolean;
}

export interface FileUploadParams {
  /**
   * File to upload
   */
  file: Uploadable;

  /**
   * File description
   */
  description?: string;

  /**
   * File title
   */
  title?: string;
}

export declare namespace Files {
  export {
    type PresignedURL as PresignedURL,
    type FileUploadResponse as FileUploadResponse,
    type FileGeneratePresignedURLParams as FileGeneratePresignedURLParams,
    type FileGetViewPresignedURLParams as FileGetViewPresignedURLParams,
    type FileUploadParams as FileUploadParams,
  };
}
