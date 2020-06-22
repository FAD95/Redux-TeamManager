import React from 'react'
import { connect } from 'react-redux'
import { AlternatesSection } from './styles'

const index = ({ alternates, removePlayer }) => (
  <AlternatesSection>
    <h2>Alternates</h2>
    <div className="alternates">
      {alternates.map((player) => (
        <article key={player.id} className="alternate">
          <div>
            <img src={player.pic} alt={player.name} />
            <button onClick={() =>removePlayer(player)}>X</button>
          </div>
          <p>{player.name}</p>
        </article>
      ))}
    </div>
  </AlternatesSection>
)
const mapStateToProps = (state) => ({
  alternates: state.alternates,
})

const mapDispatchToProps = (dispatch) => ({
  removePlayer(player) {
    dispatch({
      type: 'REMOVE_ALTERNATE_PLAYER',
      player,
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(index)