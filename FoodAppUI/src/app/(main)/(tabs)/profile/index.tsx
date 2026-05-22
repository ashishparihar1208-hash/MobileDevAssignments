import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DrawerActions } from "@react-navigation/native";

import { useNavigation, router } from "expo-router";

import { useAuth } from "@/app/context/AuthContext";

import { COLORS } from "@/app/constants/colors";

import profile from "@/assets/images/profile.jpeg"

export default function ProfileScreen() {
  const navigation = useNavigation();

  const { logout } = useAuth();

  async function handleLogout() {
    await logout();

    router.replace("/(auth)/login");
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 24,
        }}
      >
        {/* Heading */}

        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: COLORS.text,
            marginBottom: 30,
          }}
        >
          Profile
        </Text>

        {/* Profile Card */}

        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 24,
            padding: 24,
            alignItems: "center",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,

            elevation: 4,
          }}
        >
          {/* Profile Image */}

          <Image
            source={profile}
            style={{
              width: 110,
              height: 110,
              borderRadius: 55,
              marginBottom: 18,
            }}
          />

          {/* User Name */}

          <Text
            style={{
              fontSize: 26,
              fontWeight: "bold",
              color: COLORS.text,
              marginBottom: 6,
            }}
          >
            Ashish
          </Text>

          {/* Subtitle */}

          <Text
            style={{
              fontSize: 16,
              color: COLORS.gray,
              marginBottom: 28,
            }}
          >
            Food Lover 🍔
          </Text>

          {/* Drawer Button */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.dispatch(DrawerActions.openDrawer())
            }
            style={{
              width: "100%",
              backgroundColor: COLORS.primary,
              paddingVertical: 18,
              borderRadius: 16,
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Open Drawer
            </Text>
          </TouchableOpacity>

          {/* Logout Button */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleLogout}
            style={{
              width: "100%",
              backgroundColor: "#222",
              paddingVertical: 18,
              borderRadius: 16,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}