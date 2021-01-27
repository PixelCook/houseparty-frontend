import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { startPartyUrl } from "../utils/config";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  title: {
    color: "green",
  },
}));

const PlaylistCard = (props) => {
  const classes = useStyles();
  const selectPath = window.location.pathname.includes(
    "/start-party/select/id=:"
  );

  const showPlayListImage = () => {
    if (props.elData.images.length > 0) {
      return props.elData.images[0].url;
    } else {
      return "https://www.scdn.co/i/_global/twitter_card-default.jpg";
    }
  };

  const selectButton = () => {
    return (
      <Button
        classname="select-button"
        variant="contained"
        value={props.elData.id}
        onClick={(e) => handleClick(e)}
      >
        Select this playlist
      </Button>
    );
  };

  const handleClick = async (e) => {
    const party = JSON.parse(localStorage.getItem("party"));

    try {
      await axios({
        method: "post",
        url: `${startPartyUrl}/${party.partyId}`,
        data: {
          playlistId: e.target.value,
        },
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }).then(async (response) => {
        localStorage.setItem(
          "party",
          JSON.stringify(response.data.updatedeParty)
        );

        const playlistIdToCol = JSON.parse(localStorage.getItem('party'))
          .playlistId;

        // await changePlaylistToCpllaborative(playlistIdToCol);

        window.location = `/playlist/id=${props.elData.id}`;
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (


    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={1}
          style={{ height: "auto" }}
        ></GridListTile>
        <GridListTile key={props.elData.id}>
          <img src={showPlayListImage()} alt={props.elData.name} />
          <GridListTileBar title={props.elData.name} />
        </GridListTile>
        {selectPath && selectButton()}
        ))
      </GridList>
    </div>
  );
};

export default PlaylistCard;
