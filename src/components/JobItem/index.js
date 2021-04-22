import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./style.css";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing';
import MailIcon from '@material-ui/icons/Mail';

export const JobItem = ({ title, description, thumbnail, published }) => {
  return (
    <Card className="jobItem">
      <CardActionArea>
        <CardMedia className="jobMedia" image={thumbnail} title="Job offer" />
        <Typography gutterBottom variant="body2" component="p" className="date">
          <strong>Опубликовано:</strong> <span>{published}</span>
        </Typography>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions className="contact">
        <strong>Контакты:</strong>
        <IconButton aria-label="telegram">
          <TelegramIcon />
        </IconButton>
        <IconButton aria-label="whatsapp">
          <WhatsAppIcon />
        </IconButton>
        <IconButton aria-label="phone">
          <PhonelinkRingIcon />
        </IconButton>
        <IconButton aria-label="mail">
          <MailIcon />
        </IconButton>
      </CardActions>

      <CardActions className="control">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
};
