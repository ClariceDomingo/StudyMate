import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit"; 
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";

const ProfileScreen = ({ route }) => {
  const [tasks, setTasks] = React.useState([]);
  const [userName, setUserName] = React.useState("Keep plans for 44 days");
  const navigation = useNavigation();

  React.useEffect(() => {
    if (route.params?.updatedTasks) {
      setTasks(route.params.updatedTasks);
    }
    if (route.params?.name && route.params?.username) {
      setUserName(`${route.params.name} (${route.params.username})`);
    }
  }, [route.params?.updatedTasks, route.params?.name, route.params?.username]);

  const calculateProgress = () => {
    const completedTasks = tasks.filter((task) => task.status === "Completed").length;
    const totalTasks = tasks.length;

    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };

  const navigateToLoginForm = () => {
    navigation.navigate("LoginForm");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <Image
          source={require('../../../../assets/profile.png')}
          style={styles.userPhoto}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <TouchableOpacity onPress={navigateToLoginForm}>
            <Text style={styles.userFollowers}>Enter Username</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.tasksList}>
          <Text style={styles.tasksHeading}>COMPLETED</Text>
          <Text style={styles.taskCount}>
            {tasks.filter((task) => task.status === "Completed").length}
          </Text>
        </View>

        <View style={styles.tasksList}>
          <Text style={styles.tasksHeading}>PENDING</Text>
          <Text style={styles.taskCount}>
            {tasks.filter((task) => task.status === "Pending").length}
          </Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        {/* Replace LineChart with BarChart */}
        <BarChart
          data={{
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
              {
                data: [
                  tasks.filter((task) => task.status === "Completed").length,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width - 40}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#f4f4f4",
            backgroundGradientTo: "#f4f4f4",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 139, 139, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
        />
        <Text style={styles.progressText}>Overall Progress:</Text>
        <View style={styles.progressCircleContainer}>
          <Svg height="150" width="150">
            <Circle cx="75" cy="75" r="70" fill="transparent" stroke="#008B8B" strokeWidth="10" />
            <SvgText
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="20"
              fontWeight="bold"
              fill="#008B8B"
            >
              {`${calculateProgress().toFixed(1)}%`}
            </SvgText>
          </Svg>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  userCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  userFollowers: {
    color: "#999",
  },
  tasksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tasksList: {
    flex: 1,
    width: "48%",
    alignItems: "center",
  },
  taskCount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tasksHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },
  chartContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    alignSelf: "center",
  },
  progressCircleContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default ProfileScreen;
