const GET_PERSONS = "GET_PERSONS";
const PERSONS_URL = "/persons";

const initialState = [];

export const getPersonsAction = (payload) => ({
  type: GET_PERSONS,
  payload,
});

const logic = (state = initialState, action) => {
  switch (action.type) {
    case GET_PERSONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default logic;

export const getPersonsApi = () => async (dispatch) => {
  const response = await fetch(PERSONS_URL);
  const persons = await response.json();
  dispatch(getPersonsAction(persons));
};
