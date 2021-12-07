import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardApp from '../components/Card';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AddReactionIcon from '@mui/icons-material/AddReaction';

const cards = [
    {
        icon: <AccessibilityNewIcon/>, 
        title: 'Autoestima',
        desc: 'Autoestima em ter um corpo que você deseja e saudavel, não importando o formato dele.'
    },
    {
        icon: <AddReactionIcon/>, 
        title: 'Viver melhor',
        desc: 'Se cuidando, comendo bem, praticamente exercícios você vive melhor.'
    },
    {
        icon: <AccessAlarmIcon/>, 
        title: 'Viver mais tempo',
        desc: 'Com o cuidado, você aumenta as expectativas de viver mais tempo!'
    }
] 

export default class Home extends Component {
    render() {
        return(
            <Grid 
                container
                justifyContent="flex-start">
                <Grid 
                item
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start" 
                xs={12} 
                height='8em'
                padding='8em'
                spacing={2}>
                    <Typography variant="h3" component="div">Seja bem vindo!</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Hoje em dia muito se vê sobre cuidado alimentar, mas com tanta informação fica dificil saber pra onde ir, enha com a gente que descomplicamos!
                    </Typography>                  
                </Grid>

                <Grid 
                    container
                    direction="row"
                    height='10em'
                    padding='8em'
                    xs={12}>
                        <Grid 
                        item
                        padding='2em'
                        xs={12}>
                            <Typography variant="h4" component="div">Motivos pra se cuidar</Typography>
                        </Grid>
                        <Grid 
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            {cards.map((item, index) => (
                                <Grid item xs={4} key={index}>
                                    <CardApp icon={item.icon} title={item.title} desc={item.desc}></CardApp>
                                </Grid>
                            ))}
                        </Grid> 
                </Grid>
            </Grid>
        )
    }
}