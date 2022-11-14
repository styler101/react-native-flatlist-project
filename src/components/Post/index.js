import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicatorBase,
  TouchableOpacity,
} from 'react-native';
import likeIcon from '../../assets/img/like.png';
import confirmLikeIcon from '../../assets/img/likeada.png';
import commentIcon from '../../assets/img/comment.png';
import sendIcon from '../../assets/img/send.png';

function Post(props) {
  const { data, onLike } = props;
  const { id, name, description, profileImage, postImage, isLike, likes } =
    data;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!postImage ? (
          <ActivityIndicatorBase />
        ) : (
          <Image
            source={{
              uri: profileImage,
            }}
            style={styles.profileImage}
          />
        )}
        <Text style={styles.profileName}> {name} </Text>
      </View>
      <View style={styles.main}>
        <Image
          source={{
            uri: postImage,
          }}
          style={styles.mainImage}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.options}>
          <TouchableOpacity onPress={() => onLike(id)}>
            <Image
              source={isLike ? confirmLikeIcon : likeIcon}
              style={styles.icon}
            />
          </TouchableOpacity>

          <Image source={commentIcon} style={styles.icon} />
          <Image source={sendIcon} style={styles.icon} />
        </View>
        {likes > 0 && <Text style={styles.likesText}> {likes} curtidas </Text>}
        {description && <Text> {description}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    resizeMode: 'cover',
  },

  profileName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1a1a1d',
  },

  main: {},

  mainImage: {
    height: 280,
  },

  footer: {
    paddingLeft: 4,
  },

  options: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },

  likesText: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 3,
  },
});

export default Post;
