// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2 

import { Options } from "@hey-api/client-fetch";
import { type QueryClient } from "@tanstack/react-query";
import { playlistsList, playlistsRetrieve, schemaRetrieve, tracksList, tracksRetrieve } from "../requests/services.gen";
import { PlaylistsRetrieveData, SchemaRetrieveData, TracksRetrieveData } from "../requests/types.gen";
import * as Common from "./common";
export const ensureUsePlaylistsListData = (queryClient: QueryClient, clientOptions: Options<unknown, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UsePlaylistsListKeyFn(clientOptions), queryFn: () => playlistsList({ ...clientOptions }).then(response => response.data) });
export const ensureUsePlaylistsRetrieveData = (queryClient: QueryClient, clientOptions: Options<PlaylistsRetrieveData, true>) => queryClient.ensureQueryData({ queryKey: Common.UsePlaylistsRetrieveKeyFn(clientOptions), queryFn: () => playlistsRetrieve({ ...clientOptions }).then(response => response.data) });
export const ensureUseSchemaRetrieveData = (queryClient: QueryClient, clientOptions: Options<SchemaRetrieveData, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseSchemaRetrieveKeyFn(clientOptions), queryFn: () => schemaRetrieve({ ...clientOptions }).then(response => response.data) });
export const ensureUseTracksListData = (queryClient: QueryClient, clientOptions: Options<unknown, true> = {}) => queryClient.ensureQueryData({ queryKey: Common.UseTracksListKeyFn(clientOptions), queryFn: () => tracksList({ ...clientOptions }).then(response => response.data) });
export const ensureUseTracksRetrieveData = (queryClient: QueryClient, clientOptions: Options<TracksRetrieveData, true>) => queryClient.ensureQueryData({ queryKey: Common.UseTracksRetrieveKeyFn(clientOptions), queryFn: () => tracksRetrieve({ ...clientOptions }).then(response => response.data) });
