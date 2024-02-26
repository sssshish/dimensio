import React from 'react';
import Chart from 'chart.js/auto';

interface DataVisualizerProps {
    data: any[];
}

const DataVisualizer: React.FC<DataVisualizerProps> = ({ data }) => {
    // Use the data to visualize using UMAP and t-SNE
    // Dummy code to create a scatter plot
    const ctx = document.getElementById('scatterChart') as HTMLCanvasElement;
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Scatter Dataset',
                    data: data.map((item) => ({ x: item.x, y: item.y })),
                },
            ],
        },
    });

    return <canvas id="scatterChart" />;
};

export default DataVisualizer;
