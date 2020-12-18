import React from 'react';
import MovieList from '../components/MovieListX';
import Pagination from '../components/Pagination';
import MovieInfo from '../components/MovieInfoX';
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
            Unext: 1
		}
		this.apiKey='c2be14dd7e9184f7bace4a34ed07a444'
	}

	handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            searchTerm: e.target.value
        });
        if(e.target.value !== ""){
            fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&language=en-US&page=1&query=${e.target.value}&include_adult=false`)
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
		let apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
		fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => 
			this.setState({movies: [...data.results], pageL: data.total_results, CurStatus: data.total_results}))
	}

	nextPage = (pageNumber) =>{ 
    let apiUrl;
    console.log(this.state.Unext)
    if(this.state.Unext === 1){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
		}
		else if(this.state.Unext === 2){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.asc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(this.state.Unext === 3){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=first_air_date.desc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(this.state.Unext === 4){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=first_air_date.asc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(this.state.Unext === 5){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.desc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(this.state.Unext === 6){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.asc&page=${pageNumber}&timezone=America%2FNew_York&include_null_first_air_dates=false`;
		}
        fetch(apiUrl)
        .then(data => data.json())
        .then(data => {
            this.setState({movies: [...data.results], CurPage: pageNumber})
        })
    }

	viewMovieInfo = (id) =>{
		const FMovie = this.state.movies.filter(movie => movie.id === id);
		fetch(`https://api.themoviedb.org/3/tv/${FMovie[0].id}?api_key=${this.apiKey}&language=en-US`)
		.then(data => data.json())
		.then(data => {
			this.setState({CurMovie: data})
		})
		
		fetch(`https://api.themoviedb.org/3/tv/${FMovie[0].id}/reviews?api_key=${this.apiKey}&language=en-US`)
    .then(data => data.json())
    .then(data => {
        this.setState({CurMovieReviews: [...data.results]})})
	}

	clodeMovieInfo = () =>{
		this.setState({ CurMovie: null, CurMovieReviews: null})
	}

	handleSortChange =(e)=>{
    let apiUrl;
	if(e.target.value === 1){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
		}
	else if(e.target.value === 2){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.asc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(e.target.value === 3){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=first_air_date.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(e.target.value === 4){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=first_air_date.asc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(e.target.value === 5){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    }
    else if(e.target.value === 6){
        apiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.asc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
		}
		fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => 
    this.setState({movies: [...data.results], pageL: data.total_results, CurStatus: data.total_results, Unext: e.target.value, sortBy: e.target.value}))
    
	}

	render() {
		const numberPages = Math.floor((this.state.pageL / 20)-1)
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
										<MenuItem value={1}>Most Popular</MenuItem>
										<MenuItem value={2}>Least Popular</MenuItem>
										<MenuItem value={3}>Newest Movie</MenuItem>
										<MenuItem value={4}>Oldest Movie</MenuItem>
										<MenuItem value={5}>Highest Rating</MenuItem>
										<MenuItem value={6}>Lowest Rating</MenuItem>
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