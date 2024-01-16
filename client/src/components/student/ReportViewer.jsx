import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24, // Adjust the font size if needed
    fontWeight: 'heavy', // Make the text bold
    marginLeft: 10,
    fontFamily:'Helvetica-Bold' // Adjust the margin as needed
  },
  logo: {
    width: 55, // Adjust the width of the logo
    height: 55, // Adjust the height of the logo
  },  anotherLogo: {
    width: 90,
    height: 55,
    marginLeft: 'auto', // Pushes the logo to the right
  },
  studentInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    border: '1px solid #000',
  },
  row: {
    flexDirection: 'row',
    borderBottom: '1px solid #000',
  },
  headerCell: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    flex: 1,
    textAlign: 'center',
    borderRight: '1px solid #000',
  },
  cell: {
    padding: 8,
    flex: 1,
    textAlign: 'center',
    borderRight: '1px solid #000',
  },
});

const ReportPdf = ({Marks}) => {
  return (
    <PDFViewer style={{ width: '100%', height: '75vh' }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Image style={styles.logo} src="IUT_logo.png" />
            <Text style={styles.headerText}>Islamic University of Technology</Text>
            <Image style={styles.anotherLogo} src="OIC.png" />
          </View>
          <View style={styles.studentInfo}>
            <View style={{ marginRight: 20 }}>
              <Text>Student Name: {Marks.name}</Text>
              <Text>Student ID: {Marks.Id}</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.headerCell}>Criteria</Text>
              <Text style={styles.headerCell}>Values</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Mentor Assessment Mark</Text>
              <Text style={styles.cell}>{Marks.evaluatedMentorMarks}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Report Mark</Text>
              <Text style={styles.cell}>{Marks.internshipReportMarks}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Presentation Mark</Text>
              <Text style={styles.cell}>{Marks.presentationMarks}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cell}>Final Grade</Text>
              <Text style={styles.cell}>{Marks.finalGrade}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ReportPdf;
