import { StyleSheet } from "react-native";
import { colors } from "../../constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    itemContainer: {
        margin: 8,
        rowGap: 8,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderColor: colors.black,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.black
    },
    bodyTxt: {
        flex: 1,
        fontSize: 12,
        color: colors.black,
    },
    deleteBtn: {
        zIndex: 999,
        columnGap: 10,
        borderRadius: 12,
        paddingVertical: 8,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.red10,
    },
    deleteTxt: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.red
    }
})