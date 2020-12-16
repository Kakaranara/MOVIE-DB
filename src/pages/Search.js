import React, {Component} from 'react';
import Nav1 from '../components/Nav1';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieInfo from '../components/MovieInfo';

export default class dataSearch extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            movies1: [],
            searchTerm:'',
            pageL: 0,
            CurPage: 1,
            CurMovie: null
        }
        this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
        //process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
        console.log(e.target.value);
        if(e.target.value !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${e.target.value}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], pageL: data.total_results})
        })}
        
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
        console.log(e.target.value);
        if(e.target.value !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${e.target.value}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies1: [...data.results]})
        })}
        
    }

    nextPage = (pageNumber) =>{ 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: [...data.results], CurPage: pageNumber})
        })
    }

    viewMovieInfo = (id) =>{
        const FMovie = this.state.movies.filter(movie => movie.id === id);
        const newCurMovie = FMovie.length > 0? FMovie[0] : null;
        this.setState({ CurMovie: newCurMovie})
    }

    clodeMovieInfo = () =>{
        this.setState({ CurMovie: null })
    }

    render(){
        const numberPages = Math.floor(this.state.pageL / 20)
        return(
            <div>
                { this.state.CurMovie == null ?
                <div>
                    <Nav1 movies1={this.state.movies1} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/> 
                    { this.state.pageL > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} CurPage={this.state.CurPage} /> : ''}
                </div> :<MovieInfo CurMovie={this.state.CurMovie} closeMovieInfo={this.clodeMovieInfo} />
                }
            </div>
        );
    }
}