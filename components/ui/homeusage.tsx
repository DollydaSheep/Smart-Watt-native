import { View } from "react-native";
import { Text } from '@/components/ui/text';
import { TrendingUp } from "lucide-react-native";


export default function HomeUsage(){
  return(
    <>
      <View className='w-full p-4 bg-secondary rounded-lg'>
        <View className='flex flex-row items-center gap-2 mb-4'>
          <View className='w-2 h-2 rounded-full bg-green-400'></View>
          <Text className='text-lg font-medium'>Total Usage</Text>
        </View>
        <Text className='text-4xl font-bold mb-1'>10.5 kW</Text>
        <View className='flex flex-row justify-between'>
          <View className='flex flex-row gap-1 items-center'>
            <TrendingUp color="#22c55e" size={20} />
            <Text className='text-green-400 text-sm'>Optimized Efficiency</Text>
          </View>
          <View className='flex flex-row gap-2 items-center'>
            <View className='w-2 h-2 rounded-full bg-green-400'></View>
            <Text className='text-green-400 text-sm'>0 Anomalies</Text>
          </View>
        </View>
      </View>
    </>
  )
}