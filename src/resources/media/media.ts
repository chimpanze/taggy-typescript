// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings';
import { MediaSettings, SettingUpdateParams, Settings } from './settings';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Media extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Delete a media file and its associated job
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/media/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch video/audio content from various platforms and URLs
   */
  fetch(body: MediaFetchParams, options?: RequestOptions): APIPromise<MediaJobQueued> {
    return this._client.post('/media/fetch', { body, ...options });
  }

  /**
   * Extract and fetch audio content from video sources
   */
  fetchAudio(body: MediaFetchAudioParams, options?: RequestOptions): APIPromise<MediaJobQueued> {
    return this._client.post('/media/fetch-audio', { body, ...options });
  }

  /**
   * Check the status of a media fetch job
   */
  fetchStatus(jobID: string, options?: RequestOptions): APIPromise<MediaJob> {
    return this._client.get(path`/media/fetch-status/${jobID}`, options);
  }

  /**
   * Get available formats for a media URL before fetching
   */
  getFormats(url: string, options?: RequestOptions): APIPromise<MediaGetFormatsResponse> {
    return this._client.get(path`/media/formats/${url}`, options);
  }
}

export interface MediaJob {
  id?: number;

  audio_only?: boolean;

  completed_at?: string;

  content_id?: number;

  created_at?: string;

  description?: string;

  duration?: number;

  error?: string;

  file_path?: string;

  file_size?: number;

  format?: string;

  original_url?: string;

  progress?: number;

  started_at?: string;

  status?: string;

  thumbnail?: string;

  thumbnail_path?: string;

  title?: string;

  upload_date?: string;

  uploader?: string;

  url?: string;

  user_id?: string;

  view_count?: number;
}

export interface MediaJobQueued {
  content_id?: number;

  job_id?: number;

  /**
   * always "pending" on creation
   */
  status?: string;
}

export type MediaGetFormatsResponse = Array<MediaGetFormatsResponse.MediaGetFormatsResponseItem>;

export namespace MediaGetFormatsResponse {
  export interface MediaGetFormatsResponseItem {
    audio_only?: boolean;

    codec?: string;

    extension?: string;

    file_size?: number;

    format_id?: string;

    quality?: string;

    resolution?: string;
  }
}

export interface MediaFetchParams {
  url: string;

  audio_only?: boolean;

  description?: string;

  title?: string;
}

export interface MediaFetchAudioParams {
  url: string;

  description?: string;

  title?: string;
}

Media.Settings = Settings;

export declare namespace Media {
  export {
    type MediaJob as MediaJob,
    type MediaJobQueued as MediaJobQueued,
    type MediaGetFormatsResponse as MediaGetFormatsResponse,
    type MediaFetchParams as MediaFetchParams,
    type MediaFetchAudioParams as MediaFetchAudioParams,
  };

  export {
    Settings as Settings,
    type MediaSettings as MediaSettings,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
