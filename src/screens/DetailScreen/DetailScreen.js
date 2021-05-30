import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DetailScreen = ({route}) => {
  const {original_title, overview, poster_path, vote_average} =
    route.params.movies;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <Image
          style={styles.movieCoverImg}
          source={{uri: `https://image.tmdb.org/t/p/w500/${poster_path}`}}
        />
        <View style={styles.movieDetailContainer}>
          <Text style={styles.movieTitle}>{original_title}</Text>
          <Text style={styles.movieRate}>Rate {vote_average}</Text>
          <Text style={styles.movieOverview}>{overview}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  movieCoverImg: {
    height: 500,
    resizeMode: 'stretch',
  },
  movieDetailContainer: {padding: 15},
  movieTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  movieRate: {
    color: '#AAA',
    fontSize: 15,
    marginBottom: 10,
  },
  movieOverview: {textAlign: 'justify', fontSize: 15},
});

export default DetailScreen;
