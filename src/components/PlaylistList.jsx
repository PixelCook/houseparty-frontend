import { useEffect, useState } from "react";
// import jwt_decode from 'jwt-decode';
import { getProfilePlayList } from "../lib/spotifyApi";
import PlaylistCard from "./PlaylistCard";

const PlaylistList = () => {
  const [spotifyPlaylist, setSpotifyPlaylist] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getProfilePlayList().then((response) => {
      setSpotifyPlaylist(response.data.items);
      console.log(response);
      console.log(spotifyPlaylist);
      setLoader(false);
    });
  }, []);

  const mapPlaylist = (data) => {
    return (
      <>
        {data.map((el) => {
          return <PlaylistCard key={el.id} elData={el} />;
        })}
      </>
    );
  };

  if (!loader) {
    return mapPlaylist(spotifyPlaylist);
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PlaylistList;
