import React, { useEffect, useState } from 'react';
import TimeSeriesPlot from './time_series_plot';
import PiePlot from './pie_plots';
import BarPlot from './barplot';
import Card from "../resuseable_components/card.js";
import dummyData from '../../data/dummyData.json';  // Adjust the path based on your project structure
// import PiePlot from './pie_plots';

const Analytics = () => {
  const [data, setData] = useState([]);
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    const generateDummyData = () => {
      const startDate = new Date('2023-11-01T00:00:00');
      const endDate = new Date('2023-11-30T23:59:59');
      const dateRange = endDate - startDate;

      const dummyData = Array.from({ length: 100 }, (_, index) => {
        const randomDate = new Date(startDate.getTime() + Math.random() * dateRange);
        return {
          pos_id: Math.floor(Math.random() * 10),
          ntn: Math.floor(Math.random() * 5),
          anomaly: Math.floor(Math.random() * 10),
          created_date_time: randomDate.toISOString(),
        };
      });

      setDummyData(dummyData);
    };
    generateDummyData();
  }, []);

  return (
    <div>
      {/* Other components */}
      <Card title={"100"} content={"Anomaly"} />
      <TimeSeriesPlot data={dummyData} />
      <Card title={"100"} content={"Anomaly"} />

      <PiePlot data={dummyData} chartBy="ntn" />
      <BarPlot data={dummyData} chartBy="ntn" />
      {/* or */}
      <PiePlot data={dummyData} chartBy="pos_id" />
      <BarPlot data={dummyData} chartBy="pos_id" />
    </div>
  );
};

export default Analytics;
