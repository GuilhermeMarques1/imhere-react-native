import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = ['Guilherme', 'Ana', 'Laura', 'Camila', 'Julia', 'Joao', 'Maria', 'Pedro', 'Claudio', 'Jorge', 'Matheus', 'Fabiana'];

  function handleAddParticipant() {
    console.log("Participante Adicionado!");
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Participante ${name} foi Removido!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta-feira, 25 de agosto de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {
          participants.map((participant, index) => (
            <Participant 
              key={index} 
              name={participant} 
              onRemove={() => handleRemoveParticipant(participant)}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}
