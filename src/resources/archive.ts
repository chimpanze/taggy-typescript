// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Archive extends APIResource {
  /**
   * Create an archive of a web page for the specified content
   */
  create(body: ArchiveCreateParams, options?: RequestOptions): APIPromise<ArchiveResponse> {
    return this._client.post('/archive/create', { body, ...options });
  }

  /**
   * Retrieve a specific archive by its ID
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<ArchiveResponse> {
    return this._client.get(path`/archive/${id}`, options);
  }

  /**
   * Delete an existing archive by its ID
   */
  delete(id: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/archive/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Check the status of an archive creation process
   */
  getStatus(id: number, options?: RequestOptions): APIPromise<ArchiveResponse> {
    return this._client.get(path`/archive/status/${id}`, options);
  }
}

export interface ArchiveResponse {
  id?: number;

  archive_url?: string;

  completed_at?: string;

  content_id?: number;

  created_at?: string;

  error?: string;

  file_size?: number;

  format?: string;

  status?: string;

  url?: string;
}

export interface ArchiveCreateParams {
  content_id: number;

  url: string;

  format?: string;
}

export declare namespace Archive {
  export { type ArchiveResponse as ArchiveResponse, type ArchiveCreateParams as ArchiveCreateParams };
}
