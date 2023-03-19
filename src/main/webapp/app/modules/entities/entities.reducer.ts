import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { serializeAxiosError } from 'app/shared/reducers/reducer.utils';

const initialState = {
  cars: [
    {
      id: 1,
      model: 'Opel Insignia 2.0 2020',
      imageUrl: 'https://i.imgur.com/8upSUL4.jpeg',
      range: '185 000 km',
      petrol: 'Benzyna',
      available: true,
    },
    {
      id: 2,
      imageUrl: 'https://i.imgur.com/wrdTML9.jpeg',
      model: 'BMW X5',
      range: '260 000 km',
      petrol: 'Diesel',
      available: false,
    },
    {
      id: 3,
      imageUrl: 'https://i.imgur.com/UyroZ9z.jpeg',
      model: 'Audi A8',
      range: '169 000 km',
      petrol: 'Diesel',
      available: true,
    },
  ],
  orders: [],
  loading: true,
};

export type EntitiesState = Readonly<typeof initialState>;

export const handleRegister = createAsyncThunk(
  'register/create_account',
  async (data: { login: string; email: string; password: string; langKey?: string }) => axios.post<any>('api/register', data),
  { serializeError: serializeAxiosError }
);

export const EntitiesSlice = createSlice({
  name: 'entities',
  initialState: initialState as EntitiesState,
  reducers: {
    order(state, action) {
      state.orders.push({
        user: 1,
        car: action.payload.id,
        from: '10.11.2021',
        to: '10.09.2021',
        status: 'ORDERED',
        statusMessage: '',
      });
    },
    returnCar(state, action) {
      const carIndex = state.orders.findIndex(el => el.car === action.payload.id);
      state.orders[carIndex].status = 'RETURNED';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(handleRegister.pending, state => {
        state.loading = true;
      })
      .addCase(handleRegister.rejected, (state, action) => ({
        ...initialState,
        registrationFailure: true,
        errorMessage: action.error.message,
      }))
      .addCase(handleRegister.fulfilled, () => ({
        ...initialState,
        registrationSuccess: true,
        successMessage: 'Registration saved! Please check your email for confirmation.',
      }));
  },
});

export const { order, returnCar } = EntitiesSlice.actions;

// Reducer
export default EntitiesSlice.reducer;
