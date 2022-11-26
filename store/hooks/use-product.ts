import React from "react";
import useAppDispatch from "./usedispatch";
import useAppSelector from "./useselector";
import productSlice from "store/slices/product";

/**
 * Custom Hook For Add To Cart
 * @returns
 */
const useProduct = () => {
    const dispatch = useAppDispatch();
    const productState = useAppSelector((state) => state.product);
    // ADD FROM CART
    const setBed = React.useCallback(
        (data: any) => {
            dispatch(productSlice.actions.setBed(data));
        },
        [dispatch]
    );
    const setAccessories = React.useCallback(
        (key: string, value: any) => {
            dispatch(productSlice.actions.setAccessories({
                key,
                value
            }));

        },
        [dispatch]
    );
    const setTotal = React.useCallback(
        (data: any) => {
            dispatch(productSlice.actions.setTotal(data));
        },
        [dispatch]
    );
    return {
        setBed,
        setTotal,
        setAccessories,
        productState,

    };
};
export default useProduct;
