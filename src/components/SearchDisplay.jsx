import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import AuthContext from '../context/userContext';
import { addSong } from '../lib/spotifyApi'


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

export default function TitlebarGridList(props) {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  console.log(props.searchResults.length);
  const party = JSON.parse(localStorage.getItem("party"))

  if (props.openSearch === false) {
    return <a href="#"></a>;
  }
  if (props.searchResults.length === 0) {
    return <p style={{ color: "red" }}> Whoops, maybe check the spelling</p>;
  } else {
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ height: "auto" }}
          ></GridListTile>
          {props.searchResults.map((results) => (
            <GridListTile key={results.id}>
              <img src={results.album.images[0].url} alt={results.album.name} />
              <GridListTileBar
                title={results.name}
                subtitle={<span>by: {results.artists[0].name}</span>}
                actionIcon={
                  <IconButton aria-label={`star ${results.album.name}`} onClick={addSong(party.playlistId, results.id)}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
