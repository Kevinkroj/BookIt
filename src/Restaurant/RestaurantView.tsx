import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import StarReview from '../Home/StarReview';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const RestaurantView = ({route}) => {
  const {name, uri, rating, address, storeImage} = route.params;
  console.log('sdasd', storeImage);
  const imagja = storeImage;

  const [focusedIcon, setFocusedIcon] = useState('store-mall-directory');

  const handleIconPress = iconName => {
    setFocusedIcon(iconName);
  };

  const renderIcon = iconName => {
    const isFocused = focusedIcon === iconName;

    return (
      <TouchableOpacity
        onPress={() => handleIconPress(iconName)}
        style={[
          styles.iconContainer,
          isFocused && styles.focusedIconContainer,
        ]}>
        <MaterialIcons
          name={iconName}
          size={50}
          color={isFocused ? '#ffc045' : 'gray'}
        />
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    if (focusedIcon === 'store-mall-directory') {
      return (
        <View>
          <View>
            {/* <Image source={{uri: storeImage}} style={styles.storebigImage} /> */}
          </View>
          <Text style={{fontSize: 25, marginTop: 20, marginLeft: 10}}>
            About
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, color: 'gray'}}>
            KFC, e njohur si Kentucky Fried Chicken, është një rrjet
            restorantesh ushqimore që specializohet në pjekjen e pulesës. Kjo
            zinxhir restorantesh është një nga më të njohurit në botë dhe ka një
            prezencë të gjerë ndërkombëtare.
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Rezervo ne {name}
          </Text>
        </View>
      );
    } else if (focusedIcon === 'restaurant') {
      return <Text>Restaurant Content</Text>;
    } else if (focusedIcon === 'reviews') {
      return <Text>Restaurant Menu Content</Text>; // Your custom view for "restaurant-menu"
    } else {
      return <Text>Select an Icon</Text>;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Image source={{uri}} style={styles.image} />
        <View>
          <View style={styles.header}>
            <Text
              style={{
                color: 'black',
                fontWeight: '400',
                fontSize: 20,
                marginLeft: 10,
              }}>
              {name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginRight: 10,
                marginTop: 10,
              }}>
              <StarReview rating={rating} />
            </View>
          </View>
          <Text style={{color: 'gray', marginLeft: 10}}>
            Address: {address}
          </Text>
          <View
            style={{
              borderBottomWidth: 0.4,
              borderBottomColor: 'gray',
              marginVertical: 5,
            }}
          />
          <View style={styles.iconGroup}>
            {renderIcon('store-mall-directory')}
            {renderIcon('restaurant')}
            {renderIcon('reviews')}
          </View>
          <View>{renderContent()}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  storebigImage: {
    width: '70%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderRadius: 20,
  },
  iconGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 40,
  },
  iconContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    marginRight: 50,
  },
  focusedIconContainer: {
    borderBottomColor: 'gold',
  },
};

export default RestaurantView;
