import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
    <StatusBar style="light" />
      <Stack>
      <Stack.Screen 
      name="(tabs)" 
      options={{
        headerTitle: "Home",
        headerLeft: () => <></>,
        headerShown: false,
      }}
      />
      <Stack.Screen 
      name="not-found" 
      options={{
        headerShown: false,
      }}
      />
    </Stack>
    </>
  );
}
