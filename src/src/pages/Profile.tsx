import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CardRestaurante from '../components/CardRestaurante';
import TextField from '@mui/material/TextField';

export default class Restaurantes extends Component {
    state = {altura: 0, peso: 0, imc: 0};  

    constructor(props: any){
        super(props);  
        this.handleChangePeso = this.handleChangePeso.bind(this);
        this.handleChangeAltura = this.handleChangeAltura.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeAltura(event: any) {
      this.setState({altura: event.target.value});
    }

    handleChangePeso(event: any) {
      this.setState({peso: event.target.value});
    }
  
    handleSubmit(event: any) {
        let imcCalc = this.state.peso/(this.state.altura *this.state.altura);
        this.setState({imc: imcCalc});
      event.preventDefault();
    }

    render() {
        return (
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
                    <Typography variant="h3" component="div">Você!</Typography>
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Altura:(usando ponto)
                                <br/>
                                <input type="text" value={this.state.altura} onChange={this.handleChangeAltura}/>
                                <br/>
                                Peso:
                                <br/>
                                <input type="text" value={this.state.peso} onChange={this.handleChangePeso}/>
                                <br/>
                            </label>
                            <input type="submit" value="Calcular" />
                        </form>
                    </Grid>
                    <Grid
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}>
                        seu IMC é { this.state.imc}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}