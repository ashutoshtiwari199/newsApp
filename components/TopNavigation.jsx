import { View, Text , StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'

const TopNavigation = ({index, setIndex}) => {
  return (
    <View style={{...style.container, backgroundColor:"#282c35"}}>
        {index === 0 ?
            (<TouchableOpacity style={{...style.left}} >
                <Text style={{...style.text, color:"lightgray"}} >
                    <MaterialCommunityIcons
                        name="theme-light-dark"
                        size={24}
                        color="#007FFF"

                    />
                </Text>
            </TouchableOpacity> 
            ) :(
                <TouchableOpacity 
                    style={{...style.left}}
                    onPress={()=>setIndex(index=== 0 ? 1 : 0)}
                >
                    <SimpleLineIcons
                        name='arrow-left'
                        size={15}
                        color="#007FFF"
                    />
                    <Text style={{...style.text, color:"lightgray"}} >Discover</Text>
                </TouchableOpacity>
            )   
        }

        <Text style={{...style.center, color : "white"}} >
            {index ? "All News" : "Discover"}
        </Text>

        {index ? (
            <TouchableOpacity
                style={style.right}
            >
                <Text>
                    <AntDesign name='reload1' size={24} color="#007FFF"/>
                </Text>

            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={style.left}
                onPress={()=>setIndex( index === 0 ? 1 : 0 )}
            >
                <Text style={{...style.text, color: "white"}}>All News</Text>
                <SimpleLineIcons name='arrow-right' size={15} color="#007FFF" />
            </TouchableOpacity>
        )}

    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        alignItems:"center",
        borderBottomColor:"black",
        borderBottomWidth:.05
    },
    left:{
        flexDirection: "row",
        alignItems: "center",
        width: 80,
        justifyContent: "space-between"
    },
    text:{
        fontSize: 16
    },
    center:{
        paddingBottom:6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: '700'
    },
    right:{
        width:80,
        alignItems:'flex-end'
    }


})

export default TopNavigation