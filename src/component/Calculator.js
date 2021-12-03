import React, { Component } from "react";
import { convert, toFahrenheit, toCelsius } from "./scaleConverter";
import { Boilvert } from "./Boilvert";
import TemperaturInput from "./TemperaturInput";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { temperatur: "", scale: "c" };
    this.onChangeHandler2 = this.onChangeHandler2.bind(this);
  }

  onChangeHandler2(e, scale) {
    this.setState({
      temperatur: e.target.value,
      scale,
    });
  }

  render() {
    const { temperatur, scale } = this.state;

    const celsius = scale === "f" ? convert(temperatur, toCelsius) : temperatur;
    const fahrenheit =
      scale === "c" ? convert(temperatur, toFahrenheit) : temperatur;
    return (
      <div>
        <TemperaturInput
          scale="f"
          temperatur={fahrenheit}
          onChangeHandler={this.onChangeHandler2}
        />
        <TemperaturInput
          scale="c"
          temperatur={celsius}
          onChangeHandler={this.onChangeHandler2}
        />
        <Boilvert celsius={parseFloat(temperatur)} />
      </div>
    );
  }
}

export default Calculator;
