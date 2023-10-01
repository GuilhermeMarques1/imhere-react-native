import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    const participantRemoveSpace = participantName.trim();

    if(!participantRemoveSpace) return;

    if(participants.includes(participantRemoveSpace)) {
      return Alert.alert("Participante já existe", "Já existe um participante com esse nome adicionado na lista");
    }

    setParticipants(prevState => [...prevState, participantRemoveSpace]);
    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Tem certeza que deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);

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
          onChangeText={text => setParticipantName(text)}
          value={participantName}
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

    
      {/* Usando ScrollView  */}
      {/* <ScrollView>
        {
          participants.map((participant, index) => (
            <Participant 
              key={index} 
              name={participant} 
              onRemove={() => handleRemoveParticipant(participant)}
            />
          ))
        }
      </ScrollView> */}


      {/* // Usando Flat List: */}
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item} 
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes à sua lista de presença!
          </Text>
        )}
      />

    </View>
  );
}
