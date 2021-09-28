import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component {
    render() {
        console.log(this.props.MovieResult);
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Movie info</Card.Title>
                        <Card.Text>
                            <p>Title: {this.props.MovieResult.title}</p>
                            <p>Overview: {this.props.MovieResult.overview}</p>
                            <p>Average Votes: {this.props.MovieResult.vote_average}</p>
                            <p>Total Votes: {this.props.MovieResult.vote_count}</p>
                            <img src={this.props.MovieResult.poster_path} alt={this.props.alt}  style={{ width: '100%' }}/>
                            <p>Popularity: {this.props.MovieResult.popularity}</p>
                            <p>Released On: {this.props.MovieResult.released_on}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Movie; 