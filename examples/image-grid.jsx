import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];
import DashElement from '../src/components/DashElement';
import {IMAGES} from '../src/images/';
/**
 * This layout demonstrates how to sync to localstorage.
 */
class ImageGrid extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);
    const originalList = [0];
    this.state = {
      layout: JSON.parse(JSON.stringify(originalLayout)),
      items: originalList.map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2
        };
      }),
      newCounter: originalList.length,
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.resetLayout = this.resetLayout.bind(this);
  }

  resetLayout() {
    this.setState({
      layout: []
    });
  }

  onLayoutChange(layout) {
    /*eslint no-console: 0*/
    console.log( 'Layout ', layout);
    saveToLS("layout", layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout); // updates status display
  }

  onRemoveItem(i) {
    this.setState({ items: _.reject(this.state.items, { i: i }) });
}  

  createElement(el) {
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} className="basic-grid">
        <DashElement onRemoveItem={this.onRemoveItem} index={i} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <ReactGridLayout
          {...this.props}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ReactGridLayout>
      </div>
    );
  }
}



function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-7")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  console.log('Saved to local storage');
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-7",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

module.exports = ImageGrid;

