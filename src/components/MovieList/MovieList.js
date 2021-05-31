/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({movies, getMovies, page, setResetPage}) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const goDetailMovie = index => {
    return navigation.navigate('DetailScreen', {
      name: movies[index].original_title,
      movies: movies[index],
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setResetPage(1);
    getMovies(page);
    setRefreshing(false);
  }, [refreshing]);

  const onFetchNewData = () => {
    getMovies(page);
  };

  const renderMovieItem = ({ item, index }) => {
    return (
      <MovieItem
          title={item.original_title}
          rating={item.vote_average}
          onPress={() => {
            goDetailMovie(index);
          }}
          imgSource={item.poster_path}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      numColumns={2}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={movies}
      keyExtractor={movie => `${movie.id}-${movie.original_title}`}
      onEndReached={onFetchNewData}
      onEndReachedThreshold={0}
      renderItem={renderMovieItem}
    />
  );
};

const styles = StyleSheet.create({container: {paddingTop: 25}});

export default MovieList;
