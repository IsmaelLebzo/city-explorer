import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Movie info</Card.Title>
                        <Card.Text>
                            <p>Title: {this.props.MovieResualt.title}</p>
                            <p>Overview: {this.props.MovieResualt.overview}</p>
                            <p>Average Votes: {this.props.MovieResualt.average_votes}</p>
                            <p>Total Votes: {this.props.MovieResualt.total_votes}</p>
                            <img src={this.props.MovieResualt.image_url} alt={this.props.alt}  style={{ width: '100%' }}/>
                            <p>Popularity: {this.props.MovieResualt.popularity}</p>
                            <p>Released On: {this.props.MovieResualt.released_on}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default Movie;