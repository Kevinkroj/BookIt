import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const StarReview = ({rating}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const iconName = i <= rating ? 'star' : 'star-outline';
      stars.push(<Icon key={i} name={iconName} size={20} color="#ffc045" />);
    }
    return stars;
  };

  return <View style={styles.container}>{renderStars()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default StarReview;
