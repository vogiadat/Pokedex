import RootLayout from "@/components/layout/RootLayout";
import { BackIcon, LogoIcon } from "@/constant/image.constant";
import { RootNavigationType } from "@/navigation/StackNavigation";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { useState, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";

type RoutePropType = RouteProp<RootNavigationType, "Pokemon">;

export default function PokemonScreen() {
  const route = useRoute<RoutePropType>();
  const { url } = route.params;
  const { goBack } = useNavigation();
  const [pokemon, setPokemon] = useState<IPokemonItem>();
  const [bgColor, setBgColor] = useState("background");

  function getItem() {
    axios
      .get(url)
      .then((res) => {
        const data = res.data as IPokemonItem;
        setPokemon(data);
        const color =
          data.types.find((item) => item.slot === 1)?.type.name || "background";
        setBgColor(`bg-${color}`);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getItem();
  }, [url]);

  return !pokemon ? (
    <Text>Loading...</Text>
  ) : (
    <RootLayout>
      <View className={`${bgColor} h-full pt-8`}>
        <View className="p-4">
          <View className="flex-row gap-4 items-center">
            <Pressable
              className="h-8 w-8 overflow-hidden"
              onPress={() => goBack()}
            >
              <Image source={BackIcon} className="h-full w-full object-cover" />
            </Pressable>
            <Text className="font-bold text-2xl text-white capitalize">
              {pokemon.name}
            </Text>
            <Text className="font-bold text-xs  text-white ">
              #{pokemon.id}
            </Text>
          </View>
        </View>
      </View>
    </RootLayout>
  );
}
