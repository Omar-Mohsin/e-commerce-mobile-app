import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('productSlice', () => {
  it('Should initially set product to an empty array', () => {
    const initialState = {
      product: [],
      loading: 'idle',
      error: null,
    };

    const store = mockStore(initialState);

    const state = store.getState().product;
    expect(state).toEqual([]);
  });

  it('Should fetch products correctly', async () => {

    const url = 'https://fakestoreapi.com/products'

    const initialState = {
      product: [],
      loading: 'idle',
      error: null,
    };

    const store = mockStore(initialState);

    const state = (await axios.get(url)).data;
    expect(state.length).toEqual(20)

  });
});
