import ACTIONS from "./ACTIONS";
export default function SignInReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.HANDLE_CHANGE:
      const { field, value } = payload;
      const LIMIT = field === "username" ? 16 : 32;
      return { ...state, [field]: `${value}`.substr(0, LIMIT) };
    default:
      return state;
  }
}
