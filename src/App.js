import React from 'react';
import axios from 'axios';

 class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      locaResualt: {},
      searchQuery: '',
      showLocInfo: false
    }
  }
  getLocInfo = async (e) =>{
    e.preventDefault();
    await this.setState({
      searchQuery: e.target.city.value
    })

    let reqUrl = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchQuery}&format=json`

    let loctionResault = await axios.get(reqUrl);

    this.setState({
      locaResualt: loctionResault.data[0],
      showLocInfo: true
    })
  }
  render() {
    return (
      <div>
        <h3>City Explore app</h3>
        <form onSubmit={this.getLocInfo}>
          <input type="text" name='city'/>
          <input type="submit" value='get city info' />
        </form>

        {/* {this.state.showLocInfo && 
        <>
        <p>City Name: {this.state.searchQuery}</p>
        <p>Latitude: {this.state.locaResualt.lat}</p>
        <p>Longitude: {this.state.locaResualt.lon}</p>

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locaResualt.lat},${this.state.locaResualt.lon}&zoom=12`} alt="city" />
        </>
        } */}
        <>
        <p>City Name: {this.state.searchQuery}</p>
        <p>Latitude: {this.state.locaResualt.lat}</p>
        <p>Longitude: {this.state.locaResualt.lon}</p>

        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locaResualt.lat},${this.state.locaResualt.lon}&zoom=12`} alt="city" />
        </>
      </div>
    )
  }
}

export default App
