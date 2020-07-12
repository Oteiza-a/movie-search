import React, { Component } from 'react';

const API_KEY = '17e6e478';

export class SearchForm extends Component {

    state = {
        inputMovie: '',
    }

    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault();

        const { inputMovie } = this.state;

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(data => {

                const { Search, totalResults } = data;
                this.props.onResults(Search);
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Enter a movie to search"
                            onChange={this._handleChange} />
                    </div>
                    <div className="control" type="submit">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>

        )
    }
}