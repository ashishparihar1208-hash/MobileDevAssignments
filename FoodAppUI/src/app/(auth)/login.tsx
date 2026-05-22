import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "@/app/context/AuthContext";

import { COLORS } from "@/app/constants/colors";

import logoImage from "../../../assets/images/login.png";

export default function LoginScreen() {
  const { login } = useAuth();

  async function handleLogin() {
    await login();
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
          justifyContent: "center",
          padding: 24,
        }}
      >
        {/* Logo */}

        <View
          style={{
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Image
            source={logoImage}
            style={{
              width: 120,
              height: 120,
              borderRadius: 30,
              marginBottom: 20,
            }}
          />

          <Text
            style={{
              fontSize: 36,
              fontWeight: "bold",
              color: COLORS.text,
              marginBottom: 10,
            }}
          >
            FoodApp
          </Text>

          <Text
            style={{
              fontSize: 18,
              color: COLORS.gray,
              textAlign: "center",
            }}
          >
            Order your favorite meals quickly and easily
          </Text>
        </View>

        {/* Login Card */}

        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: 28,
            padding: 28,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 5,

            elevation: 5,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              color: COLORS.text,
              marginBottom: 12,
            }}
          >
            Welcome Back 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: COLORS.gray,
              marginBottom: 30,
            }}
          >
            Login to continue ordering delicious food
          </Text>

          {/* Login Button */}

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleLogin}
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 18,
              borderRadius: 18,
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
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}