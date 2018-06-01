import React from 'react';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import GridLayout from 'react-grid-layout';
import GridElement from './GridElement';

const gridLayout = [
    {x: 0, y: 0, w: 1, h: 2, static: true},
    {x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {x: 4, y: 0, w: 1, h: 2}
];
class Dashboard extends React.Component {
    getLayoutsFromSomewhere(){
        let layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2}
        ];

        return layout;
    }

    render() {
      // {lg: layout1, md: layout2, ...}
      var layouts = this.getLayoutsFromSomewhere();
      return (

        <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
            {gridLayout.map( (dataGrid,index) => <GridElement key={index} dataGrid={dataGrid} label={dataGrid.i}/> ) }
            {/**<div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
            <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>b</div>
      <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>c</div> */}
        </GridLayout>
        
      )
    }
  }

  export default Dashboard;