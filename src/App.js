import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { getCartItems, calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { isLoading, cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
