import { Text } from '@/components/ui/text';
import { View } from "react-native"
import { Icon } from "./icon"
import { ChartNoAxesColumnIncreasing, CreditCard, House, Monitor, Settings } from "lucide-react-native"
import { Href, Link } from 'expo-router';


const Navbar = () => {

  const navItems = [
    { 
      path: "/", 
      icon: House,
      label: 'Home'
    },
    { 
      path: "/Statistics", 
      icon: ChartNoAxesColumnIncreasing,
      label: 'Stats'
    },
    { 
      path: "/Billings", 
      icon: CreditCard,
      label: 'Billing'
    },
    { 
      path: "/", 
      icon: Monitor,
      label: 'Devices'
    },
    { 
      path: "/settings", 
      icon: Settings,
      label: 'Settings'
    }
  ];

  return (
    <>
      <View className='w-full absolute bottom-0 border-t border-white h-20 bg-black flex flex-row items-center justify-around'>
        {navItems.map((item, index) => (
          <Link href={item.path as Href} key={index}>
            <View className='flex gap-1 items-center'>
              <Icon as={item.icon} className='size-6'/>
              <Text className='text-xs'>{item.label}</Text>
            </View>
          </Link>
        ))}
      </View>
    </>
  )
}

export default Navbar;