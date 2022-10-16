import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default ProfileButton = () => {
  const nav = useNavigation();
  return (
    <FontAwesome
      name="user-circle"
      size={25}
      color="white"
      onPress={() => {
        nav.navigate("Profile");
      }}
    />
  );
};
