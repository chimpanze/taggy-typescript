// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from '@chimpanze/taggy-typescript';

const client = new Taggy({
  bearerToken: 'Bearer ijdsoiasjdOHsodiuhsioudh',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  // Prism tests are disabled
  test.skip('browsePublic', async () => {
    const responsePromise = client.sharing.tags.browsePublic();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('browsePublic: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sharing.tags.browsePublic({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Taggy.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('import: only required params', async () => {
    const responsePromise = client.sharing.tags.import({ library_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('import: required and optional params', async () => {
    const response = await client.sharing.tags.import({ library_id: 0 });
  });

  // Prism tests are disabled
  test.skip('share: only required params', async () => {
    const responsePromise = client.sharing.tags.share('id', { share_type: 'public' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('share: required and optional params', async () => {
    const response = await client.sharing.tags.share('id', { share_type: 'public' });
  });
});
