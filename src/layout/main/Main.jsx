import React from 'react';
import Films from '../../components/Films';
import Preloader from '../../components/Preloader';
import Search from '../../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    state = {
        films: []
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
            .then(responce => responce.json())
            .then(data => this.setState({films: data.Search}))
    }

    searchFilms = (str) => {
        fetch(`https://www.omdbapi.com/?i=${API_KEY}&apikey=8de9d432&s=${str}`)
        .then(responce => responce.json())
        .then(data => this.setState({films: data.Search}))
    }

    render(){
        const {films} = this.state;

        return (
            <main className={films !== undefined ? 'container content': 'loading content'}>
                <Search searchFilms={this.searchFilms}/>
                {films === undefined ? null :
                (films.length ? <Films films = {this.state.films}/> : <Preloader/>)}
            </main>)
    }
}

export default Main;