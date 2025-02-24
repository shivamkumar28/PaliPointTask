import { ActivityIndicator, StyleSheet, View } from "react-native"
import { LoaderProps } from "./interface";
import { memo } from "react";

const Loader = (props: LoaderProps) => {
    const { size, color } = props

    return <View style={StyleSheet.absoluteFill}>
        <ActivityIndicator size={size} color={color} />
    </View>
};
export default memo(Loader);
