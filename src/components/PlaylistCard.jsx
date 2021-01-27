import React from 'react';
import { Card } from '@material-ui/core';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { startPartyUrl } from '../utils/config';

const PlaylistCard = (props) => {
  const selectPath = window.location.pathname.includes(
    '/start-party/select/id=:'
  );

  const showPlayListImage = () => {
    if (props.elData.images.length > 0) {
      return (
        <Box width={1 / 3}>
          <Image src={`${props.elData.images[0].url}`} disableSpinner />
        </Box>
      );
    }
  };

  const selectButton = () => {
    return (
      <button value={props.elData.id} onClick={(e) => handleClick(e)}>
        Select this playlist
      </button>
    );
  };

  const handleClick = async (e) => {
    const party = JSON.parse(localStorage.getItem('party'));
    try {
      await axios({
        method: 'post',
        url: `${startPartyUrl}/${party.partyId}`,
        data: {
          playlistId: e.target.value,
        },
        headers: {
          authorization: localStorage.getItem('token'),
        },
      }).then((response) => {
        localStorage.setItem(
          'party',
          JSON.stringify(response.data.updatedeParty)
        );

        window.location = `/playlist/id=${props.elData.id}`;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Card
        onClick={() => (window.location = `/playlist/id=${props.elData.id}`)}
      >
        <h1>{props.elData.name}</h1>
        {props.elData.images.length > 0 && showPlayListImage()}
      </Card>
      {selectPath && selectButton()}
    </>
  );
};

export default PlaylistCard;
