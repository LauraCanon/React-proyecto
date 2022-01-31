export default (state, action) => {
  switch (action.type) {
    case 'GET_COLLAB':
      return {
        ...state,
        loading: false,
        collabs: action.payload,
      };
  }
};
