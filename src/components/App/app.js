import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import classes from './app.module.scss';
import AppHeader from '../app-header';
import LeftBar from '../left-bar';
import TicketsContent from '../tickets-content';

export default function App() {
  return (
    <div className={classes.app}>
      <AppHeader />
      <Row gutter={20} justify="center">
        <Col span={5}>
          <LeftBar />
        </Col>
        <Col span={12}>
          <TicketsContent />
        </Col>
      </Row>
    </div>
  );
}
