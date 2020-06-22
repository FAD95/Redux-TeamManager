import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Players from './components/Players'
import SelectedTeam from './components/SelectedTeam'
import {GlobalStyle} from './styles'


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <main className="App">
        <h1>Team Manager</h1>
        <Players/>
        <SelectedTeam />
      </main>
    </Provider>
  )
}

export default App
