// App.tsx
import React from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DraggableBox = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 3, h: 2 },
    { i: 'b', x: 3, y: 0, w: 3, h: 2 },
    { i: 'c', x: 6, y: 0, w: 3, h: 2 },
    { i: 'd', x: 9, y: 0, w: 3, h: 2 },
 
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>📦 React Grid Layout Demo</h2>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1300}
        draggableHandle=".drag-handle"
      >
        <div key="a" style={{ background: '#f8c291', padding: 10}}>
          <div className="drag-handle">Drag A</div>
          Box A
        </div>
        <div key="b" style={{ background: '#82ccdd', padding: 10}}>
          <div className="drag-handle">Drag B</div>
          Box B
        </div>
        <div key="c" style={{ background: '#b8e994', padding: 10 }}>
          <div className="drag-handle">Drag C</div>
          Box C
        </div>
        <div key="d" style={{ background: '#b8e900', padding: 10}}>
          <div className="drag-handle">Drag D</div>
          Box D
        </div>
      </GridLayout>
    </div>
  );
};

export default DraggableBox;
