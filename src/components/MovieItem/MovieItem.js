import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MovieItem = ({title, onPress, imgSource}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.imgBackground}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${imgSource}`,
        }}
      />

      <View style={styles.movieInfoContainer}>
        <View style={styles.movieTextInfo}>
          <Text>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: 5,
  },
  imgBackground: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    resizeMode: 'stretch',
    minHeight: 150,
  },
  movieInfoContainer: {
    minHeight: 50,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTextInfo: {},
});

export default MovieItem;
