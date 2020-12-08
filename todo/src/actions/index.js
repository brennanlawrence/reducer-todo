export const ADD_ACTION = "ADD";
export const TOGGLE_ACTION = "TOGGLE";
export const CLEAR_ACTION = "CLEAR";

export const addAction = (value) => {
  return { type: ADD_ACTION, payload: value };
};

export const toggleAction = (value) => {
  return { type: TOGGLE_ACTION, payload: value };
};

export const clearAction = () => {
  return { type: CLEAR_ACTION };
};
