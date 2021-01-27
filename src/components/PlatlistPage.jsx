import { useEffect, useState } from 'react';
import queryString from 'query-string';

import { getPlaylistMusic, deleteSong } from '../lib/spotifyApi';
import '../CSS/table.css';
import MaterialTable from 'material-table';

const PlatlistPage = () => {
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
      { field: 'id', title: 'ID' },
      { field: 'artists', title: 'Artists' },
      {
        field: 'album',
        title: 'Album',
      },
      {
        field: 'songName',
        title: 'Song name',
      },
    ];

    return (
      <div className='table'>
        <MaterialTable
          title='Editable Preview'
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

                  console.log();
                  console.log(data[index]);
                  console.log();

                  await deleteSong(data[index].songId, playlistId);

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
    return <h1>Loading...</h1>;
  }
};

export default PlatlistPage;
