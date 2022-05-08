import { View, Text, StyleSheet ,TouchableOpacity,Dimensions, Image, ImageBackground} from 'react-native'
import React from 'react'



const SingleNews = ({item , index}) => {

  return (
    <View style={style.container} >
        <Image 
            source={{uri: item.urlToImage}}
            style={{height: "45%", resizeMode:"cover", width: windowWidth}}
        />
        <View
            style={{...style.description, backgroundColor:"#282C35"}}
        >
            <Text style={{...style.title, color:"white"}} > {item.title}</Text>
            <Text style={{...style.content, color:"white"}} >{item.description}</Text>
            <Text style={{color:"white"}} >Presented By: <Text>{item.author ?? "Unknown"}</Text></Text>
        </View>
        <ImageBackground
          blurRadius={30}
          style={style.footer}
          source={{uri: item.urlToImage}}
        >
            <TouchableOpacity>
                <Text style={{fontSize: 15, color: "white"}}>{item?.content?.slice(0,45)}</Text>
                <Text style={{ fontSize: 17, fontWeight:"bold", color:"white"}}>read more..</Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width


const style= StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:"bold",
        paddingBottom:10,
        // color:"white",
    },
    container:{
        height: windowHeight,
        width: windowWidth,
        // backgroundColor: 'purple',
        transform: [{scaleY: -1}]
    },
    content:{
        fontSize:18,
        paddingBottom:10
    },
    footer:{
        height:80,
        width:windowWidth,
        position:"absolute",
        bottom: 0,
        backgroundColor:"#d7be69",
        justifyContent:"center",
        padding:20, 
    },
    description:{
        padding:15,
        flex: 1
    }
})

export default SingleNews