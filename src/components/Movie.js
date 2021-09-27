import React from 'react'
import { Table } from 'react-bootstrap'

class Movie extends React.Component {
    render() {
        return (
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Movie Title</th>
                        <th>Overview</th>
                        <th>AverageVotes</th>
                        <th>TotalVotes</th>
                        <th>ImageUrl</th>
                        <th>Popularity</th>
                        <th>ReleasedOn</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.MovieResult.map((element, idx) => {
                            return (
                                <tr key={idx}>
                                    <td >{element.title}</td>
                                    <td>{element.overview}</td>
                                    <td>{element.averageVotes}</td>
                                    <td>{element.totalVotes}</td>  
                                    <td><img src={element.imageUrl} alt='img' /></td>
                                    <td>{element.popularity}</td>
                                    <td>{element.releasedOn}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

export default Movie