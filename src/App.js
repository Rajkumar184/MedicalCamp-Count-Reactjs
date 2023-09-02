import React, { useState } from 'react';
import { Row, Col } from 'antd';
import MedicalTestCard from './MedicalTestCard';

const App = () => {
  const [testCounts, setTestCounts] = useState({});

  const handleCountChange = (testName, count) => {
    setTestCounts({ ...testCounts, [testName]: count });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Medical Test Counters</h1>
      <Row gutter={16}>
        <Col span={6}>
          <MedicalTestCard
            testName="Blood Pressure Test"
            onCountChange={handleCountChange}
            bgColor="#FFC0CB" // Background color for this card
            textColor="#000" // Text color for this card
          />
        </Col>
        <Col span={6}>
          <MedicalTestCard
            testName="Diabetes Test"
            onCountChange={handleCountChange}
            bgColor="#87CEEB" // Background color for this card
            textColor="#000" // Text color for this card
          />
        </Col>
        <Col span={6}>
          <MedicalTestCard
            testName="ECG"
            onCountChange={handleCountChange}
            bgColor="#98FB98" // Background color for this card
            textColor="#000" // Text color for this card
          />
        </Col>
        <Col span={6}>
          <MedicalTestCard
            testName="Eye Checkup"
            onCountChange={handleCountChange}
            bgColor="#FFD700" // Background color for this card
            textColor="#000" // Text color for this card
          />
        </Col>
        <Col span={6}>
          <MedicalTestCard
            testName="General Medical Checkup"
            onCountChange={handleCountChange}
            bgColor="#FFA07A" // Background color for this card
            textColor="#000" // Text color for this card
          />
        </Col>
        {/* Add more test cards here */}
      </Row>
      <h2>Total Counts</h2>
      <ul>
        {Object.keys(testCounts).map((testName) => (
          <li key={testName}>
            {testName}: {testCounts[testName]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
