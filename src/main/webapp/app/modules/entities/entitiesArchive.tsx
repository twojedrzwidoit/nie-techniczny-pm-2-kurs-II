import './home.scss';

import React from 'react';
import { useAppSelector } from 'app/config/store';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import CarArchiveRow from 'app/entities/car/archive';

export const EntitiesArchive = (props: RouteComponentProps<any>) => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  const cars = useAppSelector(state => state.entities.cars);
  const orders = useAppSelector(state => state.entities.orders);

  const { location } = props;
  const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };

  if (!isAuthenticated) {
    return <Redirect to={from} />;
  }

  return (
    <div className="container">
      {orders
        .filter(order => order.user === 1 && order.status === 'RETURNED')
        .map(order => {
          const car = cars.find(it => it.id === order.car);
          return (
            <CarArchiveRow
              key={car.id}
              imageUrl={car.imageUrl}
              model={car.model}
              from={order.from}
              to={order.to}
              status={order.status}
              statusMessage={order.statusMessage}
            />
          );
        })}
    </div>
  );
};

export default EntitiesArchive;
