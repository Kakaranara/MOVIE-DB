import React, {Component} from 'react';
import Nav1 from '../components/Nav1';
import MovieList from '../components/MovieList';
import MovieList1 from '../components/MovieList1';
import Pagination from '../components/Pagination';
import MovieInfo from '../components/MovieInfo';
import Carousel1 from '../components/Carousel1';
import axios from 'axios';

export default class dataSearch extends Component {
    constructor(){
        super()
        this.state = {
            movies: [],
            movies1: [],
            movies2: [],
            movies3: [],
            searchTerm:'',
            pageL: 0,
            CurPage: 1,
            CurMovie: null,
            CurStatus: null,
            CurMovieReviews: null,
        }
        this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
        //process.env.REACT_APP_API
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
        console.log("fine");
        if(e.target.value !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${e.target.value}`)
            .then(data => data.json())
            .then(data => {
                this.setState({movies: [...data.results], pageL: data.total_results, CurStatus: data.total_results})
            })}
            
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
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
        fetch(`https://api.themoviedb.org/3/movie/${FMovie[0].id}?api_key=${this.apiKey}&language=en-US`)
        .then(data => data.json())
        .then(data => {
            this.setState({CurMovie: data})
        })
        fetch(`https://api.themoviedb.org/3/movie/${FMovie[0].id}/reviews?api_key=${this.apiKey}&language=en-US`)
        .then(data => data.json())
        .then(data => {
            this.setState({CurMovieReviews: [...data.results]})})
    }

    
    viewMovieInfo1 = (id) =>{
        const FMovie = this.state.movies2.filter(movie => movie.id === id);
        fetch(`https://api.themoviedb.org/3/movie/${FMovie[0].id}?api_key=${this.apiKey}&language=en-US`)
        .then(data => data.json())
        .then(data => {
            this.setState({CurMovie: data})
        })
    }
    
    viewMovieInfo2 = (id) =>{
        const FMovie = this.state.movies3.filter(movie => movie.id === id);
        fetch(`https://api.themoviedb.org/3/movie/${FMovie[0].id}?api_key=${this.apiKey}&language=en-US`)
        .then(data => data.json())
        .then(data => {
            this.setState({CurMovie: data})
        })
    }

    closeMovieInfo = () =>{
        this.setState({ CurMovie: null, CurMovieReviews: null})
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
            .then(result => {
                this.setState({
                    movies2: result.data.results
                })
            })
            .catch(console.error)

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
            .then(result => {
                this.setState({
                    movies3: result.data.results
                })
            })
            .catch(console.error)
    }


    render(){
        const numberPages = Math.floor(this.state.pageL / 20)
        return(
            <div>
                { this.state.CurMovie === null ?
                <div>
                    <Nav1 movies1={this.state.movies1} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    {this.state.CurStatus === null ? <div><Carousel1 movies2={this.state.movies2} viewMovieInfo={this.viewMovieInfo1}/> 
                    <MovieList1 viewMovieInfo={this.viewMovieInfo2} movies3={this.state.movies3}/> </div> : null}
                    <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/> 
                    { this.state.pageL > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} CurPage={this.state.CurPage} /> : ''}
                </div> :<MovieInfo CurMovie={this.state.CurMovie} CurMovieReviews={this.state.CurMovieReviews} closeMovieInfo={this.closeMovieInfo} />
                }
            </div>
        );
    }
}