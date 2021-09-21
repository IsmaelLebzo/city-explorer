import React from 'react';
import axios from 'axios';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';


 class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      locaResualt: {},
      searchQuery: '',
      showLocInfo: false,
      locations: []
    }
  }
  getLocInfo = async (e) =>{
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.city.value
    })

    let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`

    let loctionResault = await axios.get(reqUrl);

    let urlSite = `${process.env.REACT_APP_SERVER_LINK}/weather?searchQuery=${this.state.searchQuery}`

    let resualtUrl = await axios.get(urlSite);

    this.setState({
      locations: resualtUrl.data,
      locaResualt: loctionResault.data[0],
      showLocInfo: true
    })
  }
  render() {
    return (
      <div>
        <h3>City Explore app</h3>
        {/* <form >
          <input type="text" name='city'/>
          <input type="submit" value='get city info' />
        </form> */}
        <Form onSubmit={this.getLocInfo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City Name</Form.Label>
        <Form.Control id='lol' type="text" name='city' placeholder="Enter City" />
        </Form.Group>
        <Button variant="primary" type="submit" value='get city info'>
        Submit
        </Button>
        </Form>
        {this.state.showLocInfo && 
        <>
        
        <p>City Name: {this.state.searchQuery}</p>
        <p>Latitude: {this.state.locaResualt.lat}</p>
        <p>Longitude: {this.state.locaResualt.lon}</p>

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locaResualt.lat},${this.state.locaResualt.lon}&zoom=12`} alt="city" />
        <div id='bot'>
        <p>Date: {this.state.locations[0].date}</p>
        <p>Description: {this.state.locations[0].description}</p>
        <p>Date: {this.state.locations[1].date}</p>
        <p>Description: {this.state.locations[1].description}</p>
        <p>Date: {this.state.locations[2].date}</p>
        <p>Description: {this.state.locations[2].description}</p>
        </div>
        </>
        }
        {/* <>
        <p>City Name: {this.state.searchQuery}</p>
        <p>Latitude: {this.state.locaResualt.lat}</p>
        <p>Longitude: {this.state.locaResualt.lon}</p>

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locaResualt.lat},${this.state.locaResualt.lon}&zoom=12`} alt="city" />
        </> */}
      </div>
    )
  }
}

export default App
