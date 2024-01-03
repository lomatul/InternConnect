import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold', // Change font for heading
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica', // Change font for subheading
  },
  section: {
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'left', // Align titles to the left
    fontFamily: 'Helvetica-Bold', // Change font for titles
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left', // Align subtitles to the left
    fontFamily: 'Helvetica', // Change font for subtitles
  },
  response: {
    fontSize: 12,
    textAlign: 'left', // Align answers to the left
    fontFamily: 'Helvetica', // Change font for answers
    marginLeft: 20, // Add left margin for a tab space
  },
});

const PDFDocument = ({ interninform }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Intern's Basic Information</Text>
        <Text style={styles.subheading}>Intern's Information from Evaluator</Text>
      </View>

      {Object.entries(interninform).map(([key, { Subtittle, Answer }]) => (
        <View key={key} style={styles.section}>
          <Text style={styles.title}>{key}</Text>
          <Text style={styles.subtitle}>{Subtittle}</Text>
          <Text style={styles.response}>
            {'\t'}Response: {Answer}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default PDFDocument;
