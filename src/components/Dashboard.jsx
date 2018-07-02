import React from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
import DashElement from './DashElement';
import GridElementSelector from './GridElementSelector';

const DEFAULT_GRID_WIDTH = 2;
const DEFAULT_GRID_HEIGHT = 2;
const DEFAULT_COLS = 12;

/**
 * The core chart which can be added to the dashboard.  Note
 * this is a warpper around a plot.ly plot.  The key feature this 
 * handles is the ability to set the height and width based on the 
 * surrounding dashboard (React Grid Layout).  This Chart component 
 * will override the layout and set its own height and width
 *
 * @version 1.0.0
 * @author [Shannon Lal](https://github.com/shannonlal)
 */
class Dashboard extends React.Component {

    static defaultProps = {
        className: "layout",
        rowHeight: 100,
        cols:5,
        onLayoutChange: function(){},
        modalIsOpen: false
    };
    constructor( props ){
        super(props)
        this.onRemoveItem = this.onRemoveItem.bind( this );
        const originalList = [0];
        this.state = {
            items: originalList.map(function(i, key, list) {
              return {
                i: i.toString(),
                x: i * 2,
                y: 0,
                w: DEFAULT_GRID_WIDTH,
                h: DEFAULT_GRID_HEIGHT
              };
            }),
            newCounter: originalList.length,
            layout:[]

          };
        this.onLayoutChange = this.onLayoutChange.bind(this);
    }

    /**
     * This is called by React Grid Layout when the layout changes
     * This will update the local state for the layout
     * @param layout
     */
    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
        this.setState({ layout: layout });
    }

    /**
     * Used to display the modal
     */
    displayModal(){
      this.setState({modalIsOpen: true})
    }

    /**
     * The following item will add a new Grid Element to the dashboard
     */
    addItem() {
        /*eslint no-console: 0*/
        this.setState({
          // Add a new item. It must have a unique key!
          items: this.state.items.concat({
            i: this.state.newCounter.toString(),
            x: (this.state.items.length * DEFAULT_GRID_WIDTH) % (this.state.cols || DEFAULT_COLS),
            y: Infinity, // puts it at the bottom
            w: DEFAULT_GRID_WIDTH,
            h: DEFAULT_GRID_HEIGHT
          }),
          newCounter: this.state.newCounter + 1,
          modalIsOpen:false
        });
    }

    /**
     * The following function will create a new component as a 
     * Dash Element
     * @param {object} el 
     */
    createElement(el) {

        const i = el.add ? "+" : el.i;
        let divId =`MainGrid=${1}`;
        const label = `Test Label ${i}`;
        return (
          <div key={i} id={divId} data-grid={el} className="basic-grid">
            <DashElement onRemoveItem={this.onRemoveItem} index={i} divId={divId} label={label} />
          </div>
        );
      }

      /**
       * The following method will remove the selected item 
       * from the dashboard
       * @param {number} i 
       */
    onRemoveItem(i) {
        this.setState({ items: _.reject(this.state.items, { i: i }) });
    }  

    render() {
      return (
        <div>
          <button onClick={this.displayModal.bind(this)}>Add Item</button>
          <GridElementSelector isOpen={this.state.modalIsOpen} 
              addItem={this.addItem.bind(this)}/>
              <ReactGridLayout
                onLayoutChange={this.onLayoutChange}
                {...this.props}
                layout={this.state.layout}
              >
                {_.map(this.state.items, el => this.createElement(el))}
              </ReactGridLayout>
        </div>
        
      )
    }
  }

Dashboard.propTypes = {
};
export default Dashboard;