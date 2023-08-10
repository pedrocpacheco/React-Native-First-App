import { StatusBar, SafeAreaView} from 'react-native';
import Bicicleta from './src/views/Bicicleta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Bicicleta />
    </SafeAreaView>
  );
}

