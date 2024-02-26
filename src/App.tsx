import React, { useState } from 'react';
import CSVUploader from './components/CSVUploader';
import DataVisualizer from './components/DataVisualizer';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  const handleCSVUpload = (csvData: any[]) => {
    setData(csvData);
  };

  return (
    <div>
      <h1>Dimensio</h1>
      <CSVUploader onCSVUpload={handleCSVUpload} />
      {data.length > 0 && <DataVisualizer data={data} />}
    </div>
  );
};

export default App;
