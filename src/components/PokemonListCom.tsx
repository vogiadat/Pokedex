import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { ImageDefault } from "@/constant/image.constant";
import { RootNavigationType } from "@/navigation/StackNavigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface Props {
  pokemonList: IPokemonList;
}

export default function PokemonList({ pokemonList }: Props) {
  return (
    <FlatList
      data={pokemonList.results}
      numColumns={3}
      keyExtractor={(item) => item.name}
      renderItem={(item) => <PokemonItem id={item.item.url} />}
    />
  );
}

export function PokemonItem({ id }: { id: string }) {
  const { navigate } = useNavigation<NavigationProp<RootNavigationType>>();
  const [pokemon, setPokemon] = useState<IPokemonItem>();

  function getItem() {
    axios
      .get(id)
      .then((res) => setPokemon(res.data))
      .catch(console.log);
  }

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <Pressable
      className="basis-1/3 overflow-hidden"
      onPress={() => navigate("Pokemon", { url: id })}
    >
      <View className="m-1 bg-white shadow-md shadow-black rounded-lg overflow-hidden">
        <View className="h-[108px] flex relative">
          <View className="flex-1">
            <Text className="text-right text-xs px-2 py-1">#{pokemon?.id}</Text>
          </View>
          <View className="h-2/5 w-full bg-background rounded-lg items-center justify-end">
            <Text className="py-1 text-sm capitalize">
              {pokemon?.name ?? "Pokemon Name"}
            </Text>
          </View>
          <View className="absolute z-10 inset-0 w-full h-full justify-center items-center">
            <Image
              source={
                pokemon?.sprites.other["official-artwork"].front_default
                  ? {
                      uri: pokemon.sprites.other["official-artwork"]
                        .front_default,
                      height: "50%",
                      width: "50%",
                    }
                  : ImageDefault
              }
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
