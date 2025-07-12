  import { useEffect, useState } from "react";
  import back_arrow_icon from "../../assets/back_arrow_icon.png";
  import "./Player.css";
  import { useNavigate, useParams } from "react-router-dom";

  const Player = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
      name: "",
      key: "",
      published_at: "",
      typeof: "",
    });
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTYyMTU3ZTIwMzJiZWQzMjFkZjRmNDQyODk3MTA0YiIsIm5iZiI6MTc1MDUzOTUzNC4zNjIsInN1YiI6IjY4NTcxZDBlNzNmMmQ3OGE3OTdlNzlkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xiobfWnaiwo71Khsrdpdw7h0Yp_BUq_dlwu1Mazqz-0",
      },
    };

    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then((res) => res.json())
        .then((res) => setApiData(res.results[0])) //from the first object
        .catch((err) => console.error(err));
    });

    return (
      <div className="player">
        <img
          src={back_arrow_icon}
          alt=""
          onClick={() => {
            navigate(-2);
          }}
        />
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameborder="0"
          width="90%"
          height="90%"
          title="trailer"
          allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    );
  };

  export default Player;
