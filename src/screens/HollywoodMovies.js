import React from 'react'
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { HMovies } from '../utils/HollywoodJson'
import { useDispatch } from 'react-redux'
import { ADD_TO_LIKED } from '../redux/MovieReducer'
import { ADD_TO_SAVED } from '../redux/MovieReducer'
import Carousel from '../components/Carousel'

function HollywoodMovies({navigation}) {
    const dispatch = useDispatch()
    const likeMovie = item => dispatch({ type: ADD_TO_LIKED, payload: item })
    const saveMovie = item => dispatch({ type: ADD_TO_SAVED, payload: item })

    return (
        <View style={styles.container}>
            <Carousel/>
            <FlatList
                data={HMovies}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.bookItemContainer}>
                        <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                        <View style={styles.bookItemMetaContainer}>
                            <Text style={styles.textTitle} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <Text style={styles.textAuthor}>Released: {item.releaseYear}</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('MovieDetails', {movie: item})}>
                                <Text>Details</Text>
                            </TouchableOpacity>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    onPress={() => likeMovie(item)}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>Like</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => saveMovie(item)}
                                    style={styles.button}>
                                    <Text style={styles.buttonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bookItemContainer: {
        flexDirection: 'row',
        padding: 10
    },
    thumbnail: {
        width: 100,
        height: 150
    },
    bookItemMetaContainer: {
        padding: 5,
        paddingLeft: 10
    },
    textTitle: {
        fontSize: 22,
        fontWeight: '500'
    },
    textAuthor: {
        fontSize: 18,
        fontWeight: '400'
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 110,
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#24a0ed',
        padding: 5
    },
    buttonText: {
        fontSize: 22,
        color: '#fff'
    }
})

export default HollywoodMovies