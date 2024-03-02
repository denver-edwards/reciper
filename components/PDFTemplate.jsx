import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

export default function PDFTemplate({ recipe }) {
  return (
    <Document>
      <Page size="Letter" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{recipe.title}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Ingredients</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={[styles.text, styles.ingredient]}>
              - {ingredient}
            </Text>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Instructions</Text>
          <Text style={styles.text}>{recipe.instructions}</Text>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    margin: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    margin: 10,
    textAlign: "justify",
  },
  ingredients: {
    marginLeft: 15,
  },
  ingredient: {
    fontSize: 14,
    marginTop: 5,
  },
});
