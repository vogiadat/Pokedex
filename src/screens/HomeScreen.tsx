import AxiosApi from "@/configs/axios";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import RootLayout from "@/components/layout/RootLayout";
import PokemonList from "@/components/PokemonListCom";
import { LogoIcon, SearchIcon, SortIcon } from "@/constant/image.constant";
import { useDebouche } from "@/hooks/useDebouche";
import { AxiosResponse } from "axios";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen() {
  const [pokemonList, setPokemonList] = useState<IPokemonList>();
  const [search, setSearch] = useState("");
  const { deboucheValue, loading } = useDebouche({
    value: search,
    delay: 1000,
  });

  const getPokemonList = async () => {
    const res: AxiosResponse<IPokemonList> = await AxiosApi.get("/pokemon");
    setPokemonList(res.data);
    return res.data;
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  useEffect(() => {
    if (pokemonList && deboucheValue) {
      const oldData = pokemonList!.results;
      return setPokemonList({
        ...pokemonList,
        results: oldData.filter((item) => item.name === deboucheValue),
      });
    }
  }, [deboucheValue]);

  return (
    <RootLayout>
      <View className="bg-primary h-full p-1">
        {/* Header */}
        <View className="px-4 pt-8 pb-10">
          <View className="flex-row gap-4 items-center">
            <View className="h-6 w-6 overflow-hidden">
              <Image source={LogoIcon} className="h-full w-full object-cover" />
            </View>
            <Text className="font-bold text-2xl text-white">Pokédex</Text>
          </View>
          <View className="my-2" />
          <View className="flex-row gap-4 items-center h-10">
            <View className="bg-white flex-1 flex-row items-center h-full shadow-inner rounded-3xl px-4">
              <View className="h-4 w-4 overflow-hidden">
                <Image
                  source={SearchIcon}
                  className="h-full w-full object-cover"
                />
              </View>
              <TextInput
                placeholder="Search"
                onChangeText={(value) => handleSearch(value)}
                defaultValue={""}
                className="h-8 px-2"
              />
            </View>
            <TouchableOpacity className="h-full w-10 justify-center items-center rounded-full overflow-hidden bg-white shadow-inner">
              <Image source={SortIcon} className="h-6 w-6 object-cover" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Pokemon List */}
        <View className="bg-white shadow-inner shadow-black flex-1 rounded-lg pt-6 px-3">
          {pokemonList && <PokemonList pokemonList={pokemonList} />}
        </View>
      </View>
    </RootLayout>
  );
}
