export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function SetAuthedUser (id){
    return {
        type: SET_AUTHED_USER,
        id
    }

}

// export function handleLogOust(info) {
//     return (dispatch) => {
//       dispatch(SaveQuestionAnswer(info));
      
//     };
//   }