import {
  BackIcon,
  PokeballIcon,
  ImageDefault,
  WeightIcon,
  RulerIcon,
} from "@/constant/image.constant";
import { View, TouchableOpacity, Text } from "react-native";
import { useMemo } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RootLayout from "@/components/layout/RootLayout";
import { PokemonType } from "@/constant/pokemon.constant";

interface Props {
  pokemon: IPokemonItem;
}

export default function PokemonItemCom({ pokemon }: Props) {
  const { goBack } = useNavigation();

  const BaseStats = {
    HP: "hp",
    ATK: "attack",
    DEF: "defense",
    SATK: "special-attack",
    SDEF: "special-defense",
    SPD: "speed",
  };

  const setBgColor = useMemo(() => {
    const firstType = pokemon.types.find((item) => item.slot === 1);
    return PokemonType[
      (firstType?.type.name ?? "foreground") as keyof typeof PokemonType
    ];
  }, [pokemon]);

  const baseStats = pokemon.stats.map((item) => ({
    label: item.stat.name,
    value: item.base_stat,
  }));

  return (
    <RootLayout>
      <View className={`h-full pt-4`} style={{ backgroundColor: setBgColor }}>
        <View className={`p-1 h-full w-full`}>
          <View className="h-1/3 relative">
            <View className="py-4 px-6 flex-row gap-4 items-center">
              <TouchableOpacity
                className="h-8 w-8 overflow-hidden"
                onPress={goBack}
              >
                <Image
                  source={BackIcon}
                  className="h-full w-full object-cover"
                />
              </TouchableOpacity>
              <Text className="flex-1 font-bold text-2xl text-white capitalize">
                {pokemon.name}
              </Text>
              <Text className="font-bold text-lg text-white ">
                #{pokemon.id}
              </Text>
            </View>
            <View className="absolute z-0 bottom-2 right-2  justify-center items-center">
              <Image source={PokeballIcon} />
            </View>
          </View>
          <View className="h-2/3 px-5 w-full bg-white shadow-2xl shadow-bug rounded-lg relative">
            <View className="absolute z-20 -top-[60%] w-full h-full justify-center items-center">
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
                style={{ objectFit: "contain" }}
              />
            </View>
            <View className="mt-10">
              {/* Type */}
              <View className="w-full flex-row justify-center">
                {pokemon.types.map(({ type }) => (
                  <Text
                    key={type.name}
                    className={`bg-${type.name} py-1 px-3 mx-2 rounded-2xl capitalize font-bold text-white`}
                    style={{
                      backgroundColor:
                        PokemonType[
                          (type.name ??
                            "foreground") as keyof typeof PokemonType
                        ],
                    }}
                  >
                    {type.name}
                  </Text>
                ))}
              </View>
            </View>
            {/* About */}
            <View className="mt-4">
              <Text
                className="font-extrabold text-xl text-center"
                style={{ color: setBgColor }}
              >
                About
              </Text>
              <View className="mt-4 w-full flex-row justify-between">
                <View className="basis-1/3 justify-around gap-y-2">
                  <View className="flex-row gap-x-2 items-center justify-center">
                    <View className="w-6 h-6">
                      <Image source={WeightIcon} className="w-full h-full" />
                    </View>
                    <Text className="text-sm text-center">
                      {pokemon.weight} kg
                    </Text>
                  </View>
                  <Text className="text-sm text-center text-foreground">
                    Weight
                  </Text>
                </View>
                <View className="basis-1/3 justify-around gap-y-2 border-x border-foreground">
                  <View className="flex-row gap-x-2 items-center justify-center">
                    <View className="w-6 h-6">
                      <Image source={RulerIcon} className="w-full h-full" />
                    </View>
                    <Text className="text-sm text-center">
                      {pokemon.height} m
                    </Text>
                  </View>
                  <Text className="text-sm text-center text-foreground">
                    Height
                  </Text>
                </View>
                <View className="basis-1/3 justify-around gap-y-2">
                  <View className="items-center justify-center">
                    {pokemon.abilities.map(({ ability }) => (
                      <Text
                        key={ability.name}
                        className="text-sm text-center font-medium capitalize"
                      >
                        {ability.name}
                      </Text>
                    ))}
                  </View>
                  <Text className="text-sm text-center text-foreground">
                    Moves
                  </Text>
                </View>
              </View>
              <Text className="mt-4 text-sm text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                quia harum dolorem magni pariatur reprehenderit, maiores sint
                odio sunt rerum libero fugiat sit vel quam, dolore enim totam.
                Sunt, commodi.
              </Text>
            </View>
            {/* Base Stats */}
            <View className="mt-4">
              <Text
                className="font-extrabold text-xl text-center"
                style={{ color: setBgColor }}
              >
                Base Stats
              </Text>
              <View className="mt-2 w-full flex-row justify-between">
                <View className="basis-1/6 pr-3 border-r border-foreground">
                  {Object.keys(BaseStats).map((item) => (
                    <Text
                      key={item}
                      className="font-extrabold text-lg text-right"
                      style={{ color: setBgColor }}
                    >
                      {item}
                    </Text>
                  ))}
                </View>
                <View className="basis-5/6 pl-1">
                  {baseStats.map((item) => (
                    <View
                      key={item.label}
                      className="flex-row gap-x-2 items-center"
                    >
                      <Text className="basis-2/12 text-lg text-center">
                        {item.value}
                      </Text>
                      <View className="flex-1 bg-light rounded-2xl h-2 relative overflow-hidden">
                        <View
                          className="absolute z-10 inset-0 h-full"
                          style={{
                            backgroundColor: setBgColor,
                            width: item.value,
                          }}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </RootLayout>
  );
}
