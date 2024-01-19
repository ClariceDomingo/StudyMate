import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar, Platform, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = ({ route }) => {
  const [tasks, setTasks] = React.useState([]);
  const navigation = useNavigation();

  React.useEffect(() => {
    if (route.params?.updatedTasks) {
      setTasks(route.params.updatedTasks);
    }
  }, [route.params?.updatedTasks]);

  const handleToggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" }
        : task
    );
    setTasks(updatedTasks);
  };

  const chartData = {
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
  };

  const navigateToLoginForm = () => {
    navigation.navigate('LoginForm'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <Image
          source={require('../../../../assets/profile.png')}
          style={styles.userPhoto}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Keep plans for 44 days</Text>
          <TouchableOpacity onPress={navigateToLoginForm}>
            <Text style={styles.userFollowers}>Click to login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.tasksList}>
          <Text style={styles.tasksHeading}>Completed Tasks</Text>
          <Text style={styles.taskCount}>{tasks.filter((task) => task.status === "Completed").length}</Text>
        </View>

        <View style={styles.tasksList}>
          <Text style={styles.tasksHeading}>Pending Tasks</Text>
          <Text style={styles.taskCount}>{tasks.filter((task) => task.status === "Pending").length}</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
        <LineChart
          data={chartData}
          width={Dimensions.get("window").width - 40}
          height={200}
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
});

export default ProfileScreen;
