import React from 'react';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import MovieInfo from '../components/MovieInfo';
import Nav1 from '../components/Nav1';
import {FormControl, Grid, InputLabel, Select, MenuItem} from '@material-ui/core';
export default class myComponent extends React.Component {
	constructor(){
		super()
		this.state = {
			movies: [],
			movies1: [],
			pageL: 0,
			CurPage: 1,
			CurMovie: null,
			CurStatus: null,
			CurMovieReviews: null,
			sortBy: 1,
		}
		this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
	}

	handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
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

	componentDidMount() {
		let apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
		fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => 
			this.setState({movies: [...data.results], pageL: data.total_results, CurStatus: data.total_results}))
	}

	nextPage = (pageNumber) =>{ 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${pageNumber}`)
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

	clodeMovieInfo = () =>{
		this.setState({ CurMovie: null, CurMovieReviews: null})
	}

	handleSortChange =(e)=>{
		this.setState({sortBy: e.target.value})
		var apiUrl;
		if(this.state.sortBy === 1){
			apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
		}
		else if(this.state.sortBoy === 2){
			apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`;
		}

		fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => 
			this.setState({movies: [...data.results], pageL: data.total_results, CurStatus: data.total_results}))
	}

	render() {
		const numberPages = Math.floor(this.state.pageL / 20)
		return(
			<div>
				{ this.state.CurMovie === null ?
					<>
						<Grid container item>
							<Grid item xs={2}>
								<FormControl style={{width:'100%'}}>
									<InputLabel>Sort by</InputLabel>
									<Select
										value={this.state.sortBy}
										onChange={this.handleSortChange}
									>
										<MenuItem value={1}>Popularity</MenuItem>
										<MenuItem value={2}>Rating</MenuItem>
										<MenuItem value={3}>A-Z</MenuItem>
										<MenuItem value={4}>Z-A</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						</Grid>
						<Nav1 movies1={this.state.movies1} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
						<MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/> 
						{ this.state.pageL > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} CurPage={this.state.CurPage} /> : ''}
					</> :
					<MovieInfo CurMovie={this.state.CurMovie} CurMovieReviews={this.state.CurMovieReviews}  closeMovieInfo={this.clodeMovieInfo} />
				}
			</div>
		)
	}
}