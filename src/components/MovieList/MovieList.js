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
      items: movies[index],
    });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      console.log('Do Refresh');
      setResetPage(1);
      getMovies(page);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const onFetchNewData = useCallback(async () => {
    try {
      console.log('Fetch New Data');
      getMovies(page);
    } catch (error) {
      console.error(error);
    }
  }, [page]);

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
      keyExtractor={movie => `${movie.id}`}
      onEndReached={onFetchNewData}
      onEndReachedThreshold={0.1}
      renderItem={({item, index}) => {
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
      }}
    />
  );
};

const styles = StyleSheet.create({container: {paddingTop: 25}});

export default MovieList;
