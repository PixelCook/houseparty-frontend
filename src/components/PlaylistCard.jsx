import React from 'react'
import { Card } from '@material-ui/core';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { startPartyUrl } from '../utils/config'

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

  const party = JSON.parse(localStorage.getItem('party'))


  const handleClick = async (e) => {
    console.log(e.target.value, startPartyUrl, party.partyId);
    try {
      const playlistAdded = await axios.post(`${startPartyUrl}/${party.partyId}`, e.target.value)
      alert(playlistAdded.data)
      window.location = `/playlist/id=${props.elData.id}`
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
