// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  /**
   * Update user's media fetch settings and preferences
   */
  update(body: SettingUpdateParams, options?: RequestOptions): APIPromise<MediaSettings> {
    return this._client.put('/media/settings', { body, ...options });
  }

  /**
   * Get user's media fetch settings and preferences
   */
  get(options?: RequestOptions): APIPromise<MediaSettings> {
    return this._client.get('/media/settings', options);
  }
}

export interface MediaSettings {
  id?: number;

  allowed_domains?: string;

  audio_format?: string;

  audio_quality?: string;

  auto_extract_audio?: boolean;

  blocked_domains?: string;

  created_at?: string;

  max_file_size?: number;

  preferred_format?: string;

  preferred_quality?: string;

  save_subtitles?: boolean;

  save_thumbnails?: boolean;

  updated_at?: string;

  user_id?: string;
}

export interface SettingUpdateParams {
  allowed_domains?: string;

  audio_format?: string;

  audio_quality?: string;

  auto_extract_audio?: boolean;

  blocked_domains?: string;

  max_file_size?: number;

  preferred_format?: string;

  preferred_quality?: string;

  save_subtitles?: boolean;

  save_thumbnails?: boolean;
}

export declare namespace Settings {
  export { type MediaSettings as MediaSettings, type SettingUpdateParams as SettingUpdateParams };
}
