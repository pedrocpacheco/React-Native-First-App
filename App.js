import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Bicycle from './src/views/Bicycle/Bicycle';
import mock from "./src/mocks/bicycle";

export default function App() {
  const [fontLoaded] = useFonts({ 
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
   })

   if(!fontLoaded){
    return <View />
   }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Bicycle {...mock}/>
    </SafeAreaView>
  );
}
