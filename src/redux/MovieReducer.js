export const ADD_TO_LIKED = 'ADD_TO_LIKED'
export const ADD_TO_SAVED = 'ADD_TO_SAVED'
export const REMOVE_LIKED_MOVIE = 'REMOVE_LIKED_MOVIE'
export const REMOVE_SAVED_MOVIE = 'REMOVE_SAVED_MOVIE'

const initialState = {
  movies: [],
  liked: [],
  saved: []
}

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      if (!state.liked.includes(action.payload)) {
        return {
          ...state,
          liked: [...state.liked, action.payload]
        }
      }
      else return { ...state }
    case ADD_TO_SAVED:
      if (!state.saved.includes(action.payload)) {
        return {
          ...state,
          saved: [...state.saved, action.payload]
        }
      }
      else return { ...state }
    case REMOVE_LIKED_MOVIE:
      const removeLike = state.liked.filter(item => item.id !== action.payload.id)    
      return {
        ...state, liked: removeLike
      }
    case REMOVE_SAVED_MOVIE:
      const removeSave = state.saved.filter(item => item.id !== action.payload.id) 
      return{
        ...state, saved: removeSave
      }
    default:
      return {...state}
  }
}

export default MovieReducer

// case REMOVE_TO_SAVE:
//       console.log('remove from Save is working');
//       const removeSave = state.saveVideo.find(
//         item => item._id === action.payload._id,
//       );
//       console.log(removeSave);
//       if (removeSave) {
//         const data = state.saveVideo.filter(
//           movie => movie._id !== action.payload._id,
//         );
//         return {
//           ...state,
//           saveVideo: data,
//         };
//       }