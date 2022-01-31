export default (state, action) => {
  switch (action.type) {
    case "GET_COLLAB":
      return {
        ...state,
        loading: false,
        collabs: action.payload,
      };
    case "COLLAB_REGISTER":
      return {
        ...state,
        collabs: [...state.collabs, action.payload],
      };
    case "SESSION_LOGIN":
      return {
        ...state,
        login: action.payload,
      };
  }
};
