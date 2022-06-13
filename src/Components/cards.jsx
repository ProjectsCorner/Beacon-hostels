import React, {useState} from 'react';
import "../Design/cards.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red,blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Stjosephp from ".././assets/stjoseph.jpg";
import { Button } from '@mui/material';
import Navheader from './Navheader';
import Footer from './Footer';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function HostelCards() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    
        <Navheader />
        <div className="card-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                doloremque reiciendis corrupti
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="card-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                doloremque reiciendis corrupti
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <Button size="small" color="primary">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  New
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="St Josephs Hostel"
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={Stjosephp}
              alt="St joseph"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Button size="small" color="primary" variant="outlined">
                Book Now
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      <Footer/>
    </>
  );
}
