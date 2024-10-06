import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';

import {
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from 'react-native-heroicons/solid';
import {themeColors} from '../theme';
import {categories, featuredFruits} from '../constants';
import {useState} from 'react';
import FruitCard from '../components/fruitCard';
import FruitCardSales from '../components/fruitCardSales';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Oranges');
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      {/* top bar */}
      <View className="flex-row items-center justify-between mx-5">
        <Bars3CenterLeftIcon size="30" color="black" />
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <ShoppingCartIcon size="25" color="orange" />
        </TouchableOpacity>
      </View>

      {/* categories */}
      <View className="mt-4">
        <Text
          style={{color: themeColors.text}}
          className="ml-5 text-2xl font-medium tracking-widest">
          Seasonal
        </Text>
        <Text
          style={{color: themeColors.text}}
          className="ml-5 text-3xl font-semibold">
          Fruits and Vegatables
        </Text>
        <ScrollView
          horizontal
          className="px-5 mt-8"
          showsHorizontalScrollIndicator={false}>
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            let textClass = `text-xl ${isActive ? 'font-bold' : ''}`;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveCategory(category)}
                className="relative mr-8">
                <Text style={{color: themeColors.text}} className={textClass}>
                  {category}
                </Text>
                {isActive ? (
                  <Text className="font-extrabold text-orange-400 -mt-3 ml-2">
                    __ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Fruits Carousel */}
      <View className="mt-8">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {featuredFruits.map((fruit, index) => (
            <FruitCard fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>

      {/* hot sales */}
      <View className="mt-8 pl-5 space-y-1">
        <Text style={{color: themeColors.text}} className="text-xl font-bold">
          Hot Sales
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{overflow: 'visible'}}>
          {[...featuredFruits].reverse().map((fruit, index) => (
            <FruitCardSales fruit={fruit} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
