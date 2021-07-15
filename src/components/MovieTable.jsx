import { Document, Page, Text, View } from '@react-pdf/renderer';
import React from 'react';
import moment from "moment";



const POSTER_PATH = "https://image.tmdb.org/t/p/w154";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        '@media max-width: 400': {
            flexDirection: 'column',
        },
    },
    leftColumn: {
        flexDirection: 'column',
        width: 170,
        marginLeft: 30,
        marginRight: 15,
        marginTop: 20,
        '@media max-width: 400': {
            width: 290,
            marginRight: 30,
        },
        '@media orientation: landscape': {
            width: 200,
            marginRight: 50,
        },
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 15,
        marginRight: 30,
        marginTop: 20,
        borderStyle: 'dashed solid double',

        border: 1,
        borderWidth: 2,

        '@media max-width: 400': {
            marginTop: 10,
            marginLeft: 30,
        },
    },

    table: {
        display: 'table',
        width: "auto",
        margin: 20,
        borderWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: 'grey',
        flexDirection: 'column',
        flexShrink: 1
    },

    tableRow: {
        width: '100%',
        border: 3,
        // alignItems: 'justify',
        margin: "auto",
        flexDirection: "row",
        // flexGrow: 1,
        // flexAlign: 'strech'
    },

    tableColHeader: {
        borderBottomColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        width: "17%"
    },

    tableCellHeader: {
        margin: 5,
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center'
    },
    tableCol: {
        flexGrow: 1,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableCell: {
        margin: 5,
        fontSize: 10
    }
});

const rows = new Array(100).fill(0, 0, 100)
export default function MovieTable() {
    return (
        <Document>
            <Page size="A4">
                <View fixed>
                    <Text >This is header</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.leftColumn}>
                        <Text>adsfasdfaadsdasfasdfdsadfadsfasd</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text>This one does not wrap well testing the wrap features, I see some words getting cut off</Text>
                    </View>
                </View>
                <View style={styles.table} wrap>
                    <View style={styles.tableRow}>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCellHeader}>SNo</Text>
                        </View>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCell}>Header1</Text>
                        </View>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCell}>Header2</Text>
                        </View>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCell}>Header 3</Text>
                        </View>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCell}>Long Headers are shown here</Text>

                        </View>
                        <View style={
                            styles.tableColHeader
                        }>
                            <Text style={styles.tableCell}>Date</Text>
                        </View>
                    </View>
                    {
                        rows.map((r, i) => {
                            return (

                                <View style={styles.tableRow}>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text style={styles.tableCellHeader}>{i + 1}</Text>
                                    </View>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text style={styles.tableCell}>Value </Text>
                                    </View>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text style={styles.tableCell}>long..... value</Text>
                                    </View>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text>test</Text>
                                        <Text style={styles.tableCell}>longer ..................sdfa................values</Text>
                                    </View>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text style={styles.tableCell}>Multi value.......1,2,2,</Text>
                                        <Text style={styles.tableCell}>abracadabra...... !!!</Text>
                                        <Text style={styles.tableCell}>Really long test adfasfadsfladskfjdasf;kadsfdas</Text>
                                    </View>
                                    <View style={
                                        styles.tableColHeader
                                    }>
                                        <Text style={styles.tableCell}>Date</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>

                <View fixed style={{ justifySelf: "flex-end" }}>
                    <Text >This is footer</Text>
                </View>
            </Page>
        </Document>
    )
};