import React, { Component } from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

interface CardProps {
    icon: any;
    title: string;
    desc: string;
  }

export default class CardApp extends Component<CardProps> {
    render() {
        const { icon, title, desc} = this.props;

        return(
            <Card variant="outlined">
                <CardContent>
                    {icon}
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {desc}
                </Typography>
                </CardContent>
            </Card>
            )
        }
    }