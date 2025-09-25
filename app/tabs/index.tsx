import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { THEME } from '@/lib/theme';
import { Link, Stack } from 'expo-router';
import { MoonStarIcon, StarIcon, SunIcon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import Svg, { Path } from 'react-native-svg';
import { Dimensions, Image, type ImageStyle, View } from 'react-native';
import { green } from 'react-native-reanimated/lib/typescript/Colors';
import HomeUsage from '@/components/ui/homeusage';
import Carousel from "react-native-reanimated-carousel";

const LOGO = {
  light: require('@/assets/images/react-native-reusables-light.png'),
  dark: require('@/assets/images/react-native-reusables-dark.png'),
};

const SCREEN_OPTIONS = {
  light: {
    title: 'Home',
    headerTransparent: true,
    headerShadowVisible: true,
    presentation: "transparentModal",
    headerStyle: { backgroundColor: THEME.light.background },
    headerRight: () => <ThemeToggle />,
  },
  dark: {
    title: 'Home',
    headerTransparent: true,
    headerShadowVisible: true,
    presentation: "transparentModal",
    headerStyle: { backgroundColor: THEME.dark.background },
    headerRight: () => <ThemeToggle />,
  },
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

const homeCards = [
  {
    type: "usage"
  },
  {
    type: "current_devices"
  }
];

const width = Dimensions.get("window").width;

export default function HomeScreen() {
  const { colorScheme } = useColorScheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <View className="flex flex-1 items-center p-6 bg-background">
        <View className='flex flex-row justify-end w-full mb-2'>
          <View className='flex flex-row gap-2'>
            <View className={`w-2 h-2 ${currentIndex === 0 ? "bg-white" : "bg-gray-500"} rounded-full`}></View>
            <View className={`w-2 h-2 ${currentIndex === 1 ? "bg-white" : "bg-gray-500"} rounded-full`}></View>
            <View className={`w-2 h-2 ${currentIndex === 2 ? "bg-white" : "bg-gray-500"} rounded-full`}></View>
            <View className={`w-2 h-2 ${currentIndex === 3 ? "bg-white" : "bg-gray-500"} rounded-full`}></View>
          </View>
        </View>
        <Carousel
          loop={false}
          width={width * 0.9}
          height={180}
          autoPlay={false}
          data={homeCards}
          scrollAnimationDuration={500}
          snapEnabled
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 1,   // shrink side cards
            parallaxScrollingOffset: -20,   // gap between cards
          }}
          onProgressChange={(_, absoluteProgress) => {
            setCurrentIndex(Math.round(absoluteProgress));
          }}
          renderItem={({ item }) => {
            switch(item.type){
              case "usage":
                return <HomeUsage tab='usage' title='Total Usage'/>
              case "current_devices":
                return <HomeUsage tab='currentDevices' title="Connected Devices" />
              default:
                return <Text>Hello</Text>;
            }
          }}
        />
      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className="rounded-full web:mx-4">
      <Icon as={THEME_ICONS[colorScheme ?? 'light']} className="size-5" />
    </Button>
  );
}
