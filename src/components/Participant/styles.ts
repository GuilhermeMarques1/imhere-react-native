import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "100%",
    backgroundColor: "#1F1E25",
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    flex: 1,
    marginLeft: 16,
  },
  button: {
    backgroundColor: '#E23C44',
    height: 56,
    width: 56,
    borderRadius: 5,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF"
  }
});
