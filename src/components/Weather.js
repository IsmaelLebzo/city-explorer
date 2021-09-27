import React from 'react'
import { Table } from 'react-bootstrap'

class Weather extends React.Component {
    render() {
        return (
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.WeatherResult.map((element, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{element.description}</td>
                                    <td>{element.date}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

export default Weather