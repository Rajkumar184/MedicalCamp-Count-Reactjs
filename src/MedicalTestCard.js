import React, { useState } from 'react';
import { Card, Button } from 'antd';

const MedicalTestCard = ({ testName, onCountChange, bgColor, textColor }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onCountChange(testName, count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onCountChange(testName, count - 1);
    }
  };

  const cardStyle = {
    width: 300,
    marginBottom: '20px',
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <Card title={testName} style={cardStyle}>
      <h3>Count: {count}</h3>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={handleDecrement} style={{ marginLeft: '10px' }}>
        -
      </Button>
    </Card>
  );
};

export default MedicalTestCard;
