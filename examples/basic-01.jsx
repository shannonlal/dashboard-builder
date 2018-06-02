import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import './grid.scss';

const ReactGridLayout = WidthProvider(RGL);

/**
 * Notes: Draggable and Resizeable.  There are two properties
 *      isDraggable: true,
 *       isResizable: false,
 * Turning them on and off makes them resizable
 * 
 * Example 3 - Make verify sizes of objects
 * 
 * Example 4 - Making something static means it can not move
 */
class BasicLayout extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        itemSize: 10,
        rowHeight: 30,
        onLayoutChange: function() {
            console.log( 'Layout changing');
        },
        cols: 12,
        isDraggable: true,
        isResizable: true,
    };

  constructor(props) {
    super(props);
    //const layout = this.createLayout();
    //this.state = { layout };
  }

  createLayout() {
    const p = this.props;
    return _.map(new Array(p.itemSize), function(item, i) {
      //const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      //Example for messy sizes
      const w = Math.ceil( Math.random()*4);
      const y = Math.ceil( Math.random()*4)+i;
      const gridStatic = (i%2 === 0) ? true : false;
      console.log( 'Y Variable ', y);
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: w,
        h: y,
        i: i.toString(),
        static: gridStatic
      };
    });
  }

  createCharts() {
    const layout = this.createLayout();  
    return _.map(_.range(this.props.itemSize), function(i) {
      return (
        <div key={i} className="basic-grid" data-grid={layout[i]}>
          <span className="text basic-grid-item">{i}</span>
        </div>
      );
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }


  render() {
    //layout={this.state.layout}
    return (
        <ReactGridLayout

          onLayoutChange={this.onLayoutChange}
          {...this.props}
        >
          {this.createCharts()}
        </ReactGridLayout>
      );
  }
}

module.exports = BasicLayout;
