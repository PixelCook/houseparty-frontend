import { useEffect, useState } from "react";
import queryString from "query-string";

import { getPlaylistMusic, deleteSong } from "../lib/spotifyApi";
import "../CSS/table.css";
import MaterialTable from "material-table";

const PlatlistPage = () => {
  const party = JSON.parse(localStorage.getItem("party"));
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsedHash = queryString.parse(window.location.pathname);
    console.log(parsedHash);

    getPlaylistMusic(Object.values(parsedHash)[0]).then((response) => {
      const musicList = response.data.items;

      musicList.forEach((song, index) => {
        const addData = {
          id: index + 1,
          artists: song.track.artists[0].name,
          album: song.track.album.name,
          songName: song.track.name,
          songId: song.track.id,
        };

        setData((data) => [...data, addData]);
      });

      setLoading(false);
    });
  }, []);

  const createTable = () => {
    const columns = [
      { field: "id", title: "ID" },
      {
        field: "songName",
        title: "Song",
      },
      { field: "artists", title: "Artist" },
      {
        field: "album",
        title: "Album",
      },
    ];

    return (
      <div className="table">
        <p style={{ color: "white" }}>Party Id: {party.partyId}</p>
        <iframe
          title="player"
          src={`https://open.spotify.com/embed/playlist/${party.playlistId}`}
          width="300"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <MaterialTable
          title={``}
          columns={columns}
          data={data}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(async () => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  const playlistId = Object.values(
                    queryString.parse(window.location.pathname)
                  )[0];
                  await deleteSong(playlistId, data[index].songId);
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    );
  };

  if (!loading) {
    return createTable();
  } else {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }
};

export default PlatlistPage;
