import { StatusBar, SafeAreaView, View } from 'react-native';
import Bicicleta from './src/views/Bicicleta';
import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontLoaded] = useFonts({ 
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
   })

   if(!fontLoaded){
    return <View />
   }

  return (
    <SafeAreaView>
      <StatusBar />
      <Bicicleta />
    </SafeAreaView>
  );
}

