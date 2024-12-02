import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  _FieldSet: { input: any; output: any };
};

export type Album = {
  __typename?: "Album";
  albumType?: Maybe<Scalars["String"]["output"]>;
  artists?: Maybe<Array<Artist>>;
  genres?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  id: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  popularity?: Maybe<Scalars["Int"]["output"]>;
  releaseDate?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  totalTracks?: Maybe<Scalars["Int"]["output"]>;
  tracks?: Maybe<Array<Track>>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type Artist = {
  __typename?: "Artist";
  bio?: Maybe<Scalars["String"]["output"]>;
  genres?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  id: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  popularity?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ArtistInput = {
  bio?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = "DEADLINE_EXCEEDED",
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = "ENHANCE_YOUR_CALM",
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = "FIELD_NOT_FOUND",
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = "INVALID_ARGUMENT",
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = "INVALID_CURSOR",
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = "MISSING_RESOURCE",
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = "SERVICE_ERROR",
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = "TCP_FAILURE",
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = "THROTTLED_CONCURRENCY",
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = "THROTTLED_CPU",
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = "UNIMPLEMENTED",
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = "UNKNOWN",
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = "BAD_REQUEST",
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = "FAILED_PRECONDITION",
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = "INTERNAL",
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = "NOT_FOUND",
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = "PERMISSION_DENIED",
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = "UNAUTHENTICATED",
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = "UNAVAILABLE",
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = "UNKNOWN",
}

export type Genre = {
  __typename?: "Genre";
  name: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createArtist?: Maybe<Artist>;
  deleteArtist?: Maybe<Scalars["String"]["output"]>;
  updateArtist?: Maybe<Artist>;
};

export type MutationCreateArtistArgs = {
  artist?: InputMaybe<ArtistInput>;
};

export type MutationDeleteArtistArgs = {
  id: Scalars["String"]["input"];
};

export type MutationUpdateArtistArgs = {
  artist?: InputMaybe<ArtistInput>;
  id: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  _service: _Service;
  album?: Maybe<Album>;
  albums?: Maybe<Array<Maybe<Album>>>;
  artist?: Maybe<Artist>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  genres: Array<Genre>;
  getAlbumsByArtistId?: Maybe<Array<Maybe<Album>>>;
  getTracksByArtistId?: Maybe<Array<Maybe<Track>>>;
  track?: Maybe<Track>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type QueryAlbumArgs = {
  id: Scalars["String"]["input"];
};

export type QueryAlbumsArgs = {
  pageNo?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryArtistArgs = {
  id: Scalars["String"]["input"];
};

export type QueryArtistsArgs = {
  pageNo?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetAlbumsByArtistIdArgs = {
  artistId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGetTracksByArtistIdArgs = {
  artistId?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTrackArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryTracksArgs = {
  pageNo?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Track = {
  __typename?: "Track";
  albums?: Maybe<Array<Album>>;
  artists?: Maybe<Array<Artist>>;
  audioUrl?: Maybe<Scalars["String"]["output"]>;
  durationMs?: Maybe<Scalars["Int"]["output"]>;
  explicit?: Maybe<Scalars["Boolean"]["output"]>;
  genres?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  id: Scalars["String"]["output"];
  lyrics?: Maybe<Scalars["String"]["output"]>;
  popularity?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type _Service = {
  __typename?: "_Service";
  sdl: Scalars["String"]["output"];
};

export type GetSeveralAlbumQueryVariables = Exact<{
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  pageNo?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type GetSeveralAlbumQuery = {
  __typename?: "Query";
  albums?: Array<{
    __typename?: "Album";
    id: string;
    title: string;
    image?: string | null;
    artists?: Array<{ __typename?: "Artist"; id: string; name: string }> | null;
  } | null> | null;
};

export type GetAlbumByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetAlbumByIdQuery = {
  __typename?: "Query";
  album?: {
    __typename?: "Album";
    id: string;
    title: string;
    image?: string | null;
    totalTracks?: number | null;
    type?: string | null;
    releaseDate?: string | null;
    label?: string | null;
    albumType?: string | null;
    artists?: Array<{ __typename?: "Artist"; id: string; name: string }> | null;
    tracks?: Array<{
      __typename?: "Track";
      id: string;
      title: string;
      durationMs?: number | null;
      audioUrl?: string | null;
      artists?: Array<{ __typename?: "Artist"; id: string; name: string }> | null;
    }> | null;
  } | null;
};

export type GetSeveralArtistsQueryQueryVariables = Exact<{
  pageSize: Scalars["Int"]["input"];
  pageNo: Scalars["Int"]["input"];
}>;

export type GetSeveralArtistsQueryQuery = {
  __typename?: "Query";
  artists?: Array<{
    __typename?: "Artist";
    id: string;
    name: string;
    image?: string | null;
  } | null> | null;
};

export type GetArtistDetailsQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetArtistDetailsQuery = {
  __typename?: "Query";
  artist?: {
    __typename?: "Artist";
    id: string;
    name: string;
    image?: string | null;
    bio?: string | null;
  } | null;
};

export type GenresQueryVariables = Exact<{ [key: string]: never }>;

export type GenresQuery = {
  __typename?: "Query";
  genres: Array<{ __typename?: "Genre"; name: string }>;
};

export type GetTrackDetailQueryVariables = Exact<{
  trackId: Scalars["String"]["input"];
  albumId: Scalars["String"]["input"];
}>;

export type GetTrackDetailQuery = {
  __typename?: "Query";
  track?: {
    __typename?: "Track";
    id: string;
    title: string;
    durationMs?: number | null;
    explicit?: boolean | null;
    lyrics?: string | null;
    audioUrl?: string | null;
    artists?: Array<{ __typename?: "Artist"; id: string; name: string }> | null;
  } | null;
  album?: { __typename?: "Album"; image?: string | null; releaseDate?: string | null } | null;
};

export const GetSeveralAlbumDocument = gql`
  query GetSeveralAlbum($pageSize: Int = 10, $pageNo: Int = 1) {
    albums(pageSize: $pageSize, pageNo: $pageNo) {
      id
      title
      image
      artists {
        id
        name
      }
    }
  }
`;

/**
 * __useGetSeveralAlbumQuery__
 *
 * To run a query within a React component, call `useGetSeveralAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeveralAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeveralAlbumQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNo: // value for 'pageNo'
 *   },
 * });
 */
export function useGetSeveralAlbumQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>(
    GetSeveralAlbumDocument,
    options,
  );
}
export function useGetSeveralAlbumLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>(
    GetSeveralAlbumDocument,
    options,
  );
}
export function useGetSeveralAlbumSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetSeveralAlbumQuery, GetSeveralAlbumQueryVariables>(
    GetSeveralAlbumDocument,
    options,
  );
}
export type GetSeveralAlbumQueryHookResult = ReturnType<typeof useGetSeveralAlbumQuery>;
export type GetSeveralAlbumLazyQueryHookResult = ReturnType<typeof useGetSeveralAlbumLazyQuery>;
export type GetSeveralAlbumSuspenseQueryHookResult = ReturnType<
  typeof useGetSeveralAlbumSuspenseQuery
>;
export type GetSeveralAlbumQueryResult = Apollo.QueryResult<
  GetSeveralAlbumQuery,
  GetSeveralAlbumQueryVariables
>;
export const GetAlbumByIdDocument = gql`
  query GetAlbumById($id: String!) {
    album(id: $id) {
      id
      title
      image
      totalTracks
      type
      releaseDate
      label
      albumType
      artists {
        id
        name
      }
      tracks {
        id
        title
        durationMs
        audioUrl
        artists {
          id
          name
        }
      }
    }
  }
`;

/**
 * __useGetAlbumByIdQuery__
 *
 * To run a query within a React component, call `useGetAlbumByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAlbumByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAlbumByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAlbumByIdQuery(
  baseOptions: Apollo.QueryHookOptions<GetAlbumByIdQuery, GetAlbumByIdQueryVariables> &
    ({ variables: GetAlbumByIdQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAlbumByIdQuery, GetAlbumByIdQueryVariables>(
    GetAlbumByIdDocument,
    options,
  );
}
export function useGetAlbumByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAlbumByIdQuery, GetAlbumByIdQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAlbumByIdQuery, GetAlbumByIdQueryVariables>(
    GetAlbumByIdDocument,
    options,
  );
}
export function useGetAlbumByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetAlbumByIdQuery, GetAlbumByIdQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAlbumByIdQuery, GetAlbumByIdQueryVariables>(
    GetAlbumByIdDocument,
    options,
  );
}
export type GetAlbumByIdQueryHookResult = ReturnType<typeof useGetAlbumByIdQuery>;
export type GetAlbumByIdLazyQueryHookResult = ReturnType<typeof useGetAlbumByIdLazyQuery>;
export type GetAlbumByIdSuspenseQueryHookResult = ReturnType<typeof useGetAlbumByIdSuspenseQuery>;
export type GetAlbumByIdQueryResult = Apollo.QueryResult<
  GetAlbumByIdQuery,
  GetAlbumByIdQueryVariables
>;
export const GetSeveralArtistsQueryDocument = gql`
  query GetSeveralArtistsQuery($pageSize: Int!, $pageNo: Int!) {
    artists(pageSize: $pageSize, pageNo: $pageNo) {
      id
      name
      image
    }
  }
`;

/**
 * __useGetSeveralArtistsQueryQuery__
 *
 * To run a query within a React component, call `useGetSeveralArtistsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSeveralArtistsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSeveralArtistsQueryQuery({
 *   variables: {
 *      pageSize: // value for 'pageSize'
 *      pageNo: // value for 'pageNo'
 *   },
 * });
 */
export function useGetSeveralArtistsQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSeveralArtistsQueryQuery,
    GetSeveralArtistsQueryQueryVariables
  > &
    ({ variables: GetSeveralArtistsQueryQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSeveralArtistsQueryQuery, GetSeveralArtistsQueryQueryVariables>(
    GetSeveralArtistsQueryDocument,
    options,
  );
}
export function useGetSeveralArtistsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSeveralArtistsQueryQuery,
    GetSeveralArtistsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSeveralArtistsQueryQuery, GetSeveralArtistsQueryQueryVariables>(
    GetSeveralArtistsQueryDocument,
    options,
  );
}
export function useGetSeveralArtistsQuerySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSeveralArtistsQueryQuery,
        GetSeveralArtistsQueryQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetSeveralArtistsQueryQuery, GetSeveralArtistsQueryQueryVariables>(
    GetSeveralArtistsQueryDocument,
    options,
  );
}
export type GetSeveralArtistsQueryQueryHookResult = ReturnType<
  typeof useGetSeveralArtistsQueryQuery
>;
export type GetSeveralArtistsQueryLazyQueryHookResult = ReturnType<
  typeof useGetSeveralArtistsQueryLazyQuery
>;
export type GetSeveralArtistsQuerySuspenseQueryHookResult = ReturnType<
  typeof useGetSeveralArtistsQuerySuspenseQuery
>;
export type GetSeveralArtistsQueryQueryResult = Apollo.QueryResult<
  GetSeveralArtistsQueryQuery,
  GetSeveralArtistsQueryQueryVariables
>;
export const GetArtistDetailsDocument = gql`
  query GetArtistDetails($id: String!) {
    artist(id: $id) {
      id
      name
      image
      bio
    }
  }
`;

/**
 * __useGetArtistDetailsQuery__
 *
 * To run a query within a React component, call `useGetArtistDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArtistDetailsQuery(
  baseOptions: Apollo.QueryHookOptions<GetArtistDetailsQuery, GetArtistDetailsQueryVariables> &
    ({ variables: GetArtistDetailsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>(
    GetArtistDetailsDocument,
    options,
  );
}
export function useGetArtistDetailsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>(
    GetArtistDetailsDocument,
    options,
  );
}
export function useGetArtistDetailsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetArtistDetailsQuery, GetArtistDetailsQueryVariables>(
    GetArtistDetailsDocument,
    options,
  );
}
export type GetArtistDetailsQueryHookResult = ReturnType<typeof useGetArtistDetailsQuery>;
export type GetArtistDetailsLazyQueryHookResult = ReturnType<typeof useGetArtistDetailsLazyQuery>;
export type GetArtistDetailsSuspenseQueryHookResult = ReturnType<
  typeof useGetArtistDetailsSuspenseQuery
>;
export type GetArtistDetailsQueryResult = Apollo.QueryResult<
  GetArtistDetailsQuery,
  GetArtistDetailsQueryVariables
>;
export const GenresDocument = gql`
  query Genres {
    genres {
      name
    }
  }
`;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenresQuery(
  baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
}
export function useGenresLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
}
export function useGenresSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GenresQuery, GenresQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
}
export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresSuspenseQueryHookResult = ReturnType<typeof useGenresSuspenseQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const GetTrackDetailDocument = gql`
  query getTrackDetail($trackId: String!, $albumId: String!) {
    track(id: $trackId) {
      id
      title
      durationMs
      explicit
      lyrics
      audioUrl
      artists {
        id
        name
      }
    }
    album(id: $albumId) {
      image
      releaseDate
    }
  }
`;

/**
 * __useGetTrackDetailQuery__
 *
 * To run a query within a React component, call `useGetTrackDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTrackDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTrackDetailQuery({
 *   variables: {
 *      trackId: // value for 'trackId'
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useGetTrackDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetTrackDetailQuery, GetTrackDetailQueryVariables> &
    ({ variables: GetTrackDetailQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTrackDetailQuery, GetTrackDetailQueryVariables>(
    GetTrackDetailDocument,
    options,
  );
}
export function useGetTrackDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTrackDetailQuery, GetTrackDetailQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTrackDetailQuery, GetTrackDetailQueryVariables>(
    GetTrackDetailDocument,
    options,
  );
}
export function useGetTrackDetailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTrackDetailQuery, GetTrackDetailQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTrackDetailQuery, GetTrackDetailQueryVariables>(
    GetTrackDetailDocument,
    options,
  );
}
export type GetTrackDetailQueryHookResult = ReturnType<typeof useGetTrackDetailQuery>;
export type GetTrackDetailLazyQueryHookResult = ReturnType<typeof useGetTrackDetailLazyQuery>;
export type GetTrackDetailSuspenseQueryHookResult = ReturnType<
  typeof useGetTrackDetailSuspenseQuery
>;
export type GetTrackDetailQueryResult = Apollo.QueryResult<
  GetTrackDetailQuery,
  GetTrackDetailQueryVariables
>;
