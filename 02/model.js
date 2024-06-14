import Symbol from "./globedef/symbol.js"
import Table from "./globedef/table.js"
import LuckyDraw from "./dto/luckydraw.js";

class Model {
    constructor() {
        this.TableStrip = {
            [Table.MainGame1]: [
                ['H2', 'N4', 'N6', 'H5', 'H4', 'H4', 'H5', 'N5', 'H2', 'H2', 'H2', 'H3', 'N6', 'H5', 'H5', 'H5', 'N3', 'H3', 'H3', 'H3', 'N2', 'F', 'H1', 'H1', 'H1', 'F', 'H2', 'H2', 'N1', 'H5', 'N2', 'H4', 'N3', 'H5', 'N2', 'H2', 'H5', 'H4', 'N5', 'H2', 'H4', 'N1', 'H5', 'H3', 'H3', 'H4', 'H4', 'H4', 'H5', 'H1', 'N4', 'H3', 'H4', 'H5', 'H3', 'H4'],
                ['H3', 'H5', 'H4', 'F', 'H1', 'H1', 'H1', 'F', 'H3', 'H3', 'H3', 'H4', 'H4', 'H4', 'W', 'H1', 'N1', 'H3', 'H3', 'H5', 'N4', 'H1', 'H5', 'H2', 'H2', 'H2', 'H5', 'H5', 'H5', 'N1', 'H4', 'N5', 'H5', 'N3', 'N2', 'H4', 'N3', 'H5', 'N5', 'H4', 'N4', 'H3', 'N2', 'H5', 'H4', 'N1', 'H5', 'W', 'H3', 'H3', 'N2', 'H4', 'N6', 'H1', 'H3', 'N6', 'H4', 'N1'],
                ['N1', 'N4', 'H4', 'H3', 'N6', 'H4', 'H3', 'H5', 'H5', 'H4', 'H4', 'H4', 'H2', 'H2', 'H2', 'W', 'H5', 'N2', 'H3', 'F', 'N5', 'H4', 'H4', 'H3', 'H3', 'H3', 'F', 'H2', 'H3', 'H3', 'N5', 'H4', 'N2', 'H5', 'N1', 'H4', 'N6', 'H5', 'N1', 'H3', 'H5', 'H5', 'H5', 'N3', 'H2', 'W', 'H5', 'N4', 'H2', 'F', 'H1', 'H1', 'H1', 'F', 'H4', 'N3', 'H3', 'W'],
                ['H3', 'N5', 'H4', 'H4', 'H4', 'F', 'H1', 'H5', 'H5', 'H5', 'N1', 'N4', 'W', 'N5', 'N3', 'H5', 'N2', 'H3', 'H3', 'H3', 'N6', 'H4', 'H4', 'N5', 'N1', 'H2', 'N6', 'W', 'H5', 'N2', 'H3', 'N5', 'H2', 'H2', 'H2', 'N6', 'F', 'H1', 'H1', 'H1', 'N1', 'N2', 'H3', 'N4', 'N6', 'H2', 'N1', 'N2', 'H5', 'N4', 'H4', 'N6', 'N4', 'H2', 'N6', 'N3', 'H3', 'N5', 'H4', 'H4'],
                ['N6', 'H4', 'N3', 'N1', 'H4', 'N4', 'H2', 'H2', 'H2', 'N6', 'N5', 'F', 'H1', 'H1', 'H1', 'F', 'N5', 'N3', 'H5', 'H5', 'H5', 'N6', 'N1', 'H1', 'N2', 'N5', 'H2', 'N3', 'N2', 'H4', 'H4', 'H4', 'N1', 'H3', 'H3', 'H3', 'N1', 'H5', 'N2'],
            ],
            [Table.FreeGame1]: [
                ['N6', 'N6', 'N1', 'N2', 'N2', 'H1', 'H1', 'N5', 'N2', 'N2', 'N1', 'N1', 'H1', 'N3', 'N6', 'N6', 'H1', 'N2', 'N2', 'N6', 'N6', 'F', 'H1', 'H1', 'H1', 'F', 'N6', 'N6', 'N1', 'H1', 'N2', 'N2', 'N6', 'N5', 'N2', 'N2', 'H1', 'H1', 'H1', 'N6', 'N6', 'N1', 'N3', 'H1', 'H1', 'N2', 'N6', 'N6', 'N2', 'N4', 'N6', 'H1', 'H1', 'H1', 'N6'],
                ['H1', 'H1', 'N5', 'H1', 'N1', 'F', 'H1', 'H1', 'H1', 'N4', 'H1', 'N1', 'F', 'N5', 'N5', 'N1', 'H1', 'H1', 'N1', 'N1', 'N5', 'W', 'N1', 'N1', 'N5', 'N5', 'H1', 'H1', 'H1', 'N1', 'N5', 'N5', 'H1', 'H1', 'N1', 'N2', 'N2', 'N4', 'H1', 'N5', 'N5', 'N3', 'W', 'H1', 'N5', 'N1', 'N3', 'H1', 'H1', 'H1', 'N2', 'N6', 'N1', 'N1', 'H1', 'N6', 'N5'],
                ['N1', 'N4', 'N4', 'H1', 'N6', 'N3', 'N3', 'H1', 'H1', 'H1', 'N4', 'N4', 'N2', 'N3', 'N3', 'W', 'H1', 'N3', 'N5', 'H1', 'N4', 'N4', 'F', 'H1', 'N4', 'H1', 'F', 'N4', 'H1', 'N2', 'H1', 'N5', 'N6', 'N4', 'N1', 'H1', 'H1', 'H1', 'N1', 'N3', 'N3', 'N4', 'H1', 'H1', 'W', 'N3', 'N3', 'N4', 'N4', 'F', 'H1', 'H1', 'H1', 'F', 'N3', 'N3', 'H1', 'W'],
                ['H1', 'N5', 'N5', 'H1', 'N6', 'F', 'H1', 'H1', 'H1', 'N5', 'N1', 'N4', 'W', 'N5', 'N5', 'N3', 'H1', 'N5', 'H1', 'N6', 'N6', 'H1', 'N5', 'N5', 'N1', 'N6', 'N6', 'W', 'N2', 'N2', 'H1', 'N6', 'N6', 'N5', 'N5', 'N6', 'F', 'H1', 'H1', 'H1', 'N6', 'N6', 'N4', 'H1', 'N1', 'N1', 'N2', 'N6', 'N6', 'H1', 'H1', 'N5', 'N4', 'N2', 'N5', 'N5', 'N6', 'N6', 'N1'],
                ['N6', 'N6', 'N3', 'N1', 'H1', 'N3', 'N3', 'N2', 'N2', 'N3', 'N3', 'F', 'H1', 'H1', 'H1', 'F', 'N4', 'N4', 'N3', 'N3', 'H1', 'N4', 'N3', 'N1', 'N4', 'N5', 'H1', 'N4', 'N4', 'N1', 'N6', 'H1', 'H1', 'N2', 'N5', 'N3', 'N3', 'H1', 'N4', 'N4', 'N3', 'N1', 'H1', 'N4', 'N1', 'N1', 'H1', 'N2', 'N2', 'N4', 'H1', 'N4', 'N4', 'N6', 'N6', 'N4', 'N2', 'N3', 'N4', 'N4', 'H1', 'N2', 'N2'],
            ],
            [Table.FreeGame2]: [
                ['N6', 'N6', 'N4', 'N2', 'N2', 'H2', 'H2', 'N5', 'N2', 'N2', 'H2', 'H2', 'H2', 'N3', 'N6', 'N6', 'H2', 'N2', 'N2', 'N6', 'N6', 'F', 'H2', 'H2', 'H2', 'F', 'N6', 'N6', 'N1', 'H2', 'N2', 'N2', 'N6', 'N5', 'N2', 'N2', 'H2', 'H2', 'H2', 'N6', 'N6', 'N1', 'N3', 'H2', 'N2', 'N2', 'N6', 'N6', 'H2', 'N2', 'N4', 'N6', 'H2', 'H2', 'H2', 'N2'],
                ['H2', 'H2', 'N5', 'N1', 'N1', 'F', 'H2', 'H2', 'H2', 'F', 'N1', 'N1', 'N5', 'N5', 'N4', 'H2', 'H2', 'H2', 'N1', 'N1', 'N5', 'W', 'H2', 'N1', 'N5', 'N5', 'H2', 'H2', 'H2', 'N1', 'N5', 'N5', 'H2', 'N1', 'N2', 'N2', 'N4', 'H2', 'N5', 'N5', 'N3', 'W', 'H2', 'N5', 'N1', 'N3', 'H2', 'H2', 'H2', 'N2', 'N1', 'N6', 'N1', 'H2', 'N6', 'N5', 'N1'],
                ['N1', 'N4', 'N4', 'H2', 'N6', 'N3', 'N3', 'H2', 'H2', 'H2', 'N4', 'N4', 'N2', 'N3', 'N3', 'W', 'H2', 'H2', 'N3', 'N5', 'N4', 'N4', 'F', 'H2', 'H2', 'H2', 'F', 'N4', 'N4', 'N2', 'H2', 'N5', 'N6', 'N4', 'N1', 'H2', 'H2', 'H2', 'N1', 'N3', 'N3', 'N4', 'H2', 'H2', 'W', 'N3', 'N3', 'N4', 'N4', 'F', 'H2', 'H2', 'H2', 'F', 'N3', 'N3', 'H2', 'W'],
                ['H2', 'N5', 'N5', 'N6', 'N6', 'F', 'H2', 'H2', 'H2', 'N5', 'N1', 'N4', 'W', 'N5', 'N5', 'N3', 'H2', 'N5', 'N5', 'N6', 'N6', 'H2', 'N5', 'N5', 'N1', 'N6', 'N6', 'W', 'N2', 'N2', 'H2', 'N6', 'N6', 'N5', 'N5', 'N6', 'F', 'H2', 'H2', 'H2', 'N6', 'N6', 'N4', 'H2', 'N6', 'N6', 'N5', 'N1', 'N1', 'H2', 'H2', 'N2', 'N4', 'N5', 'N5', 'H2', 'N2', 'N6', 'N6'],
                ['N6', 'N6', 'N3', 'N1', 'H2', 'N3', 'N3', 'N4', 'N5', 'N3', 'N3', 'F', 'H2', 'H2', 'H2', 'F', 'N4', 'N4', 'N3', 'N3', 'H2', 'N4', 'N3', 'H2', 'N1', 'N4', 'N5', 'H2', 'N4', 'N4', 'N1', 'N6', 'H2', 'H2', 'N2', 'N5', 'N3', 'N3', 'H2', 'N4', 'N4', 'N3', 'N1', 'H2', 'N4', 'N1', 'N1', 'H2', 'N4', 'N2', 'N2', 'H2', 'N4', 'N4', 'N6', 'N6', 'N4', 'N3', 'N4', 'N4', 'H2'],
            ],
            [Table.FreeGame3]: [
                ['N6', 'N6', 'N4', 'N2', 'N2', 'H3', 'H3', 'N5', 'N2', 'N2', 'H3', 'H3', 'H3', 'N3', 'N6', 'N6', 'H3', 'N2', 'N2', 'N6', 'N6', 'F', 'H3', 'H3', 'H3', 'F', 'N6', 'N6', 'N1', 'H3', 'N2', 'N2', 'N6', 'N5', 'N2', 'N2', 'H3', 'H3', 'H3', 'N6', 'N6', 'N1', 'N3', 'H3', 'H3', 'N2', 'N6', 'N6', 'H3', 'N2', 'N4', 'N6', 'H3', 'H3', 'H3', 'N2'],
                ['H3', 'H3', 'N5', 'N1', 'N1', 'F', 'H3', 'H3', 'H3', 'F', 'N1', 'N1', 'N5', 'N5', 'N4', 'H3', 'H3', 'H3', 'N1', 'N1', 'N5', 'W', 'H3', 'N1', 'N5', 'N5', 'H3', 'H3', 'H3', 'N1', 'N5', 'N5', 'H3', 'H3', 'N1', 'N2', 'N2', 'N4', 'H3', 'N5', 'N5', 'N3', 'W', 'H3', 'N5', 'N1', 'N3', 'H3', 'H3', 'H3', 'N2', 'N6', 'N1', 'N1', 'H3', 'N6', 'N5', 'N1'],
                ['N1', 'N4', 'N4', 'H3', 'N6', 'N3', 'N3', 'H3', 'H3', 'H3', 'N4', 'N4', 'N2', 'N3', 'N3', 'W', 'H3', 'H3', 'N3', 'N5', 'N4', 'N4', 'F', 'H3', 'H3', 'H3', 'F', 'N4', 'N4', 'N2', 'H3', 'N5', 'N6', 'N4', 'N1', 'H3', 'H3', 'H3', 'N1', 'N3', 'N3', 'N4', 'H3', 'H3', 'W', 'N3', 'N3', 'N4', 'N4', 'F', 'H3', 'H3', 'H3', 'F', 'N3', 'N3', 'H3', 'W'],
                ['H3', 'N5', 'N5', 'N6', 'N6', 'F', 'H3', 'H3', 'H3', 'N5', 'N1', 'N4', 'W', 'N5', 'N5', 'N3', 'H3', 'N5', 'N5', 'N6', 'N6', 'H3', 'N5', 'N5', 'N1', 'N6', 'N6', 'W', 'N2', 'N2', 'H3', 'N6', 'N6', 'N5', 'N5', 'N6', 'F', 'H3', 'H3', 'H3', 'N6', 'N6', 'N4', 'H3', 'N1', 'N1', 'N5', 'N6', 'N6', 'H3', 'H3', 'N2', 'N4', 'N5', 'N5', 'H3', 'N2', 'N6', 'N6'],
                ['N6', 'N6', 'N3', 'N1', 'H3', 'N3', 'N3', 'N4', 'N5', 'N3', 'N3', 'F', 'H3', 'H3', 'H3', 'F', 'N4', 'N4', 'N3', 'N3', 'H3', 'N4', 'N3', 'H3', 'N1', 'N4', 'N5', 'H3', 'N4', 'N4', 'N1', 'N6', 'H3', 'H3', 'N2', 'N5', 'N3', 'N3', 'H3', 'N4', 'N4', 'N3', 'N1', 'H3', 'N4', 'N1', 'N1', 'H3', 'N2', 'N2', 'N4', 'H3', 'N4', 'N4', 'N6', 'N6', 'N4', 'N2', 'N3', 'N4', 'N4', 'H3', 'N2', 'N2'],
            ],
            [Table.FreeGame4]: [
                ['N6', 'N6', 'N2', 'N2', 'H4', 'H4', 'N4', 'N5', 'N2', 'N2', 'H4', 'H4', 'H4', 'N3', 'N6', 'N6', 'H4', 'N2', 'N2', 'N6', 'N6', 'F', 'H4', 'H4', 'H4', 'F', 'N6', 'N6', 'N1', 'H4', 'N2', 'N2', 'N6', 'N5', 'N2', 'N2', 'H4', 'H4', 'H4', 'N6', 'N6', 'N1', 'N3', 'H4', 'H4', 'N2', 'N6', 'N6', 'H4', 'N2', 'N4', 'N6', 'H4', 'H4', 'H4', 'N2'],
                ['H4', 'H4', 'N5', 'N1', 'N1', 'F', 'H4', 'H4', 'H4', 'F', 'N1', 'N1', 'N5', 'N5', 'N4', 'H4', 'H4', 'H4', 'N1', 'N1', 'N5', 'W', 'H4', 'N1', 'N5', 'N5', 'H4', 'H4', 'H4', 'N1', 'N5', 'N5', 'H4', 'H4', 'N1', 'N2', 'N2', 'N4', 'H4', 'N5', 'N5', 'N3', 'W', 'H4', 'N5', 'N1', 'N3', 'H4', 'H4', 'H4', 'N2', 'N6', 'N1', 'N1', 'H4', 'N6', 'N5', 'N1'],
                ['N1', 'N4', 'N4', 'H4', 'N6', 'N3', 'N3', 'H4', 'H4', 'H4', 'N4', 'N4', 'N2', 'N3', 'N3', 'W', 'H4', 'H4', 'N3', 'N5', 'N4', 'N4', 'F', 'H4', 'H4', 'H4', 'F', 'N4', 'N4', 'N2', 'H4', 'N5', 'N6', 'N4', 'N1', 'H4', 'H4', 'H4', 'N1', 'N3', 'N3', 'N4', 'H4', 'H4', 'W', 'N3', 'N3', 'N4', 'N4', 'F', 'H4', 'H4', 'H4', 'F', 'N3', 'N3', 'H4', 'W'],
                ['H4', 'N5', 'N5', 'N6', 'N6', 'F', 'H4', 'H4', 'H4', 'N5', 'N1', 'N4', 'W', 'N5', 'N5', 'N3', 'H4', 'N5', 'N5', 'H4', 'N6', 'N6', 'H4', 'N5', 'N5', 'N6', 'N6', 'W', 'N2', 'N2', 'H4', 'N6', 'N6', 'N5', 'N5', 'N6', 'F', 'H4', 'H4', 'H4', 'N6', 'N2', 'N4', 'H4', 'H4', 'N6', 'N1', 'N1', 'N6', 'N6', 'H4', 'H4', 'N4', 'N5', 'N5', 'H4', 'N1', 'N6', 'N6'],
                ['N6', 'N6', 'N3', 'N1', 'H4', 'N3', 'N3', 'N4', 'N5', 'N3', 'N3', 'F', 'H4', 'H4', 'H4', 'F', 'N4', 'N4', 'N3', 'N3', 'H4', 'N1', 'N4', 'N5', 'H4', 'N4', 'N4', 'N1', 'H4', 'H4', 'H4', 'N2', 'N5', 'N3', 'N3', 'H4', 'N4', 'N4', 'N3', 'N4', 'N1', 'N1', 'H4', 'N2', 'N2', 'N4', 'N4', 'H4', 'H4', 'N6', 'N4', 'N4', 'N2', 'N3', 'N6', 'N4', 'H4', 'N2', 'N2'],
            ],
            [Table.FreeGame5]: [
                ['N6', 'N6', 'N2', 'N2', 'H5', 'H5', 'N4', 'N5', 'N2', 'N2', 'H5', 'H5', 'H5', 'N3', 'N6', 'N6', 'H5', 'N2', 'N2', 'N6', 'N6', 'F', 'H5', 'H5', 'H5', 'F', 'N6', 'N6', 'N1', 'H5', 'N2', 'N2', 'N6', 'N5', 'N2', 'N2', 'H5', 'H5', 'H5', 'N6', 'N6', 'N1', 'N3', 'H5', 'H5', 'N2', 'N6', 'N6', 'H5', 'N2', 'N4', 'N6', 'H5', 'H5', 'H5', 'N2'],
                ['H5', 'H5', 'N5', 'N1', 'N1', 'F', 'H5', 'H5', 'H5', 'F', 'N1', 'N1', 'N5', 'N5', 'N4', 'H5', 'H5', 'H5', 'N1', 'N1', 'N5', 'W', 'H5', 'N1', 'N5', 'N5', 'H5', 'H5', 'H5', 'N1', 'N5', 'N5', 'H5', 'H5', 'N1', 'N2', 'N2', 'N4', 'H5', 'N5', 'N5', 'N3', 'W', 'H5', 'N5', 'N1', 'N3', 'H5', 'H5', 'H5', 'N2', 'N6', 'N1', 'N1', 'H5', 'N6', 'N5', 'N1'],
                ['N1', 'N4', 'N4', 'H5', 'N6', 'N3', 'N3', 'H5', 'H5', 'H5', 'N4', 'N4', 'N2', 'N3', 'N3', 'W', 'H5', 'H5', 'N3', 'N5', 'N4', 'N4', 'F', 'H5', 'H5', 'H5', 'F', 'N4', 'N4', 'N2', 'H5', 'N5', 'N6', 'N4', 'N1', 'H5', 'H5', 'H5', 'N1', 'N3', 'N3', 'N4', 'H5', 'H5', 'W', 'N3', 'N3', 'N4', 'N4', 'F', 'H5', 'H5', 'H5', 'F', 'N3', 'N3', 'H5', 'W'],
                ['H5', 'N5', 'N5', 'N6', 'N6', 'F', 'H5', 'H5', 'H5', 'N5', 'N1', 'N4', 'W', 'N5', 'N5', 'N3', 'H5', 'N5', 'N5', 'N6', 'N6', 'H5', 'H5', 'N5', 'N1', 'N6', 'N6', 'W', 'N2', 'N2', 'H5', 'N6', 'N6', 'N5', 'N5', 'N6', 'F', 'H5', 'H5', 'H5', 'N1', 'N2', 'N4', 'H5', 'N6', 'N6', 'N5', 'H5', 'N6', 'N6', 'H5', 'H5', 'N4', 'N5', 'N5', 'H5', 'N6', 'N6', 'N1'],
                ['N6', 'N6', 'N3', 'N1', 'H5', 'N3', 'N3', 'N4', 'N5', 'N3', 'N3', 'F', 'H5', 'H5', 'H5', 'F', 'N4', 'N4', 'N3', 'N3', 'H5', 'N1', 'N4', 'N5', 'H5', 'N4', 'N4', 'N1', 'H5', 'H5', 'H5', 'N2', 'N5', 'N3', 'N3', 'H5', 'N4', 'N4', 'N3', 'N1', 'N1', 'N4', 'H5', 'N2', 'N2', 'N4', 'N4', 'H5', 'H5', 'N6', 'N4', 'N4', 'N2', 'N3', 'N6', 'N4', 'H5', 'N2', 'N2'],
            ]
        }

        this.PayTable = {
            // [Symbol.W]: [0, 0, 0, 0, 0, 0],
            [Symbol.H1]: [0, 0, 0, 100, 150, 750],
            [Symbol.H2]: [0, 0, 0, 50, 100, 450],
            [Symbol.H3]: [0, 0, 0, 40, 80, 300],
            [Symbol.H4]: [0, 0, 0, 20, 50, 200],
            [Symbol.H5]: [0, 0, 0, 10, 25, 150],
            [Symbol.N1]: [0, 0, 0, 5, 10, 30],
            [Symbol.N2]: [0, 0, 0, 5, 10, 30],
            [Symbol.N3]: [0, 0, 0, 5, 10, 25],
            [Symbol.N4]: [0, 0, 0, 5, 10, 25],
            [Symbol.N5]: [0, 0, 0, 5, 10, 20],
            [Symbol.N6]: [0, 0, 0, 5, 10, 20],
            [Symbol.F]: [0, 0, 0, 5, 10, 50]
        }

        // 最少觸發 FG 的 Scatter 個數
        this.MinScatterCount = 3

        // 免費遊戲的最大回合數
        this.MaxFgRound = 10

        // 免費遊戲選項
        this.FgLuckyDraw = [
            new LuckyDraw(Table.FreeGame1, 6),
            new LuckyDraw(Table.FreeGame2, 9),
            new LuckyDraw(Table.FreeGame3, 12),
            new LuckyDraw(Table.FreeGame4, 15),
            new LuckyDraw(Table.FreeGame5, 20),
        ]
    }
}

export default Model