import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
}
