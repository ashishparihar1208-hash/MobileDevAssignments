import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@/app/components/CustomerDrawer";
import { COLORS } from "@/app/constants/colors";

export default function ProfileDrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: COLORS.primary,
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Profile",
        }}
      />

      <Drawer.Screen
        name="my-orders"
        options={{
          title: "My Orders",
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />

      <Drawer.Screen
        name="help"
        options={{
          title: "Help",
        }}
      />
    </Drawer>
  );
}