import { Pressable, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from '@/components/ui/text';
import { Lightbulb, TrendingUp, Zap } from "lucide-react-native";
import { router } from "expo-router";

type HomeUsageProps = {
  tab: string
  title: string
}

export default function HomeUsage({tab, title} : HomeUsageProps){
  return(
    <>
      <Pressable className='w-full max-h-40 flex-1 p-4 bg-secondary active:bg-secondary/80 rounded-lg' 
        onPress={()=>{tab === "currentDevices" && router.push('/tabs/devices')}}
      >

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
            <View className="w-full flex flex-row justify-between items-center mb-1">
              <View className='flex flex-row items-center gap-2'>
                <View className='w-2 h-2 rounded-full bg-green-400'></View>
                <Text className='text-lg font-medium'>{title}</Text>
              </View>
              <View className='flex flex-row items-center gap-2'>
                <View className='w-2 h-2 rounded-full bg-green-400'></View>
                <Text className='text-xs text-green-400'>4 devices</Text>
              </View>
            </View>
            <View className="flex flex-col">
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

              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-1 flex-row gap-2 items-center">
                  <View className="h-2 w-2 rounded-full bg-white"></View>
                  <Text className="text-sm truncate">Others...</Text>
                </View>
                <View className="flex flex-row items-center gap-2">     
                  <View className="flex flex-row items-center gap-1">
                    <Text className="text-sm w-10">(70%)</Text>
                    <Text className="text-xs text-gray-400 w-12"></Text>
                  </View>
                </View>
              </View>
            </View>
            <Text className="text-[8px] mt-0.5 text-right text-gray-400">Tap for more info</Text>
          </>
        )}

        {tab === "aiInsights" && (
          <>
            <View className="w-full flex flex-row justify-between items-center mb-2">
              <View className='flex flex-row items-center gap-2'>
                <View className='w-2 h-2 rounded-full bg-green-400'></View>
                <Text className='text-lg font-medium'>{title}</Text>
              </View>
            </View>
            <View className="p-2">
              <View className="flex flex-row gap-2">
                <Lightbulb color={"#ffdf20"} size={20} />
                <Text className="text-yellow-300 font-medum">Energy Saving Tip</Text>
              </View>
            </View>
          </>
        )}

        {tab === "powerLimit" && (
          <>
            <View className="w-full flex flex-row justify-between items-center mb-4">
              <View className='flex flex-row items-center gap-4'>
                <View className="p-3 bg-green-400 rounded-full">
                  <Zap color={"#fff"} />
                </View>
                <View>
                  <Text className="text-xl font-bold">15.0 kW</Text>
                  <Text className="text-sm text-gray-400">{title}</Text>
                </View>
                <TextInput className="bg-white flex-1 rounded-md" keyboardType="numeric" value={"15"}/>
                <Text className="text-gray-400">kW</Text>
              </View>
            </View>
            <View className="w-full border-b border-gray-600/50 mb-3 rounded-lg"></View>
            <View className="flex gap-2">
              <View className="flex flex-row justify-between">
                <Text className="text-gray-400">Usage</Text>
                <Text className="text-green-400">58% of limit</Text>
              </View>
              <View className="w-full py-1 bg-gray-600 rounded-md overflow-hidden">
                <View className="w-[58%] bg-green-400 h-2 absolute"></View>
              </View>
            </View>
          </>
        )}
      </Pressable>
    </>
  )
}