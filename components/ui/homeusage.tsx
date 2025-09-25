import { View } from "react-native";
import { Text } from '@/components/ui/text';
import { TrendingUp } from "lucide-react-native";

type HomeUsageProps = {
  tab: string
  title: string
}

export default function HomeUsage({tab, title} : HomeUsageProps){
  return(
    <>
      <View className='w-full p-4 bg-secondary rounded-lg'>

        {tab === "usage" && (
          <>
            <View className='flex flex-row items-center gap-2 mb-4'>
              <View className='w-2 h-2 rounded-full bg-green-400'></View>
              <Text className='text-lg font-medium'>{title}</Text>
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
          </>
        )}

        {tab === "currentDevices" && (
          <>
            <View className="w-full flex flex-row justify-between items-center mb-2">
              <View className='flex flex-row items-center gap-2'>
                <View className='w-2 h-2 rounded-full bg-green-400'></View>
                <Text className='text-lg font-medium'>{title}</Text>
              </View>
              <View className='flex flex-row items-center gap-2'>
                <View className='w-2 h-2 rounded-full bg-green-400'></View>
                <Text className='text-xs text-green-400'>4 devices</Text>
              </View>
            </View>
            <View className="flex flex-col gap-1">
              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-1 flex-row gap-2 items-center">
                  <View className="h-2 w-2 rounded-full bg-red-500"></View>
                  <Text className="text-sm truncate">Refrigerator</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <TrendingUp color={"#22c55e"} size={20}/>      
                  <View className="flex flex-row items-center gap-1">
                    <Text className="text-sm w-10">(8%)</Text>
                    <Text className="text-xs text-gray-400 w-12">4.5 kW</Text>
                  </View>
                </View>
              </View>
              
              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-1 flex-row gap-2 items-center">
                  <View className="h-2 w-2 rounded-full bg-red-500"></View>
                  <Text className="text-sm truncate">Oven</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <TrendingUp color={"#22c55e"} size={20}/>      
                  <View className="flex flex-row items-center gap-1">
                    <Text className="text-sm w-10">(81%)</Text>
                    <Text className="text-xs text-gray-400 w-12">84.5 kW</Text>
                  </View>
                </View>
              </View>

              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-1 flex-row gap-2 items-center">
                  <View className="h-2 w-2 rounded-full bg-red-500"></View>
                  <Text className="text-sm truncate">Fan</Text>
                </View>
                <View className="flex flex-row items-center gap-2">
                  <TrendingUp color={"#22c55e"} size={20}/>      
                  <View className="flex flex-row items-center gap-1">
                    <Text className="text-sm w-10">(58%)</Text>
                    <Text className="text-xs text-gray-400 w-12">42.5 kW</Text>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  )
}