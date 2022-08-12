import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native'

function MovieDetails({ route }) {
    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                resizeMode='cover'
                style={styles.background}
                source={{ uri: movie.imgUrl }}>
                    {/* <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center'}}>
                        <Text style={{fontSize: 40 ,color: 'white'}}>
                            {movie.name}
                        </Text>
                    </View> */}
                </ImageBackground>
            <View>
                <Text style={styles.textHeader}>Description</Text>
                <Text style={styles.textStyle}>{movie.overview}</Text>
                <Text style={styles.textStyle}>Released: {movie.releaseYear}</Text>
                <Text style={styles.textStyle}>Runtime: {movie.runtime}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    background: {
        width: '100%',
        height: 450
    },
    textHeader:{
        fontWeight: 'bold',
        fontSize: 30
    },
    textStyle:{
        fontSize: 20
    }

})

export default MovieDetails