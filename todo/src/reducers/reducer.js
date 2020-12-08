import { ADD_ACTION, TOGGLE_ACTION, CLEAR_ACTION } from "../actions/index";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            item: action.payload,
            completed: false,
            id: new Date(),
          },
        ],
      };
    case TOGGLE_ACTION:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index == action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };
    case CLEAR_ACTION:
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return !item.completed;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
