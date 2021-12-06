import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardApp from '../components/Card';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


const cards = [
    {
        icon: AccessAlarmIcon, 
        title: 'Motivo 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id vehicula sapien. Phasellus pharetra rhoncus odio, ac fringilla massa aliquet eget. Mauris neque odio, mattis eget lobortis a, accumsan vitae neque. In varius tellus ac mi hendrerit, non vulputate nisi sagittis. Integer et diam arcu. Vestibulum faucibus porta magna, eu tincidunt leo egestas vel. Ut eros odio, sagittis ut tortor eu, posuere finibus arcu. Donec accumsan ex ac blandit dapibus. Sed ut interdum odio. Vestibulum orci elit, elementum in rhoncus a, tempor porta urna. Sed congue nulla sit amet dui semper mattis.'
    },
    {
        icon: AccessAlarmIcon, 
        title: 'Motivo 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id vehicula sapien. Phasellus pharetra rhoncus odio, ac fringilla massa aliquet eget. Mauris neque odio, mattis eget lobortis a, accumsan vitae neque. In varius tellus ac mi hendrerit, non vulputate nisi sagittis. Integer et diam arcu. Vestibulum faucibus porta magna, eu tincidunt leo egestas vel. Ut eros odio, sagittis ut tortor eu, posuere finibus arcu. Donec accumsan ex ac blandit dapibus. Sed ut interdum odio. Vestibulum orci elit, elementum in rhoncus a, tempor porta urna. Sed congue nulla sit amet dui semper mattis.'
    },
    {
        icon: AccessAlarmIcon, 
        title: 'Motivo 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id vehicula sapien. Phasellus pharetra rhoncus odio, ac fringilla massa aliquet eget. Mauris neque odio, mattis eget lobortis a, accumsan vitae neque. In varius tellus ac mi hendrerit, non vulputate nisi sagittis. Integer et diam arcu. Vestibulum faucibus porta magna, eu tincidunt leo egestas vel. Ut eros odio, sagittis ut tortor eu, posuere finibus arcu. Donec accumsan ex ac blandit dapibus. Sed ut interdum odio. Vestibulum orci elit, elementum in rhoncus a, tempor porta urna. Sed congue nulla sit amet dui semper mattis.'
    }
] 

export default class Home extends Component {
    render() {
        return(
            <Grid 
                container>
                <Grid 
                item
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start" 
                xs={12} 
                height='10em'
                padding='8em'
                spacing={2}>
                    <Typography variant="h3" component="div">Notícias sobre cuidados com a saúde</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Descrição
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
                            <Typography variant="h3" component="div">Motivos pra se cuidar</Typography>
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
                                    <CardApp ico={item.icon} title={item.title} desc={item.desc}></CardApp>
                                </Grid>
                            ))}
                        </Grid> 
                </Grid>
            </Grid>
        )
    }
}