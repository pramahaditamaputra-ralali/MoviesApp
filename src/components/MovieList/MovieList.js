/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet} from 'react-native';
import MovieItem from '../MovieItem/MovieItem';
import {connect} from 'react-redux';

const MovieList = ({items, getMovies, page, setResetPage}) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const goDetailMovie = index => {
    return navigation.navigate('DetailScreen', {
      name: items[index].original_title,
      items: items[index],
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
      data={items}
      keyExtractor={item => `${item.id}`}
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

const mapState = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
});

const mapDispatch = dispatch => ({
  getMovies: dispatch.movies.getMovies,
  setResetPage: dispatch.movies.SET_RESET_PAGE,
});

export default connect(mapState, mapDispatch)(MovieList);
