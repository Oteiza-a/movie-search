import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const API_KEY = '17e6e478';

export class Detail extends Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string,
        })
    }

    state = { movie: {} }

    _fetchMovie = ({ id }) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movieData => {

                this.setState({ movie: movieData })
            })
    }

    componentDidMount() {
        console.log(this.props)
        const { id } = this.props.match.params;
        this._fetchMovie({ id })
    }

    render() {

        const { Title, Poster, Actors, Awards, Country,
            Director, Genre, Metascore, Plot, Language } = this.state.movie;

        return (
            <div>
                <Link to="/"><button>Back</button></Link>

                <h1>{Title}</h1>
                <img src={Poster} alt={Title} />
                <h3>{Actors}</h3>
                <p>METASCORE:  {Metascore}</p>
                <p>{Plot}</p>
            </div>
        )
    }
}