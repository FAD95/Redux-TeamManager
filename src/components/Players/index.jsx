import React from 'react'
import { connect } from 'react-redux'
import { PlayersSection } from './styles'

const index = ({ players, addPlayer, addAlternate }) => (
  <PlayersSection>
    <h2>Players</h2>
    <div className="container-players">
      {players.map((player) => (
        <article key={player.id}>
          <img src={player.pic} alt={player.name} />
          <h3>{player.name}</h3>
          <div>
            <button onClick={() => addPlayer(player)}>Titular</button>
            <button onClick={() => addAlternate(player)}>Alternate</button>
          </div>
        </article>
      ))}
    </div>
  </PlayersSection>
)
const mapStateToProps = (state) => ({
  players: state.players,
})

const mapDispatchToProps = (dispatch) => ({
  addPlayer(player) {
    dispatch({
      type: 'ADD_PLAYER',
      player,
    })
  },
  addAlternate(player) {
    dispatch({
      type: 'ADD_ALTERNATE',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
