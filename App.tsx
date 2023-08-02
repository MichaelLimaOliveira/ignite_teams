import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Players } from '@screens/Players';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Players /> : <Loading />}
      <StatusBar
        barStyle="default"
        backgroundColor="#29292E"
        networkActivityIndicatorVisible={true}
      />
    </ThemeProvider>
  );
}


