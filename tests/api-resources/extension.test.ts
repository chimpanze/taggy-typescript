// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from '@chimpanze/taggy-frontend';

const client = new Taggy({
  bearerToken: 'My Bearer Token',
  taggyDomain: 'My Taggy Domain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extension', () => {
  // Prism tests are disabled
  test.skip('archiveCurrentPage: only required params', async () => {
    const responsePromise = client.extension.archiveCurrentPage({ content_id: 0, url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('archiveCurrentPage: required and optional params', async () => {
    const response = await client.extension.archiveCurrentPage({
      content_id: 0,
      url: 'url',
      format: 'format',
    });
  });

  // Prism tests are disabled
  test.skip('checkMediaJobProgress', async () => {
    const responsePromise = client.extension.checkMediaJobProgress('jobId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('quickTagContent: only required params', async () => {
    const responsePromise = client.extension.quickTagContent({ content_id: 0, tag_ids: [0] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('quickTagContent: required and optional params', async () => {
    const response = await client.extension.quickTagContent({ content_id: 0, tag_ids: [0] });
  });

  // Prism tests are disabled
  test.skip('retrieveAISuggestions', async () => {
    const responsePromise = client.extension.retrieveAISuggestions('contentId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUserTags', async () => {
    const responsePromise = client.extension.retrieveUserTags();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveUserTags: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.extension.retrieveUserTags(
        { limit: 0, popular: true, recent: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Taggy.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('saveBookmark: only required params', async () => {
    const responsePromise = client.extension.saveBookmark({ title: 'title', url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveBookmark: required and optional params', async () => {
    const response = await client.extension.saveBookmark({
      title: 'title',
      url: 'url',
      archive: true,
      description: 'description',
      tag_ids: [0],
    });
  });

  // Prism tests are disabled
  test.skip('saveFile: only required params', async () => {
    const responsePromise = client.extension.saveFile({ file_url: 'file_url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveFile: required and optional params', async () => {
    const response = await client.extension.saveFile({
      file_url: 'file_url',
      description: 'description',
      filename: 'filename',
      mime: 'mime',
      page_url: 'page_url',
      size: 0,
      source_url: 'source_url',
      tag_ids: [0],
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('saveImage: only required params', async () => {
    const responsePromise = client.extension.saveImage({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveImage: required and optional params', async () => {
    const response = await client.extension.saveImage({
      url: 'url',
      description: 'description',
      file_url: 'file_url',
      source: 'source',
      source_url: 'source_url',
      tag_ids: [0],
      thumbnail_url: 'thumbnail_url',
      title: 'title',
    });
  });

  // Prism tests are disabled
  test.skip('saveText: only required params', async () => {
    const responsePromise = client.extension.saveText({ content: 'content', title: 'title' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveText: required and optional params', async () => {
    const response = await client.extension.saveText({
      content: 'content',
      title: 'title',
      context: 'context',
      source: 'source',
      source_url: 'source_url',
      tag_ids: [0],
    });
  });

  // Prism tests are disabled
  test.skip('saveVideo: only required params', async () => {
    const responsePromise = client.extension.saveVideo({ url: 'url' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('saveVideo: required and optional params', async () => {
    const response = await client.extension.saveVideo({
      url: 'url',
      audio_only: true,
      description: 'description',
      tag_ids: [0],
      title: 'title',
    });
  });
});
