import { useEffect, useState } from "react";
import queryString from "query-string";
import { DataGrid } from "@material-ui/data-grid";

import { getPlaylistMusic } from "../lib/spotifyApi";
import "../CSS/table.css";

const PlatlistPage = () => {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsedHash = queryString.parse(window.location.pathname);

    getPlaylistMusic(Object.values(parsedHash)[0]).then((response) => {
      setMusicList(response.data.items);
      setLoading(false);
    });
  }, []);

  const createTable = () => {
    const columns = [
      { field: "id", headerName: "ID", width: 70, align: "center" },
      {
        field: "songName",
        headerName: "Song name",
        width: 287,
      },
      { field: "artists", headerName: "Artists", width: 287, align: "center" },
      {
        field: "album",
        headerName: "Album",
        width: 287,
      },
    ];

    const rows = [];

    musicList.forEach((song, index) => {
      rows.push({
        id: index + 1,
        songName: song.track.name,
        artists: song.track.artists[0].name,
        album: song.track.album.name,
      });
    });

    return (
      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          checkboxSelection
        />
      </div>
    );
  };

  if (!loading) {
    return createTable();
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PlatlistPage;
