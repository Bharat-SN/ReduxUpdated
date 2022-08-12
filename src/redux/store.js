import { createStore } from 'redux'
import LikedMovieReducer from './MovieReducer'

const store = createStore(LikedMovieReducer)

export default store