import React from 'react';
import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function Loader({ isLoading }) {
  const progress = (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
      showInfo={false}
      status="active"
    />
  );

  return isLoading ? progress : null;
}
