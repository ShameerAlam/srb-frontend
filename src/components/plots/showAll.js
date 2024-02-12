import React, { useEffect, useState } from 'react';
import AnomalyTimeSeriesPlot from './AnomalyTimeSeriesPlot';
import AnomalyPiePlot from './AnomalyPiePlot';
import dummyData from './dummyData.json';  // Adjust the path based on your project structure

const YourMainComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <div>
      {/* Other components */}
      <AnomalyTimeSeriesPlot data={data} />

      <AnomalyPiePlot data={data} chartBy="ntn" />
      {/* or */}
      <AnomalyPiePlot data={data} chartBy="pos_id" />
    </div>
  );
};

export default YourMainComponent;
