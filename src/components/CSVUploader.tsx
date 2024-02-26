import React, { useState } from 'react';

const Papa = require('papaparse');
interface CSVUploaderProps {
    onCSVUpload: (data: any[]) => void;
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onCSVUpload }) => {
    const [csvFile, setCSVFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setCSVFile(files[0]);
        }
    };

    const handleUpload = () => {
        if (csvFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    const result = e.target.result as string;
                    const data = Papa.parse(result, { header: true }).data;
                    onCSVUpload(data);
                }
            };
            reader.readAsText(csvFile);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default CSVUploader;
