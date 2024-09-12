import HomeScreen from "@/screens/HomeScreen";
import PokemonScreen from "@/screens/PokemonScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootNavigationType = {
  Home: undefined;
  Pokemon: { url: string };
};

const Stack = createNativeStackNavigator<RootNavigationType>();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
