import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import profile from "@/assets/images/profile.jpeg";
import { View, Text, Image } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          padding: 20,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
  source={profile}
  style={{
    width: 80,
    height: 80,
    borderRadius: 40,
  }}
/>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Ashish
        </Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}