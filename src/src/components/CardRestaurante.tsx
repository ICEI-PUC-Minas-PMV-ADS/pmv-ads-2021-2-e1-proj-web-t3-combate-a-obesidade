import React, { Component } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface CardProps {
    photo: string;
    title: string;
    desc: string;
  }

export default class CardRestaurante extends Component<CardProps> {
    render() {
        const { photo, title, desc} = this.props;

        return(
                <Card variant="outlined">
                <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                    R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                    <MoreVertIcon />
                    </IconButton>
                }
                title= {title}
                subheader={desc}
                />
                <CardMedia
                component="img"
                height="194"
                image={photo}
                alt="Paella dish"
                />
                <CardContent>
                </CardContent>
            </Card>
            )
        }
    }