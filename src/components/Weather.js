import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.WeatherResult.map((element) => {
            return (
              <>
                <p>Date: {element.date}</p>
                <p>Description: {element.description}</p>
              </>
            );
          })}
      </div>
    );
  }
}

export default Weather;