import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
export type CardFragment = { __typename?: 'Character', id?: string | null, name?: string | null, image?: string | null };

export const CardFragmentDoc = gql`
    fragment Card on Character {
  id
  name
  image
}
    `;