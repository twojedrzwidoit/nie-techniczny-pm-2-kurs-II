import './home.scss';

import React from 'react';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import CarCurrentRow from 'app/entities/car/current';
import { returnCar } from './entities.reducer';

export const EntitiesCurrent = (props: RouteComponentProps<any>) => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const cars = useAppSelector(state => state.entities.cars);
  const orders = useAppSelector(state => state.entities.orders);
  const dispatch = useAppDispatch();

  const { location } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };

  if (!isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <div className="container">
      {orders
        .filter(order => order.user === 1 && order.status !== 'RETURNED')
        .map(order => {
          const car = cars.find(it => it.id === order.car);
          return (
            <CarCurrentRow
              key={car.id}
              imageUrl={car.imageUrl}
              model={car.model}
              from={order.from}
              to={order.to}
              status={order.status}
              statusMessage={order.statusMessage}
              func={() => dispatch(returnCar({ id: car.id }))}
            />
          );
        })}
    </div>
  );
};

export default EntitiesCurrent;
