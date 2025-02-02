import React, { useState, useEffect } from "react";
import { getPlayer, deletePlayer } from "../../services/players";
import { useParams, Link } from "react-router-dom";
import "./PlayerDetail.css";

export default function PlayerDetail(props) {
  const [player, setPlayer] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getPlayer(id);
      setPlayer(player);
      setLoaded(true);
    };
    fetchPlayer();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="player-detail">
        <img
          className="player-detail-image"
          src={player.image}
          alt={player.name}
        />
        <div className="detail">
          <div className="button-container">
            <button className="edit-button">
              <Link className="edit-link" to={`/players/${player._id}/edit`}>
                Edit
              </Link>
            </button>

            <button
              className="delete-button"
              onClick={() => deletePlayer(player._id)}
            >
              <Link className="delete-link" to={`/players`}>
                Delete
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
