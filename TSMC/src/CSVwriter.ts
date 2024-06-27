type PaymentColumns = ('id' | 'about' | 'to' | 'ammount')[]

interface Payment {
    id: string | number,
    about: string,
    to: string,
    ammount: number
}

class CSVWriter {
    constructor(private columns: PaymentColumns) {
        this.csv = this.columns.join(',') + '\n'
    }

    private csv: string

    addRows(value: Payment[]): void {
        let rows = value.map(v => this.formatRow(v))
        this.csv += rows.join('\n')

        console.log(this.csv);
    }

    private formatRow(p: Payment): string {
        return this.columns.map(col => p[col]).join(',')
    }
}

const writer = new CSVWriter(['id', 'ammount', 'to', 'about'])

writer.addRows([
    { id: 1, ammount: 50, to: 'me', about: 'for design work' },
    { id: 2, ammount: 150, to: 'you', about: 'for build work' },
])