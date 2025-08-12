// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ready extends APIResource {
  /**
   * Check if the API and its dependencies are ready
   */
  check(options?: RequestOptions): APIPromise<ReadyCheckResponse> {
    return this._client.get('/ready', options);
  }
}

export interface ReadyCheckResponse {
  database?: string;

  status?: string;
}

export declare namespace Ready {
  export { type ReadyCheckResponse as ReadyCheckResponse };
}
