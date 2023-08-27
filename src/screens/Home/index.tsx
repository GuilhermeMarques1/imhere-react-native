import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {

  function handleAddParticipant() {
    console.log("Participante Adicionado!");
  }

  function handleRemoveParticipant() {
    console.log("Participante Removido!");
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

      <Participant name="Guilherme" onRemove={handleRemoveParticipant}/>
      <Participant name="Camila" onRemove={handleRemoveParticipant}/>
      <Participant name="Zé da Manga" onRemove={handleRemoveParticipant}/>
    </View>
  );
}
