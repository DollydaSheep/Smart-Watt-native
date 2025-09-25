import Navbar from '@/components/ui/navbar';
import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ChartNoAxesColumnIncreasing, CreditCard, House, Monitor, Settings } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { colorScheme } = useColorScheme();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme ?? 'light']}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Tabs screenOptions={{ tabBarActiveTintColor: "white" }}>
        <Tabs.Screen 
          name='index'
          options={{
            title: "",
            tabBarLabel: "Home",
            tabBarIcon: ({color, size}) => (
              <House 
                className='size-6'
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='statistics'  
          options={{
            title:"Statistics",
            tabBarLabel: "Stats",
            tabBarIcon: ({color, size}) => (
              <ChartNoAxesColumnIncreasing 
                className='size-6'
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='billings'  
          options={{
            title: "Billings",
            tabBarLabel: "Billings",
            tabBarIcon: ({color, size}) => (
              <CreditCard 
                className='size-6'
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='devices'  
          options={{
            title: "Devices",
            tabBarLabel: "Devices",
            tabBarIcon: ({color, size}) => (
              <Monitor 
                className='size-6'
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='settings'  
          options={{
            title: "Settings",
            tabBarLabel: "Settings",
            tabBarIcon: ({color, size}) => (
              <Settings 
                className='size-6'
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen 
          name='+not-found'
          options={{
            href: null
          }}
        />
      </Tabs>
      <PortalHost />
    </ThemeProvider>
  );
}
