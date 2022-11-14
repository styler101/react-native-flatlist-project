import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import Header from '../Header';
import Post from '../Post';
import mockedFeeds from '../../repositories/feeds';

function App() {
  const [feed, setFeed] = useState(mockedFeeds);

  function handleChangePost(postId) {
    const copyFeeds = Array.from(feed);
    const findPost = copyFeeds.findIndex(item => item.id === postId);
    if (findPost < -1) {
      return;
    }
    copyFeeds[findPost].isLike = !copyFeeds[findPost].isLike;
    copyFeeds[findPost].likes = copyFeeds[findPost].isLike
      ? copyFeeds[findPost].likes + 1
      : copyFeeds[findPost].likes - 1;
    setFeed(copyFeeds);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.feedContainer}>
        <FlatList
          data={feed}
          refreshing
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Post data={item} onLike={handleChangePost} />
          )}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={4}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },

  feedContainer: {
    flex: 1,
    marginVertical: 12,
  },
});

export default App;
