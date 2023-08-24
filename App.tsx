import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#131016',
      padding: 24,
    }}>

      <Text style={{
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
      }}>
        Nome do Evento
      </Text>

      <Text
        style={{
          color: '#6b6b6b',
          fontSize: 16,
        }}
      >
        Sexta-feira, 25 de agosto de 2023
      </Text>
    </View>
  );
}
