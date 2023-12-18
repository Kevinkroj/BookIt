import {useUser} from '@realm/react';
import React, {useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Platform,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {MutableSubscriptionSet} from 'realm/dist/bundle';
import {Profili} from '../Realm/CarouselSchema';
import {realmContext} from '../Realm/RealmContes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-gesture-handler';
import StarReview from './StarReview';

const {useRealm, useQuery} = realmContext;

const Home = ({navigation}) => {
  //========= REALM ===============================
  // const items = useQuery(Profili).sorted('_id');
  // const realm = useRealm();
  // const user = useUser();

  // useEffect(() => {
  //   realm.subscriptions.update(mutableSubscriptions => {
  //     mutableSubscriptions.add(realm.objects('Profili'));
  //   });
  // }, []);

  // const createItem = useCallback(
  //   ({summary}: {summary: string}) => {
  //     realm.write(() => {
  //       return new Profili(realm, {
  //         emer: 'levboso',
  //         mbiemer: 'kevi',
  //       });
  //     });
  //   },
  //   [realm],
  // );
  // console.log('kevi', items);
  //==============================================
  const images = [
    {
      id: '1',
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
      title: 'Test 1',
    },
    {
      id: '2',
      uri: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
      title: 'Test 2',
    },
    {
      id: '3',
      uri: 'https://www.alyonascooking.com/wp-content/uploads/2020/10/general-tso-chicken-recipe-16.jpg',
      title: 'Test 3',
    },
    {
      id: '4',
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
      title: 'Test 1',
    },
    {
      id: '5',
      uri: 'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
      title: 'Test 2',
    },
    {
      id: '6',
      uri: 'https://www.alyonascooking.com/wp-content/uploads/2020/10/general-tso-chicken-recipe-16.jpg',
      title: 'Test 3',
    },
    // Add more images as needed
  ];

  const categories = [
    {
      _id: '1',
      categoriesImage:
        'https://img.taste.com.au/lNnNoTvU/taste/2010/01/sushi-187034-1.jpg',
      categoriesName: 'Sushi',
    },
    {
      _id: '2',
      categoriesImage:
        'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg',
      categoriesName: 'FastFood',
    },
    {
      _id: '3',
      categoriesImage:
        'https://www.alyonascooking.com/wp-content/uploads/2020/10/general-tso-chicken-recipe-16.jpg',
      categoriesName: 'Kineze',
    },
    {
      _id: '4',
      categoriesImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/230320152734-02-mexican-foods-birria.jpg?c=original&q=h_618,c_fill',
      categoriesName: 'Meksikane',
    },
    {
      _id: '5',
      categoriesImage:
        'https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4.jpg',
      categoriesName: 'Steak',
    },
  ];

  const topRestaurants = [
    {
      id: '1',
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
      title: 'Test 1',
      name: 'KFC',
    },
    {
      id: '2',
      uri: 'https://vegnews.com/media/W1siZiIsIjM4MjQ1L1ZlZ05ld3NfSW1wb3NzaWJsZUNoaWNrZW5fQnVyZ2VyS2luZy10cmFuc2Zvcm1lZCAoMSkuanBlZyJdLFsicCIsInRodW1iIiwiMTYwMHg5NDYjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews_ImpossibleChicken_BurgerKing-transformed%20%281%29.jpg?sha=84dea3889abae4dc',
      title: 'Test 2',
      name: 'Burger King',
    },
    {
      id: '3',
      uri: 'https://theproperpizzacompany.com/wp-content/uploads/2020/09/Screen-Shot-2020-10-15-at-9.45.37-PM.png',
      title: 'Test 3',
      name: 'Proper Pizza',
    },
    // Add more images as needed
  ];

  const allRestaurants = [
    {
      id: '1',
      uri: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg',
      title: 'Test 1',
      name: 'KFC',
      address: 'Tirane, Albania',
      rating: 4,
      storeImage:
        'https://codeit.al/wp-content/uploads/2021/04/kfc-mobile-cover.jpg',
    },
    {
      id: '2',
      uri: 'https://vegnews.com/media/W1siZiIsIjM4MjQ1L1ZlZ05ld3NfSW1wb3NzaWJsZUNoaWNrZW5fQnVyZ2VyS2luZy10cmFuc2Zvcm1lZCAoMSkuanBlZyJdLFsicCIsInRodW1iIiwiMTYwMHg5NDYjIix7ImZvcm1hdCI6ImpwZyJ9XSxbInAiLCJvcHRpbWl6ZSJdXQ/VegNews_ImpossibleChicken_BurgerKing-transformed%20%281%29.jpg?sha=84dea3889abae4dc',
      title: 'Test 2',
      name: 'Burger King',
      address: 'Tirane, Albania',
      rating: 4,
      storeImage:
        'https://codeit.al/wp-content/uploads/2021/04/kfc-mobile-cover.jpg',
    },
    {
      id: '3',
      uri: 'https://theproperpizzacompany.com/wp-content/uploads/2020/09/Screen-Shot-2020-10-15-at-9.45.37-PM.png',
      title: 'Test 3',
      name: 'Proper Pizza',
      address: 'Tirane, Albania',
      rating: 2,
      storeImage:
        'https://codeit.al/wp-content/uploads/2021/04/kfc-mobile-cover.jpg',
    },
    // Add more images as needed
  ];

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <Image source={{uri: item.uri}} style={styles.image} />
    </View>
  );

  const renderTopRestaurants = ({item}) => (
    <View style={styles.topContainer}>
      <Image source={{uri: item.uri}} style={styles.topImage} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
          backgroundColor: '#ffc045',
          padding: 5,
          // borderRadius: 5,
          borderTopStartRadius: 5,
          borderTopEndRadius: 5,
          marginTop: -150,
          width: 'auto',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: 'white',
            marginTop: 0,
            marginLeft: 10,
            textShadowColor: 'rgba(0, 0, 0, 0.8)', // darker shadow color
            textShadowOffset: {width: 4, height: 4}, // bigger shadow offset
            textShadowRadius: 8, // bigger shadow radius
          }}>
          {item.name}
        </Text>
      </View>
    </View>
  );

  const renderAllRestaurants = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Restaurant', {
          name: item.name,
          uri: item.uri,
          rating: item.rating,
          address: item.address,
          storeImage: item.storeImage,
        })
      }>
      <View style={styles.allContainer}>
        <Image source={{uri: item.uri}} style={styles.allImage} />
        <View style={{flex: 1, marginLeft: 7}}>
          <Text style={{marginTop: 7, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{color: 'gray'}}>{item.address}</Text>
          <View
            style={{alignItems: 'flex-end', marginTop: -25, marginRight: 10}}>
            <StarReview rating={item.rating} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCategories = ({item}) => (
    <View style={styles.container}>
      <Image
        source={{uri: item.categoriesImage}}
        style={styles.categoriesImage}
      />
      <Text style={{alignSelf: 'center'}}>{item.categoriesName}</Text>
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <View style={{flex: 1, marginBottom: -10}}>
        <Carousel
          data={images}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 40}
          autoplay={true}
          loop={true}
          autoplayInterval={4000}
          ref={isCarousel}
          onSnapToItem={index => setIndex(index)}
        />

        <Pagination
          dotsLength={images.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          containerStyle={{
            marginTop: -30,
          }}
          dotStyle={{
            width: 20,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#ffc045',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
      <View style={{flex: 1, marginBottom: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: 'black', fontSize: 18, margin: 2}}>
            Categories
          </Text>
        </View>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={items => items._id.toString()}
          renderItem={renderCategories}
        />
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: 'black', fontSize: 18, margin: 5}}>
            Best Restaurants of the Month
          </Text>
          <MaterialIcons
            // style={}
            name="local-restaurant"
            size={30}
            color="gold"
          />
        </View>
        <FlatList
          data={topRestaurants}
          renderItem={renderTopRestaurants}
          keyExtractor={items => items.id.toString()}
          horizontal
        />
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          <Text style={{color: 'black', fontSize: 18, margin: 5}}>
            Restaurants
          </Text>
          <MaterialIcons
            // style={}
            name="restaurant"
            size={30}
            color="gold"
          />
        </View>
        <FlatList
          data={allRestaurants}
          renderItem={renderAllRestaurants}
          keyExtractor={items => items.id.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: Dimensions.get('window').width - 40,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoriesImage: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  topImage: {
    width: 250,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  allImage: {
    width: 370,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  allContainer: {
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.08)',
    borderWidth: 0.3,
    borderRadius: 15,
    height: 200,
    // width: 370,
    marginHorizontal: 11,
    marginBottom: 25,
    borderColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  topContainer: {
    marginLeft: 10,
    borderRadius: 15,
    height: 180,
    borderColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
  container: {
    marginLeft: 10,
    // borderWidth: 0.4,
    borderRadius: 15,
    height: 100,
    borderColor: 'gray',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
});

export default Home;
