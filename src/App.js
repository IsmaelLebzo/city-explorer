import React from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';
import Card from 'react-bootstrap/Card';
import Weather from './components/Weather';
import Movie from './components/Movie'



 class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      locationResult: {},
      searchQuery: '',
      showLocInfo: false,
      WeatherResult: [],
      MovieResult: []
    };
  }
  getLocFun = async (e) =>{
    e.preventDefault();
    
    await this.setState({
      searchQuery: e.target.city.value,
    });

    let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`
    let locResult = await axios.get(reqUrl);
    console.log(reqUrl);
    let weatherUrl = `${process.env.REACT_APP_SERVER_LINK}/getWeather?city=${this.state.searchQuery}`;
    let weatherResult = await axios.get(weatherUrl);
    console.log(weatherUrl);
    let movieUrl = `${process.env.REACT_APP_SERVER_LINK}/getMovie?city=${this.state.searchQuery}`;
    let movieResult = await axios.get(movieUrl);
    console.log(movieUrl);
    
    this.setState({
      locationResult: locResult.data[0].data,
      WeatherResult: weatherResult.data.data,
      MovieResult: movieResult.data.data,
      showLocInfo: true
    })
    console.log(this.state.WeatherResult);
  };

  render() {
    return (
      <div>
        <h3>City Explore app</h3>
        <Form onSubmit={this.getLocFun}>
        <Form.Group className="mb-3" controlId="Search Location">
        <Form.Label>City Name</Form.Label>
        <Form.Control type="text" name='city' placeholder="Enter City" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Explore!
        </Button>
        </Form>
        {this.state.showLocInfo && 
         <>
         <Card style={{ width: '30rem' }}>
           {/* <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`} alt="city"/> */}
           <Card.Body>
             <Card.Title>City info 🗺️</Card.Title>
             <Card.Text>
               <p>City name: {this.state.searchQuery}</p>
               <p>Latitude: {this.state.locationResult.lat}</p>
               <p>Longitude: {this.state.locationResult.lon} </p>
               <hr />
               <Weather WeatherResult = {this.state.WeatherResult} />
               <hr />
               <Movie MovieResult={this.state.MovieResult}/>
             </Card.Text>
           </Card.Body>
         </Card>
       </>
        }</div>
    );
  };

 };
export default App;
