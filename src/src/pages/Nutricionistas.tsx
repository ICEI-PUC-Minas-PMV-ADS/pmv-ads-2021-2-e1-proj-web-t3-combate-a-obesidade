import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardNutricionista from '../components/CardNutricionista';

const cards = [
    {
        photo: 'https://www.laboratoriopalma.com.br/imagem/grande-noticias-nutri-3f195.png', 
        title: 'Paulo',
        desc: 'Rua dos bobos, n0'
    },
    {
        photo: 'http://www.engemed.med.br/site//uploads/2018/08/nutricionista2.png', 
        title: 'Francisco',
        desc: 'Rua dos bobos, n0'
    },
    {
        photo: 'https://www.eusemfronteiras.com.br/wp-content/uploads/2015/08/shutterstock_249955111.jpg', 
        title: 'Barbara',
        desc: 'Rua dos bobos, n0'
    },
    {
        photo: 'https://blog.mentalformula.com.br/wp-content/uploads/2020/07/Como-a-PNL-interage-com-Nutricionistas.jpg', 
        title: 'Alexandra',
        desc: 'Rua dos bobos, n0'
    },
    {
        photo: 'https://cdn.secad.com.br/wp-content/uploads/2019/02/perfil-nutricionistas-brasileiros.jpg', 
        title: 'Julia',
        desc: 'Rua dos bobos, n0'
    },
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
                    <Typography variant="h3" component="div">Nutricionistas</Typography>
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
                                <Grid item xs={2} spacing={2} key={index}>
                                    <CardNutricionista photo={item.photo} title={item.title} desc={item.desc}></CardNutricionista>
                                </Grid>
                            ))}
                        </Grid> 
                </Grid>
            </Grid>
        )
    }
}