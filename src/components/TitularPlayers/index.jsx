import React from 'react'
import { connect } from 'react-redux'
import { TitularsSection } from './styles'
import field from '../../assets/field.svg'

const index = ({ titularPlayers, removePlayer }) => (
  <TitularsSection>
    <h2>Titular Players</h2>
    <div className="field">
      {titularPlayers.map((player) => (
        <article key={player.id} className="titular">
          <div>
            <img src={player.pic} alt={player.name} />
            <button onClick={() => removePlayer(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))}
      <img src={field} alt="Soccer field" />
    </div>
  </TitularsSection>
)
const mapStateToProps = (state) => ({
  titularPlayers: state.titularPlayers,
})

const mapDispatchToProps = (dispatch) => ({
  removePlayer(player) {
    dispatch({
      type: 'REMOVE_TITULAR_PLAYER',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
