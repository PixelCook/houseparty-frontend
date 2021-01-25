import React from 'react'
import { Card } from '@material-ui/core';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { joinPartyUrl } from '../utils/config'

const PlaylistCard = (props) => {
  const showPlayListImage = () => {
    if (props.elData.images.length > 0) {
      return (
        <Box width={1 / 3}>
          <Image src={`${props.elData.images[0].url}`} disableSpinner />
        </Box>
      );
    }
  };

  const partyId = JSON.parse(localStorage.getItem('party'))


  const handleClick = async (e) => {
    try {
      const playlistAssigned = await axios.post(`${joinPartyUrl}/${partyId}`, e.target.value)
      alert(playlistAssigned.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Card onClick={() => (window.location = `/playlist/id=${props.elData.id}`)}>
        <h1>{props.elData.name}</h1>
        {props.elData.images.length > 0 && showPlayListImage()}
      </Card>
      <button value={props.elData.id} onClick={(e) => handleClick(e)}>Select this playlist</button>
    </>
  );
};

export default PlaylistCard;
