import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  const barFillHeight =
    props.maxValue > 0 ? Math.round(props.value / props.maxValue) * 100 + '%' : '10%';

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
