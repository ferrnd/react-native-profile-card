import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.caixa}>
        <View style={styles.icon}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/e1/6d/81/e16d81542882cefe468896ca845c0a3a.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Fernando Santos</Text>
        <Text>Full Stack Developer</Text>
        <View style={styles.row}>
          <FontAwesome name="github" size={55} color="black" />
          <FontAwesome name="linkedin-square" size={55} color="#0077b5" />
          <MaterialIcons name="email" size={55} color="#ff7c7c" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#000000",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 7,
  },

  caixa: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 30,
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 20,
  },

  icon: {
    justifyContent: "center",
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    width: 110,
    height: 110,
    borderRadius: 100,
    overflow: "hidden",
    marginBottom: 20,
  },
});
