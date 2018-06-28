import React from 'react';
import _ from "lodash";


import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
import DashElement from './DashElement';
import GridElementSelector from './GridElementSelector';


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
                w: 2,
                h: 2
              };
            }),
            newCounter: originalList.length,
            layout:[]

          };
        this.onLayoutChange = this.onLayoutChange.bind(this);

        
    }

    onLayoutChange(layout) {
      debugger;
        console.log( 'Layout change', layout);
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
        let divId =`MainGrid=${1}`;
        const label = `Test Label ${i}`;
        console.log( 'Create Element label', label);
        return (
          <div key={i} id={divId} data-grid={el} className="basic-grid">
            <DashElement onRemoveItem={this.onRemoveItem} index={i} divId={divId} label={label} />
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

  export default Dashboard;