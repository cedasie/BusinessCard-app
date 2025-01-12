import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProjectCard from "./ProjectCard";

export default function App() {
  const name = "Cedric";
  const links = {
    github: "cedasie",
    email: "ced@cedcreate.com",
    x: "cedcreate",
  };

  const onContactMe = () => {
    Linking.openURL("mailto:ced@cedcreate.com");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={{
                uri: "https://wallpaperaccess.com/full/1338376.jpg",
              }}
              style={{ width: "100%", aspectRatio: 16 / 9 }}
            />
            <Image
              source={require("./assets/cedo.jpg")}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: "white",
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{name}</Text>
            <Text style={{ color: "teal" }}>Web & Mobile Developer</Text>

            <View style={{ flexDirection: "row", marginVertical: 10, gap: 10 }}>
              {links.github && (
                <FontAwesome6 name="github" size={24} color="black" />
              )}
              {links.x && (
                <FontAwesome6 name="x-twitter" size={24} color="black" />
              )}
              {links.email && (
                <FontAwesome6 name="at" size={24} color="black" />
              )}
            </View>

            <Button title="Contact me" onPress={onContactMe} />

            <Text style={{ padding: 10, fontSize: 16, lineHeight: 20 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              voluptatibus ratione dolor in maiores qui corporis iure voluptates
              rem nemo? Id aliquam recusandae labore perferendis quam laborum
              porro iusto illum.
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              {/* <ProjectCard
                name="Password Generator"
                image={require("./assets/projects/project1.png")}
              /> */}
              <ProjectCard
                name="Passord Generator"
                image={require("./assets/projects/project2.png")}
              />
              <ProjectCard
                name="Landing page"
                image={require("./assets/projects/project3.png")}
              />
              <ProjectCard
                name="Todo App"
                image={require("./assets/projects/project4.jpeg")}
              />
            </ScrollView>

            <StatusBar style="light" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
