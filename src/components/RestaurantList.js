import {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map(res => (
        <li key={res.id}>{res.name}</li>
      ))}
    </ul>
  );
};
export default RestaurantList;
