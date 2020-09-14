/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import format from 'date-fns/format';
import { itemsFetchData } from '../../actions';
import classes from './tickets-list.module.scss';

class TicketsList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {

    const { items, hasErrored, isLoading } = this.props;

    if (hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (isLoading) {
      return <p>Loading…</p>;
    }

    const elems = items.slice(0, 9).map((item) => {
      const { price, carrier, segments } = item;

      const { origin, destination, date, stops, duration } = segments[0];
      const {
        origin: originBack,
        destination: destinationBack,
        date: dateBack,
        stops: stopsBack,
        duration: durationBack,
      } = segments[1];

      return (
        <div className={classes['card-ticket']}>
          <span className={classes.price}>{price} RUB</span>
          <img className={classes.airline} src={carrier} alt={carrier} />
          <span className={classes.subtitle}>
            {origin} - {destination}
          </span>
          <span className={classes.subtitle}>в пути</span>
          <span className={classes.subtitle}>{stops.length} пересадок</span>
          <span className={classes.date}>{format(new Date(date), 'PPP p')}</span>
          <span className={classes.parametr}>{duration}</span>
          <span className={classes.parametr}>{stops.join(', ')}</span>
          <span className={classes.subtitle}>
            {originBack} - {destinationBack}
          </span>
          <span className={classes.subtitle}>в пути</span>
          <span className={classes.subtitle}>{stopsBack.length} пересадок</span>
          <span className={classes.date}>{format(new Date(dateBack), 'PPP p')}</span>
          <span className={classes.parametr}>{durationBack}</span>
          <span className={classes.parametr}>{stopsBack.join(', ')}</span>
        </div>
      );
    });

    return <div className={classes.wrapper}>{elems}</div>;
  }
}

const mapStateToProps = ({items, hasErrored, isLoading}) => ({items, hasErrored, isLoading});

const mapDispatchToProps = (dispatch) => {
  const fetchData = bindActionCreators(itemsFetchData, dispatch);
  return {
    fetchData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
