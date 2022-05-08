import { View, Text, useWindowDimensions } from "react-native";
import { useState , useContext} from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";
// import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";

const InshortTabs = ()=>{


    const { index, setIndex} = useContext(NewsContext)

    const layOut= useWindowDimensions()
    
    // const [index, setIndex] = useState(1) 

    const [routes] = useState([
        {key:"first", title:"Discover"},
        {key:"second", title:"News"}
    ])

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen
    })


    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layOut.width }}
            renderTabBar={()=><TopNavigation
                index={index}
                setIndex={setIndex}
            />}
        />
        )
}

export default InshortTabs;