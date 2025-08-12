// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from 'taggy';

const client = new Taggy({
  bearerToken: 'My Bearer Token',
  baseURL: 'My Base URL',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.content.create({ title: 'title', type: 'type' });
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
    const response = await client.content.create({
      title: 'title',
      type: 'type',
      content: 'content',
      description: 'description',
      file_url: 'file_url',
      tag_ids: [0],
      thumbnail_url: 'thumbnail_url',
      url: 'url',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.content.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.content.update(0, { title: 'title' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.content.update(0, {
      title: 'title',
      content: 'content',
      description: 'description',
      file_url: 'file_url',
      thumbnail_url: 'thumbnail_url',
      url: 'url',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.content.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.content.list(
        { collection_id: 0, page: 0, page_size: 0, search: 'search', tag_id: 0, type: 'type' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Taggy.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.content.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bulkOperations: only required params', async () => {
    const responsePromise = client.content.bulkOperations({ content_ids: [0], operation: 'operation' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('bulkOperations: required and optional params', async () => {
    const response = await client.content.bulkOperations({
      content_ids: [0],
      operation: 'operation',
      tag_ids: [0],
    });
  });

  // Prism tests are disabled
  test.skip('import', async () => {
    const responsePromise = client.content.import();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('import: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.content.import(
        { items: [{ description: 'description', tag_ids: [0], title: 'title', url: 'url' }] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Taggy.NotFoundError);
  });
});
