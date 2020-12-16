import React, {Component} from 'react';
import Nav1 from '../components/Nav1';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

export default class dataSearch extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            searchTerm:'',
            pageL: 0,
            CurPage: 1
        }
        this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
        //process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: [...data.results], pageL: data.total_results})
        })
    }

    handleChange = (e) =>{
        this.setState({searchTerm: e.target.value});
        if(e.target.value !== ""){
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${e.target.value}`)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: [...data.results]})
        })}
    }

    nextPage = (pageNumber) =>{ 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: [...data.results], CurPage: pageNumber})
        })
    }

    render(){
        const numberPages = Math.floor(this.state.pageL / 20)
        return(
            <div>
                <Nav1 movies={this.state.movies} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <MovieList movies={this.state.movies}/>
                { this.state.pageL > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} CurPage={this.state.CurPage} /> : ''}
            </div>
        );
    }
}