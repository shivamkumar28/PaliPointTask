import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { colors, images, } from "../../constant"
import { useCallback, useEffect, useMemo } from "react"
import { getPosts } from "../../provider/api-services"
import { useDispatch, useSelector } from "react-redux"
import { hasData, showToast } from "../../utilities"
import { Loader } from "../../components"
import { styles } from "./styles"
import { removePostById, updatePostList } from "../../redux/general.slice"

const Dashboard = ({ navigation }: any) => {
    const disptach = useDispatch()
    const postList = useSelector((state: any) => state.general.postList)

    useEffect(() => {
        getPostsList()
    }, [])

    /**
     * Call api to fetch post list
     */
    const getPostsList = () => {
        getPosts().then((res: any) => {
            console.log('res--', JSON.stringify(res))
            if (hasData(res)) {
                disptach(updatePostList(res))
            } else {
                showToast("Something Went Wrong")
            }
        }).catch((e: any) => {
            console.log('error-', e)
            showToast(e?.message || "Something Went Wrong")
        })
    }

    /**
     * It will redirect to detail screen
     * @param id;
     */
    const onCardPress = (id: number) => {
        console.log('tappedId--', JSON.stringify(id))
        disptach(removePostById(id))
    }

    /**
     * render post list
     * @param {item,index}
     * @returns
     */
    const renderList = useCallback(({ item, index }: any) => {
        return <View key={index} style={styles.itemContainer}>
            <Text style={styles.title} numberOfLines={1}>{`${item.id}. ${item.title}`}</Text>
            <Text style={styles.bodyTxt}>{item.body}</Text>
            <TouchableOpacity
                activeOpacity={0.6}
                style={styles.deleteBtn}
                onPress={() => onCardPress(item.id)}>
                <Image source={images.deleteIc} />
                <Text style={styles.deleteTxt}>{'Delete the Post'}</Text>
            </TouchableOpacity>
        </View>
    }, [postList])

    /**
     * memoized the list using useMemo
     */
    const memoizedRenderList = useMemo(() => renderList, [renderList])

    return <View style={styles.container}>
        <FlatList
            data={postList}
            renderItem={memoizedRenderList}
            keyExtractor={(item: any) => item?.id}
            style={{ flex: 1 }}
            contentContainerStyle={{ paddingHorizontal: 4, paddingVertical: 4 }}
        />
        {postList.length == 0 && <Loader size={"large"} color={colors.black} />}
    </View>
}

export default Dashboard