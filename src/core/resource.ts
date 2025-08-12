// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Taggy } from '../client';

export abstract class APIResource {
  protected _client: Taggy;

  constructor(client: Taggy) {
    this._client = client;
  }
}
