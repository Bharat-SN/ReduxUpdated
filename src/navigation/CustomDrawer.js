import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"

const CustomDrawer = (props) => {

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <ImageBackground source={{ uri: "https://media.istockphoto.com/vectors/abstract-blue-vector-background-with-stripes-can-be-used-for-cover-vector-id1270261573?k=20&m=1270261573&s=612x612&w=0&h=8KkJd1DCgwZxMyh3AYFSzfuTRphs3mLuEMYMmUpmsmQ=" }}
                    style={styles.imageBack}>
                    <Text style={styles.textStyle}>Welcome!</Text>
                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStyle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    imageBack: {
        padding: 20
    },
    textStyle: {
        color: "#fff",
        fontSize: 15
    },
    switch: {
        flexDirection: 'row'
    }
})

export default CustomDrawer