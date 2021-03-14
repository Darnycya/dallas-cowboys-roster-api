import React, { useState, useEffect } from 'react'
import { getPlayer, deletePlayer } from '../../services/players'
import { useParams, Link } from 'react-router-dom'

const PlayerDetail = (props) => {

    const [player, setPlayer] = useState(null)
    const [isLoaded, setLoaded] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const fetchPlayer = async () => {
            const player = await getPlayer(id)
            setPlayer(player)
            setLoaded(true)
        }
        fetchplayer()
    }, [id])

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    return (
        <Layout>
            <div className="player-detail">
                <img className="player-detail-image" src={player.image} alt={player.name} />
                <div className="detail">
                    <div className="name">{player.name}</div>
                    <div className="position">{player.position}</div>
                    <div className="jerseyNumber">{player.jerseyNumber}</div>
                    <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/players/${player._id}/edit`}>Edit</Link></button>
                        <button className="delete-button" onClick={() => deletePlayer(player._id)}>Delete</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PlayerDetail