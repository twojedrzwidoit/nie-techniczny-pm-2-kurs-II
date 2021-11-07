import './home.scss';

import React from 'react';
import CarRow from 'app/entities/car';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { order } from './entities.reducer';

export const EntitiesList = () => {
  const cars = useAppSelector(state => state.entities.cars);
  const orders = useAppSelector(state => state.entities.orders);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  return (
    <div className="container" data-cy="carList">
      <div className="md-form md-outline input-with-post-icon datepicker" style={{ textAlign: 'right' }}>
        <span>
          <b>Od:</b> <input type="date" />{' '}
        </span>
        <span style={{ marginLeft: 10 }}>
          <b>Do:</b> <input type="date" />
        </span>
      </div>

      {cars
        .filter(it => !orders.map(el => el.car).includes(it.id))
        .map(car => (
          <CarRow
            key={car.id}
            imageUrl={car.imageUrl}
            model={car.model}
            range={car.range}
            petrol={car.petrol}
            selector={'carListOrderButton-' + car.id}
            available={true}
            isAuthenticated={isAuthenticated}
            func={() => dispatch(order({ id: car.id }))}
          />
        ))}
    </div>
  );
};

export default EntitiesList;
