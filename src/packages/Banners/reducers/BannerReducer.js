const BannerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state.all, action.banner];
    case 'SET_FIELD':
      return {
        ...state,
        current_page: {
          ...state.current_page,
          [action.current_page.field]: action.current_page.value,
        },
      };
    case 'INIT':
      return action.default;
    case 'DELETE':
      return state;
    default:
      return state;
  }
};

export { BannerReducer };
