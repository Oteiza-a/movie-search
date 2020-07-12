import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/MoviesList';

export class Home extends Component {

    state = {
        usedSearch: false,
        results: []
    }

    _handleResults = (results) => {
        this.setState({ usedSearch: true, results })
    }

    _renderResults = () => {
        return (
            // if no encuentra resultados
            typeof this.state.results == 'undefined'
                ? <p>Sorry! No results found.</p>
                : <MoviesList movies={this.state.results} />
        )
    }

    render() {
        return (
            <div>
                <Title>Movie Search</Title>
                <div className="searchform-wrapper">
                    <SearchForm onResults={this._handleResults} />
                </div>

                {this.state.usedSearch === true
                    ? this._renderResults()
                    : <small>Use the search bar to find movies and series.</small>
                }
            </div>
        )
    }
}