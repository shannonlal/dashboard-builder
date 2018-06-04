import React from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import GridLayout from 'react-grid-layout';
import DashElement from './DashElement';
import Chart from './Chart';
import {IMAGES} from '../images/';
import GridElementSelector from './GridElementSelector';


class Dashboard extends React.Component {

    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100,
        onLayoutChange: function(){},
        modalIsOpen: false
    };
    constructor( props ){
        super(props)
        this.onBreakpointChange = this.onBreakpointChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind( this );
        const originalList = [0];
        this.state = {
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

    displayModal(){
      this.setState({modalIsOpen: true})
    }
    addItem() {
        /*eslint no-console: 0*/
        this.setState({
          // Add a new item. It must have a unique key!
          items: this.state.items.concat({
            i: this.state.newCounter.toString(),
            x: (this.state.items.length * 2) % (this.state.cols || 12),
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 2
          }),
          // Increment the counter to ensure key is always unique.
          newCounter: this.state.newCounter + 1,
          modalIsOpen:false
        });
    }

    createElement(el) {

        const i = el.add ? "+" : el.i;
        return (
          <div key={i} data-grid={el} className="basic-grid">
            <DashElement onRemoveItem={this.onRemoveItem} index={i} />
          </div>
        );
      }

    onRemoveItem(i) {
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }  

    render() {
      return (
        <div>
          <button onClick={this.displayModal.bind(this)}>Add Item</button>
          <GridElementSelector isOpen={this.state.modalIsOpen} addItem={this.addItem.bind(this)}/>
          <ResponsiveReactGridLayout
            onLayoutChange={this.onLayoutChange}
            onBreakpointChange={this.onBreakpointChange}
            {...this.props}
          >
            {_.map(this.state.items, el => this.createElement(el))}
          </ResponsiveReactGridLayout>
        </div>
        
      )
    }
  }

  export default Dashboard;