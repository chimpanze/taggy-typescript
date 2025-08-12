// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from '@chimpanze/taggy-typescript';

const client = new Taggy({
  bearerToken: 'Bearer ijdsoiasjdOHsodiuhsioudh',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource share', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.sharing.collections.share.create('id', { share_type: 'public' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.sharing.collections.share.create('id', {
      share_type: 'public',
      allow_comments: true,
      allow_download: true,
      allow_fork: true,
      expires_at: 'expires_at',
    });
  });

  // Prism tests are disabled
  test.skip('remove', async () => {
    const responsePromise = client.sharing.collections.share.remove('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
