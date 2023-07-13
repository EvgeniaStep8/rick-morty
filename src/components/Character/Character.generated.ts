import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetCharacterByIdQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type GetCharacterByIdQuery = { __typename?: 'Query', character?: { __typename?: 'Character', name?: string | null, image?: string | null, gender?: string | null, species?: string | null, status?: string | null, location?: { __typename?: 'Location', name?: string | null, type?: string | null, dimension?: string | null } | null, origin?: { __typename?: 'Location', name?: string | null, dimension?: string | null } | null } | null };


export const GetCharacterByIdDocument = gql`
    query getCharacterById($id: ID!) {
  character(id: $id) {
    name
    image
    gender
    location {
      name
      type
      dimension
    }
    species
    status
    origin {
      name
      dimension
    }
  }
}
    `;

/**
 * __useGetCharacterByIdQuery__
 *
 * To run a query within a React component, call `useGetCharacterByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharacterByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharacterByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCharacterByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, options);
      }
export function useGetCharacterByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>(GetCharacterByIdDocument, options);
        }
export type GetCharacterByIdQueryHookResult = ReturnType<typeof useGetCharacterByIdQuery>;
export type GetCharacterByIdLazyQueryHookResult = ReturnType<typeof useGetCharacterByIdLazyQuery>;
export type GetCharacterByIdQueryResult = Apollo.QueryResult<GetCharacterByIdQuery, GetCharacterByIdQueryVariables>;