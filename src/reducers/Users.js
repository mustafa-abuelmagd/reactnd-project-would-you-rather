import {
  RECEIVE_USERS,
  ADD_USER_ANSWER,
  ADD_USER_QUESTION,
} from "../actions/users";
// import authedUser from "./AuthedUser";
// import {ADD_QUESTION} from '../actions/questions'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
            ...state[action.authedUser],
            answers:{
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
            }
        }
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]:{
            ...state[action.author],
            questions: state[action.author].questions.concat(action.id)
        }
      };

    default:
      return state;
  }
}
