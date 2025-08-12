# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">TagSuggestion</a></code>
- <code><a href="./src/resources/ai/ai.ts">TagSuggestions</a></code>
- <code><a href="./src/resources/ai/ai.ts">AIListModelsResponse</a></code>
- <code><a href="./src/resources/ai/ai.ts">AITrainModelResponse</a></code>

Methods:

- <code title="post /ai/analyze">client.ai.<a href="./src/resources/ai/ai.ts">analyze</a>({ ...params }) -> TagSuggestions</code>
- <code title="get /ai/suggestions/{contentId}">client.ai.<a href="./src/resources/ai/ai.ts">getSuggestions</a>(contentID) -> TagSuggestions</code>
- <code title="get /ai/models">client.ai.<a href="./src/resources/ai/ai.ts">listModels</a>() -> AIListModelsResponse</code>
- <code title="post /ai/train">client.ai.<a href="./src/resources/ai/ai.ts">trainModel</a>() -> AITrainModelResponse</code>

## Settings

Types:

- <code><a href="./src/resources/ai/settings.ts">TaggingSettings</a></code>

Methods:

- <code title="put /ai/settings">client.ai.settings.<a href="./src/resources/ai/settings.ts">update</a>({ ...params }) -> TaggingSettings</code>
- <code title="get /ai/settings">client.ai.settings.<a href="./src/resources/ai/settings.ts">get</a>() -> TaggingSettings</code>

# Archive

Types:

- <code><a href="./src/resources/archive.ts">ArchiveResponse</a></code>

Methods:

- <code title="post /archive/create">client.archive.<a href="./src/resources/archive.ts">create</a>({ ...params }) -> ArchiveResponse</code>
- <code title="get /archive/{id}">client.archive.<a href="./src/resources/archive.ts">retrieve</a>(id) -> ArchiveResponse</code>
- <code title="delete /archive/{id}">client.archive.<a href="./src/resources/archive.ts">delete</a>(id) -> void</code>
- <code title="get /archive/status/{id}">client.archive.<a href="./src/resources/archive.ts">getStatus</a>(id) -> ArchiveResponse</code>

# Auth

Types:

- <code><a href="./src/resources/auth.ts">AuthRetrieveUserResponse</a></code>
- <code><a href="./src/resources/auth.ts">AuthValidateTokenResponse</a></code>

Methods:

- <code title="get /auth/user">client.auth.<a href="./src/resources/auth.ts">retrieveUser</a>() -> AuthRetrieveUserResponse</code>
- <code title="post /auth/validate">client.auth.<a href="./src/resources/auth.ts">validateToken</a>({ ...params }) -> AuthValidateTokenResponse</code>

# Collections

Types:

- <code><a href="./src/resources/collections/collections.ts">CollectionResponse</a></code>
- <code><a href="./src/resources/collections/collections.ts">CollectionListResponse</a></code>

Methods:

- <code title="post /collections">client.collections.<a href="./src/resources/collections/collections.ts">create</a>({ ...params }) -> CollectionResponse</code>
- <code title="get /collections/{id}">client.collections.<a href="./src/resources/collections/collections.ts">retrieve</a>(id) -> CollectionResponse</code>
- <code title="put /collections/{id}">client.collections.<a href="./src/resources/collections/collections.ts">update</a>(id, { ...params }) -> CollectionResponse</code>
- <code title="get /collections">client.collections.<a href="./src/resources/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>
- <code title="delete /collections/{id}">client.collections.<a href="./src/resources/collections/collections.ts">delete</a>(id) -> void</code>

## Items

Types:

- <code><a href="./src/resources/collections/items.ts">ItemAddResponse</a></code>
- <code><a href="./src/resources/collections/items.ts">ItemRemoveResponse</a></code>

Methods:

- <code title="post /collections/{id}/items">client.collections.items.<a href="./src/resources/collections/items.ts">add</a>(id, { ...params }) -> ItemAddResponse</code>
- <code title="delete /collections/{id}/items/{itemId}">client.collections.items.<a href="./src/resources/collections/items.ts">remove</a>(itemID, { ...params }) -> ItemRemoveResponse</code>

# Comments

## Like

Types:

- <code><a href="./src/resources/comments/like.ts">LikeCollectionResponse</a></code>
- <code><a href="./src/resources/comments/like.ts">LikeResponse</a></code>

Methods:

- <code title="post /comments/{id}/like">client.comments.like.<a href="./src/resources/comments/like.ts">create</a>(id) -> LikeCollectionResponse</code>
- <code title="delete /comments/{id}/like">client.comments.like.<a href="./src/resources/comments/like.ts">delete</a>(id) -> LikeCollectionResponse</code>
- <code title="get /comments/{id}/like">client.comments.like.<a href="./src/resources/comments/like.ts">check</a>(id) -> LikeResponse</code>

# Content

Types:

- <code><a href="./src/resources/content/content.ts">ContentResponse</a></code>
- <code><a href="./src/resources/content/content.ts">ContentImportResponse</a></code>

Methods:

- <code title="post /content">client.content.<a href="./src/resources/content/content.ts">create</a>({ ...params }) -> ContentResponse</code>
- <code title="get /content/{id}">client.content.<a href="./src/resources/content/content.ts">retrieve</a>(id) -> ContentResponse</code>
- <code title="put /content/{id}">client.content.<a href="./src/resources/content/content.ts">update</a>(id, { ...params }) -> ContentResponse</code>
- <code title="get /content">client.content.<a href="./src/resources/content/content.ts">list</a>({ ...params }) -> ContentResponsesMyPageNumberPage</code>
- <code title="delete /content/{id}">client.content.<a href="./src/resources/content/content.ts">delete</a>(id) -> void</code>
- <code title="post /content/bulk">client.content.<a href="./src/resources/content/content.ts">bulkOperations</a>({ ...params }) -> SuccessResponse</code>
- <code title="post /content/import">client.content.<a href="./src/resources/content/content.ts">import</a>({ ...params }) -> ContentImportResponse</code>

## Tags

Types:

- <code><a href="./src/resources/content/tags.ts">SuccessResponse</a></code>

Methods:

- <code title="post /content/{id}/tags">client.content.tags.<a href="./src/resources/content/tags.ts">add</a>(id, { ...params }) -> SuccessResponse</code>
- <code title="delete /content/{id}/tags/{tagId}">client.content.tags.<a href="./src/resources/content/tags.ts">remove</a>(tagID, { ...params }) -> SuccessResponse</code>

# Extension

Types:

- <code><a href="./src/resources/extension.ts">ExtensionResponse</a></code>
- <code><a href="./src/resources/extension.ts">ExtensionCheckMediaJobProgressResponse</a></code>
- <code><a href="./src/resources/extension.ts">ExtensionQuickTagContentResponse</a></code>
- <code><a href="./src/resources/extension.ts">ExtensionRetrieveAISuggestionsResponse</a></code>
- <code><a href="./src/resources/extension.ts">ExtensionRetrieveUserTagsResponse</a></code>

Methods:

- <code title="post /extension/archive">client.extension.<a href="./src/resources/extension.ts">archiveCurrentPage</a>({ ...params }) -> ArchiveResponse</code>
- <code title="get /extension/media-job/{jobId}">client.extension.<a href="./src/resources/extension.ts">checkMediaJobProgress</a>(jobID) -> ExtensionCheckMediaJobProgressResponse</code>
- <code title="post /extension/quick-tag">client.extension.<a href="./src/resources/extension.ts">quickTagContent</a>({ ...params }) -> ExtensionQuickTagContentResponse</code>
- <code title="get /extension/ai-suggestions/{contentId}">client.extension.<a href="./src/resources/extension.ts">retrieveAISuggestions</a>(contentID) -> ExtensionRetrieveAISuggestionsResponse</code>
- <code title="get /extension/tags">client.extension.<a href="./src/resources/extension.ts">retrieveUserTags</a>({ ...params }) -> ExtensionRetrieveUserTagsResponse</code>
- <code title="post /extension/save-bookmark">client.extension.<a href="./src/resources/extension.ts">saveBookmark</a>({ ...params }) -> ExtensionResponse</code>
- <code title="post /extension/save-file">client.extension.<a href="./src/resources/extension.ts">saveFile</a>({ ...params }) -> ExtensionResponse</code>
- <code title="post /extension/save-image">client.extension.<a href="./src/resources/extension.ts">saveImage</a>({ ...params }) -> ExtensionResponse</code>
- <code title="post /extension/save-text">client.extension.<a href="./src/resources/extension.ts">saveText</a>({ ...params }) -> ExtensionResponse</code>
- <code title="post /extension/save-video">client.extension.<a href="./src/resources/extension.ts">saveVideo</a>({ ...params }) -> ExtensionResponse</code>

# Files

Types:

- <code><a href="./src/resources/files.ts">PresignedURL</a></code>
- <code><a href="./src/resources/files.ts">FileUploadResponse</a></code>

Methods:

- <code title="delete /files/{id}">client.files.<a href="./src/resources/files.ts">delete</a>(id) -> void</code>
- <code title="get /files/{id}">client.files.<a href="./src/resources/files.ts">download</a>(id) -> Response</code>
- <code title="post /files/presigned">client.files.<a href="./src/resources/files.ts">generatePresignedURL</a>({ ...params }) -> PresignedURL</code>
- <code title="get /files/view/{id}">client.files.<a href="./src/resources/files.ts">getViewPresignedURL</a>(id, { ...params }) -> PresignedURL</code>
- <code title="post /files/upload">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> FileUploadResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Likes

## Collections

Types:

- <code><a href="./src/resources/likes/collections/collections.ts">CollectionListResponse</a></code>

Methods:

- <code title="get /likes/collections">client.likes.collections.<a href="./src/resources/likes/collections/collections.ts">list</a>({ ...params }) -> CollectionListResponse</code>

### Like

Methods:

- <code title="post /likes/collections/{id}/like">client.likes.collections.like.<a href="./src/resources/likes/collections/like.ts">create</a>(id) -> LikeCollectionResponse</code>
- <code title="delete /likes/collections/{id}/like">client.likes.collections.like.<a href="./src/resources/likes/collections/like.ts">delete</a>(id) -> LikeCollectionResponse</code>
- <code title="get /likes/collections/{id}/like">client.likes.collections.like.<a href="./src/resources/likes/collections/like.ts">check</a>(id) -> LikeResponse</code>

# Media

Types:

- <code><a href="./src/resources/media/media.ts">MediaJob</a></code>
- <code><a href="./src/resources/media/media.ts">MediaGetFormatsResponse</a></code>

Methods:

- <code title="delete /media/{id}">client.media.<a href="./src/resources/media/media.ts">delete</a>(id) -> void</code>
- <code title="post /media/fetch">client.media.<a href="./src/resources/media/media.ts">fetch</a>({ ...params }) -> MediaJob</code>
- <code title="post /media/fetch-audio">client.media.<a href="./src/resources/media/media.ts">fetchAudio</a>({ ...params }) -> MediaJob</code>
- <code title="get /media/fetch-status/{jobId}">client.media.<a href="./src/resources/media/media.ts">fetchStatus</a>(jobID) -> MediaJob</code>
- <code title="get /media/formats/{url}">client.media.<a href="./src/resources/media/media.ts">getFormats</a>(url) -> MediaGetFormatsResponse</code>

## Settings

Types:

- <code><a href="./src/resources/media/settings.ts">MediaSettings</a></code>

Methods:

- <code title="put /media/settings">client.media.settings.<a href="./src/resources/media/settings.ts">update</a>({ ...params }) -> MediaSettings</code>
- <code title="get /media/settings">client.media.settings.<a href="./src/resources/media/settings.ts">get</a>() -> MediaSettings</code>

# Ready

Types:

- <code><a href="./src/resources/ready.ts">ReadyCheckResponse</a></code>

Methods:

- <code title="get /ready">client.ready.<a href="./src/resources/ready.ts">check</a>() -> ReadyCheckResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchResult</a></code>
- <code><a href="./src/resources/search.ts">SearchRetrieveResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchGetSuggestionsResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchListRecentResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchListTrendingResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search.ts">retrieve</a>({ ...params }) -> SearchRetrieveResponse</code>
- <code title="get /search/suggestions">client.search.<a href="./src/resources/search.ts">getSuggestions</a>({ ...params }) -> SearchGetSuggestionsResponse</code>
- <code title="get /search/recent">client.search.<a href="./src/resources/search.ts">listRecent</a>({ ...params }) -> SearchListRecentResponse</code>
- <code title="get /search/trending">client.search.<a href="./src/resources/search.ts">listTrending</a>({ ...params }) -> SearchListTrendingResponse</code>

# Sharing

Types:

- <code><a href="./src/resources/sharing/sharing.ts">SharingAccessPublicCollectionResponse</a></code>

Methods:

- <code title="get /sharing/public/{shareId}">client.sharing.<a href="./src/resources/sharing/sharing.ts">accessPublicCollection</a>(shareID) -> SharingAccessPublicCollectionResponse</code>

## Collections

Types:

- <code><a href="./src/resources/sharing/collections/collections.ts">ShareCollection</a></code>
- <code><a href="./src/resources/sharing/collections/collections.ts">ShareSettings</a></code>
- <code><a href="./src/resources/sharing/collections/collections.ts">CollectionListResponse</a></code>
- <code><a href="./src/resources/sharing/collections/collections.ts">CollectionAddCollaboratorsResponse</a></code>

Methods:

- <code title="get /sharing/collections">client.sharing.collections.<a href="./src/resources/sharing/collections/collections.ts">list</a>() -> CollectionListResponse</code>
- <code title="post /sharing/collections/{id}/collaborate">client.sharing.collections.<a href="./src/resources/sharing/collections/collections.ts">addCollaborators</a>(id, { ...params }) -> CollectionAddCollaboratorsResponse</code>
- <code title="put /sharing/collections/{id}/permissions">client.sharing.collections.<a href="./src/resources/sharing/collections/collections.ts">updatePermissions</a>(id, { ...params }) -> ShareSettings</code>

### Share

Methods:

- <code title="post /sharing/collections/{id}/share">client.sharing.collections.share.<a href="./src/resources/sharing/collections/share.ts">create</a>(id, { ...params }) -> ShareSettings</code>
- <code title="delete /sharing/collections/{id}/share">client.sharing.collections.share.<a href="./src/resources/sharing/collections/share.ts">remove</a>(id) -> void</code>

## Invitations

Types:

- <code><a href="./src/resources/sharing/invitations.ts">InvitationListResponse</a></code>
- <code><a href="./src/resources/sharing/invitations.ts">InvitationAcceptResponse</a></code>
- <code><a href="./src/resources/sharing/invitations.ts">InvitationDeclineResponse</a></code>

Methods:

- <code title="get /sharing/invitations">client.sharing.invitations.<a href="./src/resources/sharing/invitations.ts">list</a>() -> InvitationListResponse</code>
- <code title="post /sharing/invitations/{id}/accept">client.sharing.invitations.<a href="./src/resources/sharing/invitations.ts">accept</a>(id) -> InvitationAcceptResponse</code>
- <code title="post /sharing/invitations/{id}/decline">client.sharing.invitations.<a href="./src/resources/sharing/invitations.ts">decline</a>(id) -> InvitationDeclineResponse</code>

## Tags

Types:

- <code><a href="./src/resources/sharing/tags.ts">TagBrowsePublicResponse</a></code>
- <code><a href="./src/resources/sharing/tags.ts">TagImportResponse</a></code>

Methods:

- <code title="get /sharing/tags/public">client.sharing.tags.<a href="./src/resources/sharing/tags.ts">browsePublic</a>({ ...params }) -> TagBrowsePublicResponse</code>
- <code title="post /sharing/tags/import">client.sharing.tags.<a href="./src/resources/sharing/tags.ts">import</a>({ ...params }) -> TagImportResponse</code>
- <code title="post /sharing/tags/{id}/share">client.sharing.tags.<a href="./src/resources/sharing/tags.ts">share</a>(id, { ...params }) -> ShareSettings</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">Tag</a></code>
- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/tags.ts">TagGetSuggestionsResponse</a></code>

Methods:

- <code title="post /tags">client.tags.<a href="./src/resources/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="put /tags/{id}">client.tags.<a href="./src/resources/tags.ts">update</a>(id, { ...params }) -> Tag</code>
- <code title="get /tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /tags/{id}">client.tags.<a href="./src/resources/tags.ts">delete</a>(id) -> void</code>
- <code title="get /tags/suggestions">client.tags.<a href="./src/resources/tags.ts">getSuggestions</a>({ ...params }) -> TagGetSuggestionsResponse</code>
