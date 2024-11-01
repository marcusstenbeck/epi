// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-fetch';
import type { PlaylistsListError, PlaylistsListResponse, PlaylistsCreateData, PlaylistsCreateError, PlaylistsCreateResponse, PlaylistsRetrieveData, PlaylistsRetrieveError, PlaylistsRetrieveResponse, PlaylistsUpdateData, PlaylistsUpdateError, PlaylistsUpdateResponse, PlaylistsPartialUpdateData, PlaylistsPartialUpdateError, PlaylistsPartialUpdateResponse, PlaylistsDestroyData, PlaylistsDestroyError, PlaylistsDestroyResponse, SchemaRetrieveData, SchemaRetrieveError, SchemaRetrieveResponse, TracksListError, TracksListResponse, TracksCreateData, TracksCreateError, TracksCreateResponse, TracksRetrieveData, TracksRetrieveError, TracksRetrieveResponse, TracksUpdateData, TracksUpdateError, TracksUpdateResponse, TracksPartialUpdateData, TracksPartialUpdateError, TracksPartialUpdateResponse, TracksDestroyData, TracksDestroyError, TracksDestroyResponse } from './types.gen';

export const client = createClient(createConfig());

export const playlistsList = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<PlaylistsListResponse, PlaylistsListError, ThrowOnError>({
    ...options,
    url: '/playlists/'
}); };

export const playlistsCreate = <ThrowOnError extends boolean = false>(options: Options<PlaylistsCreateData, ThrowOnError>) => { return (options?.client ?? client).post<PlaylistsCreateResponse, PlaylistsCreateError, ThrowOnError>({
    ...options,
    url: '/playlists/'
}); };

export const playlistsRetrieve = <ThrowOnError extends boolean = false>(options: Options<PlaylistsRetrieveData, ThrowOnError>) => { return (options?.client ?? client).get<PlaylistsRetrieveResponse, PlaylistsRetrieveError, ThrowOnError>({
    ...options,
    url: '/playlists/{id}/'
}); };

export const playlistsUpdate = <ThrowOnError extends boolean = false>(options: Options<PlaylistsUpdateData, ThrowOnError>) => { return (options?.client ?? client).put<PlaylistsUpdateResponse, PlaylistsUpdateError, ThrowOnError>({
    ...options,
    url: '/playlists/{id}/'
}); };

export const playlistsPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<PlaylistsPartialUpdateData, ThrowOnError>) => { return (options?.client ?? client).patch<PlaylistsPartialUpdateResponse, PlaylistsPartialUpdateError, ThrowOnError>({
    ...options,
    url: '/playlists/{id}/'
}); };

export const playlistsDestroy = <ThrowOnError extends boolean = false>(options: Options<PlaylistsDestroyData, ThrowOnError>) => { return (options?.client ?? client).delete<PlaylistsDestroyResponse, PlaylistsDestroyError, ThrowOnError>({
    ...options,
    url: '/playlists/{id}/'
}); };

/**
 * OpenApi3 schema for this API. Format can be selected via content negotiation.
 *
 * - YAML: application/vnd.oai.openapi
 * - JSON: application/vnd.oai.openapi+json
 */
export const schemaRetrieve = <ThrowOnError extends boolean = false>(options?: Options<SchemaRetrieveData, ThrowOnError>) => { return (options?.client ?? client).get<SchemaRetrieveResponse, SchemaRetrieveError, ThrowOnError>({
    ...options,
    url: '/schema/'
}); };

export const tracksList = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<TracksListResponse, TracksListError, ThrowOnError>({
    ...options,
    url: '/tracks/'
}); };

export const tracksCreate = <ThrowOnError extends boolean = false>(options: Options<TracksCreateData, ThrowOnError>) => { return (options?.client ?? client).post<TracksCreateResponse, TracksCreateError, ThrowOnError>({
    ...options,
    url: '/tracks/'
}); };

export const tracksRetrieve = <ThrowOnError extends boolean = false>(options: Options<TracksRetrieveData, ThrowOnError>) => { return (options?.client ?? client).get<TracksRetrieveResponse, TracksRetrieveError, ThrowOnError>({
    ...options,
    url: '/tracks/{id}/'
}); };

export const tracksUpdate = <ThrowOnError extends boolean = false>(options: Options<TracksUpdateData, ThrowOnError>) => { return (options?.client ?? client).put<TracksUpdateResponse, TracksUpdateError, ThrowOnError>({
    ...options,
    url: '/tracks/{id}/'
}); };

export const tracksPartialUpdate = <ThrowOnError extends boolean = false>(options: Options<TracksPartialUpdateData, ThrowOnError>) => { return (options?.client ?? client).patch<TracksPartialUpdateResponse, TracksPartialUpdateError, ThrowOnError>({
    ...options,
    url: '/tracks/{id}/'
}); };

export const tracksDestroy = <ThrowOnError extends boolean = false>(options: Options<TracksDestroyData, ThrowOnError>) => { return (options?.client ?? client).delete<TracksDestroyResponse, TracksDestroyError, ThrowOnError>({
    ...options,
    url: '/tracks/{id}/'
}); };