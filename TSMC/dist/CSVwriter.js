"use strict";
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
    }
    addRows(value) {
        let rows = value.map(v => this.formatRow(v));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(p) {
        return this.columns.map(col => p[col]).join(',');
    }
}
const writer = new CSVWriter(['id', 'ammount', 'to', 'about']);
writer.addRows([
    { id: 1, ammount: 50, to: 'me', about: 'for design work' },
    { id: 2, ammount: 150, to: 'you', about: 'for build work' },
]);
