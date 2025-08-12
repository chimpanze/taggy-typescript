// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Settings extends APIResource {
  /**
   * Update user's AI tagging preferences and configuration
   */
  update(body: SettingUpdateParams, options?: RequestOptions): APIPromise<TaggingSettings> {
    return this._client.put('/ai/settings', { body, ...options });
  }

  /**
   * Get user's AI tagging preferences and configuration
   */
  get(options?: RequestOptions): APIPromise<TaggingSettings> {
    return this._client.get('/ai/settings', options);
  }
}

export interface TaggingSettings {
  id?: number;

  analyze_images?: boolean;

  analyze_text?: boolean;

  analyze_webpages?: boolean;

  auto_tagging_enabled?: boolean;

  confidence_threshold?: number;

  created_at?: string;

  custom_prompt?: string;

  enabled?: boolean;

  excluded_domains?: string;

  max_tags_per_content?: number;

  preferred_languages?: string;

  provider?: string;

  updated_at?: string;

  use_custom_model?: boolean;

  user_id?: string;
}

export interface SettingUpdateParams {
  analyze_images?: boolean;

  analyze_text?: boolean;

  analyze_webpages?: boolean;

  auto_tagging_enabled?: boolean;

  confidence_threshold?: number;

  custom_prompt?: string;

  enabled?: boolean;

  excluded_domains?: string;

  max_tags_per_content?: number;

  preferred_languages?: string;

  provider?: string;

  use_custom_model?: boolean;
}

export declare namespace Settings {
  export { type TaggingSettings as TaggingSettings, type SettingUpdateParams as SettingUpdateParams };
}
