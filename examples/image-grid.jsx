import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};
let originalList = getItemsLS() || [0]
import DashElement from '../src/components/DashElement';
import GridElementSelector from '../src/components/GridElementSelector';

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class ImageGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onRemoveItem = this.onRemoveItem.bind( this );
    this.saveToLS = this.saveToLS.bind(this);
    console.log( 'items', originalList);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      items: originalList.map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2
        };
      }),
      newCounter: originalList.length
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  addItem() {
    /*eslint no-console: 0*/
    let items = this.state.items.concat({
      i: this.state.newCounter.toString(),
      x: (this.state.items.length * 2) % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2
    });
    this.setState({
      // Add a new item. It must have a unique key!
      items: items,
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
      modalIsOpen:false
    });
    console.log( 'Saving to Storage', items);
    this.saveItemsToLS(items);
    debugger;

}

  onLayoutChange(layout, layouts) {
    console.log( 'Changing layout ', layout);
    console.log( 'Changing layouts ', layouts);
    this.saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  onRemoveItem(i) {
    let items = _.reject(this.state.items, { i: i });
    this.setState({ items: items });
    this.saveItemsToLS(items);
  }  

  displayModal(){
    this.setState({modalIsOpen: true})
  }

  createElement(el) {

    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} className="basic-grid">
        <DashElement onRemoveItem={this.onRemoveItem} index={i} />
      </div>
    );
  }
  
  saveToLS(key, value) {
    console.log( 'Saving to storage', key);
    if (global.localStorage) {
      global.localStorage.setItem(
        "rgl-8",
        JSON.stringify({
          [key]: value
        })
      );
    }
  }

  saveItemsToLS(value) {
    console.log( 'Saving items to storage', value);
    if (global.localStorage) {
      global.localStorage.setItem(
        "items",
        JSON.stringify(value)
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <button onClick={this.displayModal.bind(this)}>Add Item</button>
        <GridElementSelector isOpen={this.state.modalIsOpen} 
              addItem={this.addItem.bind(this)}/>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

module.exports = ImageGrid;



function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
      console.log( 'Got from storage', ls);
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function getItemsLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      let items = global.localStorage.getItem("items");
      debugger;

      ls = JSON.parse(items) || [0];
      console.log( 'Items',ls);
    } catch (e) {
      /*Ignore*/
      return [0];
    }
  }
  return ls;
}
