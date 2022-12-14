import React from 'react'
import MainStackNavigator from './src/navigation/StackNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  )
}