import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { DataGrid } from '@material-ui/data-grid';

import { getPlaylistMusic } from '../lib/spotifyApi';
import MusicCard from './MusicCard';

const PlatlistPage = () => {
  const [musicList, setMusicList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsedHash = queryString.parse(window.location.pathname);

    getPlaylistMusic(Object.values(parsedHash)[0]).then((response) => {
      console.log(response.data.items);
      setMusicList(response.data.items);
      setLoading(false);
    });
  }, []);

  const createTable = () => {
    const columns = [
      { field: 'artists', headerName: 'Artists', width: 130 },
      { field: 'album', headerName: 'Album', width: 130 },
      { field: 'songName', headerName: 'Song name', width: 130 },
    ];

    const rows = [];

    musicList.forEach((song) => {
      // { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      rows.push({
        artists: song.track.artists[0].name,
        album: song.track.album.name,
        songName: song.track.name,
      });
    });

    console.log(rows);

    // return (
    //   <div style={{ height: 400, width: '100%' }}>
    //     <DataGrid
    //       rows={rows}
    //       columns={columns}
    //       pageSize={5}
    //       checkboxSelection
    //     />
    //   </div>
    // );

    return <h1>dsadsasd</h1>;
  };

  //   const mapMusicList = (data) => {
  //     return createTable();
  //   };

  if (!loading) {
    return createTable();
  } else {
    return <h1>Loading...</h1>;
  }
};

export default PlatlistPage;
