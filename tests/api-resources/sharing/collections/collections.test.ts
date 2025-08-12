// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Taggy from '@chimpanze/taggy-typescript';

const client = new Taggy({
  bearerToken: 'My Bearer Token',
  taggyDomain: 'My Taggy Domain',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource collections', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.sharing.collections.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addCollaborators: only required params', async () => {
    const responsePromise = client.sharing.collections.addCollaborators('id', {
      collaborators: [{ permission: 'viewer' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('addCollaborators: required and optional params', async () => {
    const response = await client.sharing.collections.addCollaborators('id', {
      collaborators: [{ permission: 'viewer', email: 'email', user_id: 'user_id' }],
    });
  });

  // Prism tests are disabled
  test.skip('updatePermissions: only required params', async () => {
    const responsePromise = client.sharing.collections.updatePermissions('id', { share_type: 'public' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updatePermissions: required and optional params', async () => {
    const response = await client.sharing.collections.updatePermissions('id', {
      share_type: 'public',
      allow_comments: true,
      allow_download: true,
      allow_fork: true,
      expires_at: 'expires_at',
    });
  });
});
