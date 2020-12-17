import React from 'react'
import axios from 'axios'
import PeopleCard from '../components/PeopleCard'
import { Grid } from '@material-ui/core'

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
                console.log(this.state.data)
            })
            .catch(console.error)
    }

    render() {
        return (
            <div>
                <h1>Orang Terpopuler</h1>
                <Grid container spacing={0}>
                        {this.state.data.map(data =>
                        <Grid item xs={4}>
                            <PeopleCard key={data.id} nama={data.name} image={data.profile_path} />
                        </Grid>
                        )}
                </Grid>

            </div>
        );
    }
}