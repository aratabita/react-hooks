const events = (
  state = [],
  action: { type: any; title: any; body: any; id: any }
) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      // @ts-ignore
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      // @ts-ignore
      return state.filter((event) => event.id !== action.id);
    case 'DELETE_ALL_EVENT':
      return [];
    default:
      return state;
  }
};

export default events;
