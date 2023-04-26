import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { blancAction, startUp } from '../actions';

export default () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('blac');
    // dispatch(startUp())
  }, []);

  return <div>Houses</div>;
};
