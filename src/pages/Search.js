import React, {Component} from 'react';
import Nav1 from '../components/Nav1';
import MovieList from '../components/MovieList';

export default class dataSearch extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchTerm:''
        }
        this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
        //process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);
            this.setState({movies: [...data.results]})
        })
    }

    handleChange = (e) =>{
        this.setState({searchTerm: e.target.value})
    }

    render(){
        return(
            <div>
                <Nav1 handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}