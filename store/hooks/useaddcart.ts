

import React from 'react';
import useAppDispatch from './usedispatch';
import useAppSelector from './useselector';
import addToCartSlice from 'store/slices/addtocart';

/**
 * Custom Hook For Add To Cart
 * @returns 
 */
const useAddCart = () => {
    const dispatch = useAppDispatch();
    const cartState = useAppSelector((state) => state.addToCart)
    // ADD FROM CART
    const addToCart = React.useCallback((data: any) => {
        dispatch(addToCartSlice.actions.addToCart(data))
    }, [dispatch])
    // ADD FROM CART
    const increaseQuantity = React.useCallback((data: any) => {
        dispatch(addToCartSlice.actions.increaseQuantity(data))
    }, [dispatch])
    // ADD FROM CART
    const decreaseQuantity = React.useCallback((data: any) => {
        dispatch(addToCartSlice.actions.decreaseQuantity(data))
    }, [dispatch])
    // REMOVE FROM CART
    const removeFromCart = React.useCallback((data: any) => {
        dispatch(addToCartSlice.actions.removeFromCart(data))
    }, [dispatch])

    // Return Values
    return {
        cartState,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    }

}
export default useAddCart;