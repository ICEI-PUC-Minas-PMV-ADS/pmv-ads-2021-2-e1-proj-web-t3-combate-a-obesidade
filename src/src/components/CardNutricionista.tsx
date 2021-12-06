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
import Box from '@mui/material/Box';

interface CardProps {
    photo: string;
    title: string;
    desc: string;
  }

export default class CardNutricionista extends Component<CardProps> {
    render() {
        const { photo, title, desc} = this.props;

        return(
                <Card variant="outlined" sx={{ display: 'flex' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {desc}
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                  </Box>
                </Box>
                <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={photo}
                alt="Paella dish"
                />
            </Card>
            )
        }
    }