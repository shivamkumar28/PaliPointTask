import Toast from 'react-native-simple-toast';

/**
 * show toast at the bottom
 * @param message
 */
export const showToast = (message: string) => {
    Toast.showWithGravity(message, Toast.SHORT, Toast.BOTTOM);
};

/**
 * check the variable has data
 * @param array
 * @returns boolean
 */

export const hasData = (array: any) => {
    return Array.isArray(array) && array.length > 0;
};