import React, { useEffect } from 'react';
import Loader from '../Loader';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { setProducts } from '../../state/actions/products';
import {
  setError,
  setSuccess,
  setLoading,
} from '../../state/actions/loadingStates';

const Products = () => {
  const products = useSelector((state) => state.products);
  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    loadProducts();
  }, []);

  const loadProducts = async () => {
    dispatch(setProducts(filterProducts(await fetchProducts())));
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products'
      );
      let data = await response.json();
      dispatch(setLoading(false));
      dispatch(setSuccess(true));
      return data;
    } catch (err) {
      dispatch(setLoading(false));
      dispatch(setError(true));
    }
  };

  const filterProducts = (products) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing` ||
        product.category === `jewelery`
    );
  };

  const productCards = products.map((product) => (
    <ProductCard
      key={Math.random()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  if (loadingState.loading) {
    return <Loader />;
  }

  if (loadingState.error) {
    return <div>Sorry, We're facing an error</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-16 justify-center mt-16 md:grid-cols-2 lg:grid-cols-3">
      {productCards}
    </div>
  );
};

export default Products;