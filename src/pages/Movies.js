import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=c2be14dd7e9184f7bace4a34ed07a444&language=en-US&page=1';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('FROM Movies.js, API results:', data));
  }
  render() {
    return <h1>SinemaPintuTaubatHidayahIndosiar.com</h1>;
  }
}
export default myComponent;