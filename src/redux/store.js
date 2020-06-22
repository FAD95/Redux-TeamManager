import { createStore } from 'redux'

const initialState = {
  players: [
    {
      id: 1,
      name: 'James Rodriguez',
      pic:
        'https://tmssl.akamaized.net/images/portrait/originals/88103-1540568385.jpg',
    },
    {
      id: 2,
      name: 'Lionel Messi',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg',
    },
    {
      id: 3,
      name: 'Cristiano Ronaldo',
      pic:
        'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
    },
    {
      id: 4,
      name: 'Radamel Falcao García',
      pic: 'https://futbolete.com/wp-content/uploads/2020/01/falcao-2.jpg',
    },
  ],
  titularPlayers: [],
  alternates: [],
}

const reducerTrainer = (state = initialState, action) => {
  if (action.type === 'ADD_PLAYER') {
    return {
      ...state,
      titularPlayers: state.titularPlayers.concat(action.player),
      players: state.players.filter((player) => player.id !== action.player.id),
    }
  }
  if (action.type === 'ADD_ALTERNATE') {
    return {
      ...state,
      alternates: state.alternates.concat(action.player),
      players: state.players.filter((player) => player.id !== action.player.id),
    }
  }
  if (action.type === 'REMOVE_TITULAR_PLAYER') {
    return {
      ...state,
      titularPlayers: state.titularPlayers.filter(
        (player) => player.id !== action.player.id
      ),
      players: state.players.concat(action.player),
    }
  }
  if (action.type === 'REMOVE_ALTERNATE_PLAYER') {
    return {
      ...state,
      alternates: state.alternates.filter(
        (player) => player.id !== action.player.id
      ),
      players: state.players.concat(action.player),
    }
  }

  return state
}

export default createStore(reducerTrainer)
