import React from 'react';
import useAppDispatch from './usedispatch';
import useAppSelector from './useselector';
import selectbedSlice from 'store/slices/selectbed';



/**
 * Reusable Hook for Bed Selection
 * @returns 
 */
const useSelectBed = () => {

    const dispatch = useAppDispatch()
    const bedState = useAppSelector((state) => state.selectbed)

    // HANDLER FOR BED SIZE

    const setBedSize = React.useCallback((value: number) => {
        dispatch(selectbedSlice.actions.setBedSize(value))
    }, [dispatch])

    // HANDLER FOR BED COLOR

    const setBedColor = React.useCallback((value: string) => {
        dispatch(selectbedSlice.actions.setBedColor(value))
    }, [dispatch])

    // HANDLER FOR BED COLOR

    const setBedHeadBoard = React.useCallback((value: string) => {
        dispatch(selectbedSlice.actions.setBedHeadBoard(value))
    }, [dispatch])

    // HANDLER FOR BED COLOR

    const setBedStorage = React.useCallback((value: string) => {
        dispatch(selectbedSlice.actions.setBedStorage(value))
    }, [dispatch])

    // HANDLER FOR BED COLOR

    const setBedFeet = React.useCallback((value: string) => {
        dispatch(selectbedSlice.actions.setBedFeet(value))
    }, [dispatch])

    // HANDLER FOR BED COLOR

    const setBedMatters = React.useCallback((value: string) => {
        dispatch(selectbedSlice.actions.setBedMatters(value))
    }, [dispatch])
    // Return Values


    return {
        bedState,
        setBedSize,
        setBedColor,
        setBedHeadBoard,
        setBedStorage,
        setBedFeet,
        setBedMatters,
    }

}
export default useSelectBed;