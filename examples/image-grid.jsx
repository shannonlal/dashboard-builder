import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {};
let originalList = getItemsLS();

import DashElement from '../src/components/DashElement';
import GridElementSelector from '../src/components/GridElementSelector';
import Label from '../src/components/Label';
//console.log( 'Label', Label);

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
class ImageGrid extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onRemoveItem = this.onRemoveItem.bind( this );
    this.saveToLS = this.saveToLS.bind(this);
    console.log( 'items', originalList);
    let items;
    if( typeof originalList === "undefined"){
      originalList = [0];
      items = originalList.map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          imageIndex:i
        };
      })
    }else{
      items = originalList
    }
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      items: items,
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

  addItem( imageIndex, elementType ) {
    console.log( 'Image Index', imageIndex);
    if( typeof elementType === undefined){
      elementType = 'Chart'
    }
    /*eslint no-console: 0*/
    let items = this.state.items.concat({
      i: this.state.newCounter.toString(),
      x: (this.state.items.length * 2) % (this.state.cols || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2,
      imageIndex, 
      elementType
    });
    this.setState({
      // Add a new item. It must have a unique key!
      items: items,
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
      modalIsOpen:false
    });
    this.saveItemsToLS(items);

}

  onLayoutChange(layout, layouts) {
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
    let divId =`MainGrid-${i}`;
    //console.log( 'DIV ID', divId);
    return (
      <div key={i} id={divId} data-grid={el} className="basic-grid">
        <DashElement onRemoveItem={this.onRemoveItem} index={i} 
                      imageIndex={el.imageIndex} divId={divId}
                      elementType={el.elementType}/>
      </div>
    );
  }
  
  saveToLS(key, value) {
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

    /**
     * Function for parsing Infinity into string instead of null
     * since Infinity is not valid JSON
     */   
    function censor(key, value) {
      if (value == Infinity) {
        return "Infinity";
      }
      return value;
    }
    if (global.localStorage) {
      global.localStorage.setItem(
        "items",
        JSON.stringify(value, censor)
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <button onClick={this.displayModal.bind(this)}>Add Item</button>
        <Label label="Hello"></Label>
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
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function getItemsLS(key) {
  let ls;
  if (global.localStorage) {
    try {
      let items = global.localStorage.getItem("items");
      function convertInfinity (key, value) {
        return value === "Infinity"  ? Infinity : value;
      }
      ls = JSON.parse(items, convertInfinity);
      if( typeof ls === undefined || ls === null){
        return;
      }
    } catch (e) {
      /*Ignore*/
      return;
    }
  }
  return ls;
}
