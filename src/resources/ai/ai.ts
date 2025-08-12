// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SettingsAPI from './settings';
import { SettingUpdateParams, Settings, TaggingSettings } from './settings';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AI extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Analyze content using AI and return tag suggestions
   */
  analyze(body: AIAnalyzeParams, options?: RequestOptions): APIPromise<TagSuggestions> {
    return this._client.post('/ai/analyze', { body, ...options });
  }

  /**
   * Get AI-generated tag suggestions for a specific content item
   */
  getSuggestions(contentID: number, options?: RequestOptions): APIPromise<TagSuggestions> {
    return this._client.get(path`/ai/suggestions/${contentID}`, options);
  }

  /**
   * Get a list of available AI models for tagging
   */
  listModels(options?: RequestOptions): APIPromise<AIListModelsResponse> {
    return this._client.get('/ai/models', options);
  }

  /**
   * Initiate training of a personalized AI model based on user's tagging history
   */
  trainModel(options?: RequestOptions): APIPromise<AITrainModelResponse> {
    return this._client.post('/ai/train', options);
  }
}

export interface TagSuggestion {
  confidence?: number;

  reason?: string;

  tag_name?: string;
}

export interface TagSuggestions {
  content_id?: number;

  suggestions?: Array<TagSuggestion>;
}

export interface AIListModelsResponse {
  models?: Array<string>;
}

export interface AITrainModelResponse {
  message?: string;

  status?: string;
}

export interface AIAnalyzeParams {
  content_id?: number;
}

AI.Settings = Settings;

export declare namespace AI {
  export {
    type TagSuggestion as TagSuggestion,
    type TagSuggestions as TagSuggestions,
    type AIListModelsResponse as AIListModelsResponse,
    type AITrainModelResponse as AITrainModelResponse,
    type AIAnalyzeParams as AIAnalyzeParams,
  };

  export {
    Settings as Settings,
    type TaggingSettings as TaggingSettings,
    type SettingUpdateParams as SettingUpdateParams,
  };
}
