/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type UpdateUserMutation_user$ref = any;
type UserSubscription_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserContainer_user$ref: FragmentReference;
export type UserContainer_user = {|
  +id: string,
  +name: ?string,
  +$fragmentRefs: UpdateUserMutation_user$ref & UserSubscription_user$ref,
  +$refType: UserContainer_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "UserContainer_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "UpdateUserMutation_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "UserSubscription_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '493bad9da3958a19896417b0db280012';
module.exports = node;
