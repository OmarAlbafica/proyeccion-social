import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "../actions/types";

export default function(state = {}, action) {
  let settings = "";
  switch (action.type) {
    case DISABLE_BALANCE_ON_ADD:
      settings = JSON.parse(localStorage.getItem("settings"));
      settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;
      localStorage.setItem("settings", JSON.stringify(settings));
      return {
        ...state,
        disableBalanceOnAdd: !state.disableBalanceOnAdd
      };
    case DISABLE_BALANCE_ON_EDIT:
      settings = JSON.parse(localStorage.getItem("settings"));
      settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;
      localStorage.setItem("settings", JSON.stringify(settings));
      return {
        ...state,
        disableBalanceOnEdit: !state.disableBalanceOnEdit
      };

    case ALLOW_REGISTRATION:
      settings = JSON.parse(localStorage.getItem("settings"));
      settings.allowRegistration = !settings.allowRegistration;
      localStorage.setItem("settings", JSON.stringify(settings));
      return {
        ...state,
        allowRegistration: !state.allowRegistration
      };

    default:
      return state;
  }
}
