// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from 'taggy';

const client = new Taggy({
  bearerToken: 'My Bearer Token',
  baseURL: 'My Base URL',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource items', () => {
  // Prism tests are disabled
  test.skip('add: only required params', async () => {
    const responsePromise = client.collections.items.add(0, { content_ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('add: required and optional params', async () => {
    const response = await client.collections.items.add(0, { content_ids: [0] });
  });

  // Prism tests are disabled
  test.skip('remove: only required params', async () => {
    const responsePromise = client.collections.items.remove(0, { id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('remove: required and optional params', async () => {
    const response = await client.collections.items.remove(0, { id: 0 });
  });
});
