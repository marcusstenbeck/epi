// generated with @7nohe/openapi-react-query-codegen@2.0.0-beta.2 

import { Options } from "@hey-api/client-fetch";
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { playlistsCreate, playlistsDestroy, playlistsList, playlistsPartialUpdate, playlistsRetrieve, playlistsUpdate, schemaRetrieve, tracksCreate, tracksDestroy, tracksList, tracksPartialUpdate, tracksRetrieve, tracksUpdate } from "../requests/services.gen";
import { PlaylistsCreateData, PlaylistsCreateError, PlaylistsDestroyData, PlaylistsDestroyError, PlaylistsListError, PlaylistsPartialUpdateData, PlaylistsPartialUpdateError, PlaylistsRetrieveData, PlaylistsRetrieveError, PlaylistsUpdateData, PlaylistsUpdateError, SchemaRetrieveData, SchemaRetrieveError, TracksCreateData, TracksCreateError, TracksDestroyData, TracksDestroyError, TracksListError, TracksPartialUpdateData, TracksPartialUpdateError, TracksRetrieveData, TracksRetrieveError, TracksUpdateData, TracksUpdateError } from "../requests/types.gen";
import * as Common from "./common";
export const usePlaylistsList = <TData = Common.PlaylistsListDefaultResponse, TError = PlaylistsListError, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<unknown, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlaylistsListKeyFn(clientOptions, queryKey), queryFn: () => playlistsList({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
export const usePlaylistsRetrieve = <TData = Common.PlaylistsRetrieveDefaultResponse, TError = PlaylistsRetrieveError, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<PlaylistsRetrieveData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UsePlaylistsRetrieveKeyFn(clientOptions, queryKey), queryFn: () => playlistsRetrieve({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
export const useSchemaRetrieve = <TData = Common.SchemaRetrieveDefaultResponse, TError = SchemaRetrieveError, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<SchemaRetrieveData, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseSchemaRetrieveKeyFn(clientOptions, queryKey), queryFn: () => schemaRetrieve({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
export const useTracksList = <TData = Common.TracksListDefaultResponse, TError = TracksListError, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<unknown, true> = {}, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTracksListKeyFn(clientOptions, queryKey), queryFn: () => tracksList({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
export const useTracksRetrieve = <TData = Common.TracksRetrieveDefaultResponse, TError = TracksRetrieveError, TQueryKey extends Array<unknown> = unknown[]>(clientOptions: Options<TracksRetrieveData, true>, queryKey?: TQueryKey, options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">) => useQuery<TData, TError>({ queryKey: Common.UseTracksRetrieveKeyFn(clientOptions, queryKey), queryFn: () => tracksRetrieve({ ...clientOptions }).then(response => response.data as TData) as TData, ...options });
export const usePlaylistsCreate = <TData = Common.PlaylistsCreateMutationResult, TError = PlaylistsCreateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PlaylistsCreateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PlaylistsCreateData, true>, TContext>({ mutationKey: Common.UsePlaylistsCreateKeyFn(mutationKey), mutationFn: clientOptions => playlistsCreate(clientOptions) as unknown as Promise<TData>, ...options });
export const useTracksCreate = <TData = Common.TracksCreateMutationResult, TError = TracksCreateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<TracksCreateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<TracksCreateData, true>, TContext>({ mutationKey: Common.UseTracksCreateKeyFn(mutationKey), mutationFn: clientOptions => tracksCreate(clientOptions) as unknown as Promise<TData>, ...options });
export const usePlaylistsUpdate = <TData = Common.PlaylistsUpdateMutationResult, TError = PlaylistsUpdateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PlaylistsUpdateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PlaylistsUpdateData, true>, TContext>({ mutationKey: Common.UsePlaylistsUpdateKeyFn(mutationKey), mutationFn: clientOptions => playlistsUpdate(clientOptions) as unknown as Promise<TData>, ...options });
export const useTracksUpdate = <TData = Common.TracksUpdateMutationResult, TError = TracksUpdateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<TracksUpdateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<TracksUpdateData, true>, TContext>({ mutationKey: Common.UseTracksUpdateKeyFn(mutationKey), mutationFn: clientOptions => tracksUpdate(clientOptions) as unknown as Promise<TData>, ...options });
export const usePlaylistsPartialUpdate = <TData = Common.PlaylistsPartialUpdateMutationResult, TError = PlaylistsPartialUpdateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PlaylistsPartialUpdateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PlaylistsPartialUpdateData, true>, TContext>({ mutationKey: Common.UsePlaylistsPartialUpdateKeyFn(mutationKey), mutationFn: clientOptions => playlistsPartialUpdate(clientOptions) as unknown as Promise<TData>, ...options });
export const useTracksPartialUpdate = <TData = Common.TracksPartialUpdateMutationResult, TError = TracksPartialUpdateError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<TracksPartialUpdateData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<TracksPartialUpdateData, true>, TContext>({ mutationKey: Common.UseTracksPartialUpdateKeyFn(mutationKey), mutationFn: clientOptions => tracksPartialUpdate(clientOptions) as unknown as Promise<TData>, ...options });
export const usePlaylistsDestroy = <TData = Common.PlaylistsDestroyMutationResult, TError = PlaylistsDestroyError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<PlaylistsDestroyData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<PlaylistsDestroyData, true>, TContext>({ mutationKey: Common.UsePlaylistsDestroyKeyFn(mutationKey), mutationFn: clientOptions => playlistsDestroy(clientOptions) as unknown as Promise<TData>, ...options });
export const useTracksDestroy = <TData = Common.TracksDestroyMutationResult, TError = TracksDestroyError, TQueryKey extends Array<unknown> = unknown[], TContext = unknown>(mutationKey?: TQueryKey, options?: Omit<UseMutationOptions<TData, TError, Options<TracksDestroyData, true>, TContext>, "mutationKey" | "mutationFn">) => useMutation<TData, TError, Options<TracksDestroyData, true>, TContext>({ mutationKey: Common.UseTracksDestroyKeyFn(mutationKey), mutationFn: clientOptions => tracksDestroy(clientOptions) as unknown as Promise<TData>, ...options });
