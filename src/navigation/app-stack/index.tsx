import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Screens } from "../../constant"
import Dashboard from "../../modules/dashboard"

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.dashboard} component={Dashboard} />
        </Stack.Navigator>
    )
}

export default AppStack