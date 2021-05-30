/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import MovieList from '../../components/MovieList/MovieList';

const MainScreen = ({movies, getMovies, page}) => {
  useEffect(() => {
    getMovies(page);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MovieList items={movies} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#FFFFFF'},
});

const mapState = state => ({
  movies: state.movies.movies,
  page: state.movies.page,
});

const mapDispatch = dispatch => ({
  getMovies: dispatch.movies.getMovies,
});

export default connect(mapState, mapDispatch)(MainScreen);
