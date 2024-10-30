// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2 

import { Options } from "@hey-api/client-fetch";
import { type QueryClient } from "@tanstack/react-query";
import { playlistsList, playlistsRetrieve, schemaRetrieve, tracksList, tracksRetrieve } from "../requests/services.gen";
import { PlaylistsRetrieveData, SchemaRetrieveData, TracksRetrieveData } from "../requests/types.gen";
import * as Common from "./common";
export const prefetchUsePlaylistsList = (queryClient: QueryClient, clientOptions: Options<unknown, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UsePlaylistsListKeyFn(clientOptions), queryFn: () => playlistsList({ ...clientOptions }).then(response => response.data) });
export const prefetchUsePlaylistsRetrieve = (queryClient: QueryClient, clientOptions: Options<PlaylistsRetrieveData, true>) => queryClient.prefetchQuery({ queryKey: Common.UsePlaylistsRetrieveKeyFn(clientOptions), queryFn: () => playlistsRetrieve({ ...clientOptions }).then(response => response.data) });
export const prefetchUseSchemaRetrieve = (queryClient: QueryClient, clientOptions: Options<SchemaRetrieveData, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseSchemaRetrieveKeyFn(clientOptions), queryFn: () => schemaRetrieve({ ...clientOptions }).then(response => response.data) });
export const prefetchUseTracksList = (queryClient: QueryClient, clientOptions: Options<unknown, true> = {}) => queryClient.prefetchQuery({ queryKey: Common.UseTracksListKeyFn(clientOptions), queryFn: () => tracksList({ ...clientOptions }).then(response => response.data) });
export const prefetchUseTracksRetrieve = (queryClient: QueryClient, clientOptions: Options<TracksRetrieveData, true>) => queryClient.prefetchQuery({ queryKey: Common.UseTracksRetrieveKeyFn(clientOptions), queryFn: () => tracksRetrieve({ ...clientOptions }).then(response => response.data) });
