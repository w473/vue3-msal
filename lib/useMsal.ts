import {inject} from "vue";
import {UnwrapNestedRefs} from "@vue/reactivity";
import {DataObject, MSALBasic} from "./src/types";

export default function (): MSALBasic & { msalData: UnwrapNestedRefs<DataObject> } {
  const msal = <MSALBasic>inject ('msal');
  const msalData = <UnwrapNestedRefs<DataObject>>inject ('msalref');

  return {
    ...msal,
    msalData
  }
}
