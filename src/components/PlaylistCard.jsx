import { Card } from '@material-ui/core';
import Image from 'material-ui-image';
import Box from '@material-ui/core/Box';

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

  return (
    <Card>
      <h1>{props.elData.name}</h1>
      {props.elData.images.length > 0 && showPlayListImage()}
    </Card>
  );
};

export default PlaylistCard;
