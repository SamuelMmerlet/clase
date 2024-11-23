import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const UserHeader = ({ avatar, username, timestamp }) => (
  <View style={styles.header}>
    <Image source={avatar} style={styles.avatar} />
    <View>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  </View>
);

const EventBanner = ({ image }) => (
  <Image source={image} style={styles.banner} />
);

const EventDetails = ({ title, description, details }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.details}>
      {details.map((detail, index) => (
        <Text key={index} style={styles.detail}>
          {detail}
        </Text>
      ))}
    </View>
  </View>
);

const ConcertCard = () => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        {/* Header */}
        <UserHeader
           avatar={require("./assets/Avatar.png")}
          username="Luis Lovo"
          timestamp="12 horas atrás"
        />
        {/* Banner */}
        <EventBanner image={require("./assets/br.png")} />
        {/* Details */}
        <EventDetails
          title="Bad Bunny en El Salvador"
          description="La gira del artista puertorriqueño lo ha llevado a diferentes ciudades de Latinoamérica, este sábado finalmente será el turno de nuestro país."
          details={[
            "📍 Estadio Cuscatlán",
            "📅 Dom, 30 de Mar",
            "🎟 Tickets disponibles",
          ]}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 12,
  },
  details: {
    margiznTop: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
});

export default ConcertCard;