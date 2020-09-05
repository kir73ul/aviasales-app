import React from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import classes from './left-bar.module.scss';

const { Group } = Checkbox;

const plainOptions = ['Без пересадок', 'Одна пересадка', 'Две пересадки', 'Три пересадки'];

export default function LeftBar() {
  return (
    <div className={classes.wrapper}>
      <Checkbox indeterminate={false} onChange={() => {}} checked={false}>
        Все
      </Checkbox>
      <Group className={classes.group} options={plainOptions} value={plainOptions[0]} onChange={() => {}} />
    </div>
  );
}
