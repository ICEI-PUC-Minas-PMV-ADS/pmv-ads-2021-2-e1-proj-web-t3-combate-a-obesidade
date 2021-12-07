import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardRestaurante from '../components/CardRestaurante';

const cards = [
    {
        photo: 'https://vinicolaaraucaria.com.br/wp-content/uploads/2020/06/interna_restaurante-1-1400x700.jpg', 
        title: 'Restaurante 1',
        desc: 'Rua voluntários da pátrica 226'
    },
    {
        photo: 'https://diariodorio.com/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-16-at-19.13.58.jpeg', 
        title: 'Restaurante 1',
        desc: 'Rua delfim moreria 589'
    },
    {
        photo: 'https://www.viajali.com.br/wp-content/uploads/2020/06/restaurantes-botafogo-1-730x449.jpg', 
        title: 'Restaurante 1',
        desc: 'Avenida frança 32'
    },
    {
        photo: 'https://media-cdn.tripadvisor.com/media/photo-s/19/a4/6c/82/dining-and-bar-area.jpg', 
        title: 'Restaurante 1',
        desc: 'AV mem de sá 2000'
    },
    {
        photo: 'https://www.viajali.com.br/wp-content/uploads/2018/10/restaurantes-ipanema-1.jpg', 
        title: 'Restaurante 1',
        desc: 'Avenida Manuel Moreira 12'
    },
    {
        photo: 'https://www.casamagalhaes.com.br/blog/wp-content/uploads/2019/01/7-passos-eficazes-para-fidelizar-os-clientes-do-seu-restaurante.jpg', 
        title: 'Restaurante 1',
        desc: 'Rua Macedônia 45'
    }
] 

export default class Restaurantes extends Component {
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
                padding='2em'
                spacing={2}>
                    <Typography variant="h3" component="div">Restaurantes</Typography>
                </Grid>

                <Grid 
                    container
                    direction="row"
                    padding='2em'
                    xs={12}>
                        <Grid 
                            item
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            {cards.map((item, index) => (
                                <Grid item xs={4} key={index}>
                                    <CardRestaurante photo={item.photo} title={item.title} desc={item.desc}></CardRestaurante>
                                </Grid>
                            ))}
                        </Grid> 
                </Grid>
            </Grid>
        )
    }
}