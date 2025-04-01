import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const SPACING = 10;

const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  // Função para renderizar cada item do carrossel
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            {item.description}
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.cardDate}>{item.date}</Text>
            <TouchableOpacity style={styles.readMoreButton}>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  // Função para lidar com a mudança de slides
  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // Função para ir para o próximo slide
  const goToNext = () => {
    if (activeIndex < data.length - 1) {
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };

  // Função para ir para o slide anterior
  const goToPrev = () => {
    if (activeIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <TouchableOpacity
          style={[styles.navButton, { left: 10 }]}
          onPress={goToPrev}
          disabled={activeIndex === 0}
        >
          <Ionicons
            name="chevron-back-circle"
            size={36}
            color={activeIndex === 0 ? "#ccc" : "#007AFF"}
          />
        </TouchableOpacity>

        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + SPACING}
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={styles.flatListContent}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />

        <TouchableOpacity
          style={[styles.navButton, { right: 10 }]}
          onPress={goToNext}
          disabled={activeIndex === data.length - 1}
        >
          <Ionicons
            name="chevron-forward-circle"
            size={36}
            color={activeIndex === data.length - 1 ? "#ccc" : "#007AFF"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              { backgroundColor: index === activeIndex ? "#007AFF" : "#ccc" },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 20,
    color: "#333",
  },
  carouselContainer: {
    position: "relative",
    height: 320,
  },
  flatListContent: {
    paddingHorizontal: (width - CARD_WIDTH) / 2,
  },
  card: {
    width: CARD_WIDTH,
    height: 300,
    marginHorizontal: SPACING / 2,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    flex: 1,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDate: {
    fontSize: 12,
    color: "#999",
  },
  readMoreButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#007AFF",
    borderRadius: 20,
  },
  readMoreText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    zIndex: 10,
    marginTop: -18,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default Carousel;
