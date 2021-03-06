import React from 'react'
import axios from 'axios'
import PeopleCard from '../components/PeopleCard'
import { Grid, Typography } from '@material-ui/core'

const apiKey = "c2be14dd7e9184f7bace4a34ed07a444";

export default class Peoples extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(result => {
                this.setState({
                    data: result.data.results
                })
            })
            .catch(console.error)   
    }


    render() {
        return (
            <div>
                <Typography variant="h3" align="center" gutterBottom>Orang Terpopuler</Typography>
                <Grid container spacing={1} justify="center" alignItems="center">
                        {this.state.data.map(data =>
                            <Grid container item md={3} sm={6} xs={12} lg={2} key={data.id} justify="center" alignItems="center">
                                <PeopleCard 
                                    nama={data.name} 
                                    image={data.profile_path}
                                    popular={data.popularity}    
                                />
                            </Grid>
                        )}
                </Grid>

            </div>
        );
    }
}