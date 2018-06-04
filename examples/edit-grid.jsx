import React from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import './grid.scss';
import GridElementSelector from '../src/components/GridElementSelector';
import {IMAGES} from '../src/images/';

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class EditGridLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    onLayoutChange: function(){},
    modalIsOpen: false
  };

  constructor(props) {
    super(props);

    function shouldAdd( i, l ){
      
      let rst =  (i === (l.length - 1).toString());
      console.log( 'Should add', rst);
      return rst;
    }
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 2,
          h: 2,
          add: shouldAdd( i, list)
        };
      }),
      newCounter: 0,
      nextIndex: 5
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.closeModal = this.closeModal.bind( this );
  }
  getImage( index ){
    console.log( 'Getting image for ', index);
    return IMAGES[index];
  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el} className="basic-grid">
        {el.add ? (
          <span
            className="add text grid-label"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text basic-grid-item">
            <img className="grid-image" src={this.getImage( i )} alt="Paris" />
          </span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
      modalIsOpen:true
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  closeModal(){
      this.setState({modalIsOpen:false});
  }

  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <GridElementSelector isOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

module.exports = EditGridLayout;
