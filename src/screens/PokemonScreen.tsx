import RootLayout from "@/components/layout/RootLayout";
import PokemonItemCom from "@/components/PokemonItemCom";
import {
  BackIcon,
  ImageDefault,
  LogoIcon,
  PokeballIcon,
} from "@/constant/image.constant";
import { RootNavigationType } from "@/navigation/StackNavigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

type RoutePropType = RouteProp<RootNavigationType, "Pokemon">;

export default function PokemonScreen() {
  const route = useRoute<RoutePropType>();
  const { url } = route.params;
  const [pokemon, setPokemon] = useState<IPokemonItem>();

  const getItem = async () => {
    const res = await axios.get(url);
    return res.data as IPokemonItem;
  };

  useEffect(() => {
    getItem().then(setPokemon);
  }, [url]);

  return !pokemon ? (
    <RootLayout>
      <View className={`h-full flex-1`}>
        <Text>Loading...</Text>
      </View>
    </RootLayout>
  ) : (
    <PokemonItemCom pokemon={pokemon} />
  );
}
