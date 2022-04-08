import * as React from "react";
import { render } from "react-dom";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

class App extends React.PureComponent {
  handleBeforeChange = () => {
    console.log("%c handleBeforeChange", "color: blue");
  };

  handleAfterChange = () => {
    console.log("%c handleAfterChange", "color: red");
  };

  slickSettings: Settings = {
    lazyLoad: "ondemand",
    accessibility: false,
    draggable: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: false,
    beforeChange: this.handleBeforeChange,
    afterChange: this.handleAfterChange
  };

  renderItems = () => {
    const items = [];

    for (let i = 0; i < 20; i++) {
      items.push(i);
    }

    return items.map((item, i) => (
      <div key={i}>
        <img src={`https://placeimg.com/133/200/any?rand=${i}`} alt="" />
      </div>
    ));
  };

  public render() {
    return (
      <div className="app">
        <Slick {...this.slickSettings}>{this.renderItems()}</Slick>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
