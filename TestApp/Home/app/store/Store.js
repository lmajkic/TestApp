Ext.define('Ext4Example.store.Store', {
    extend: 'Ext.data.ArrayStore',
    model: 'Ext4Example.model.Team',
    data: [
        [1, 'Mercedes', 'Mercedes'],
        [2, 'Scuderia Ferrari', 'Ferrari'],
        [3, 'Mercedes', 'Renault'],
        [4, 'Force India', 'Mercedes'],
        [5, 'Williams', 'Mercedes'],
        [6, 'Renault', 'Renault'],
        [7, 'Haas', 'Ferrari'],
        [8, 'Torro Roso', 'Renault'],
        [9, 'McLaren', 'Honda'],
        [10, 'Sauber F1', 'Ferrari'],

    ]	
});
Ext.define('Ext4Example.store.Drivers', {
    extend: 'Ext.data.ArrayStore',
    model: 'Ext4Example.model.Driver',
    data: [
        [1, 'Lewis Hamilton', 'Mercedes', 44],
        [2, 'Valteri Bottas', 'Mercedes', 77],
        [3, 'Sebastian Vettel', 'Scuderia Ferrari', 5],
        [4, 'Kimi Raikkonen', 'Scuderia Ferrari', 7],
        [5, 'Daniel Ricciardo', 'Red Bull', 3],
        [6, 'Max Verstappen', 'Red Bull', 33],
        [7, 'Sergio Perez', 'Force India', 11],
        [8, 'Esteban Ocon', 'Force India', 31],
        [9, 'Felipe Massa', 'Williams', 19],
        [10, 'Lance Stroll', 'Williams', 18],
        [11, 'Nico Hulkenberg', 'Renault', 27],
        [12, 'Jolyon Palmer', 'Renault', 30],
        [13, 'Romain Grosjean', 'Haas', 8],
        [14, 'Kevin Magnussen', 'Haas', 20],
        [15, 'Carlos Sainz jr.', 'Torro Roso', 55],
        [16, 'Danil Kvyat', 'Torro Roso', 26],
        [17, 'Fernando Alonso', 'McLaren', 14],
        [18, 'Stofel Vandoorne', 'McLaren', 2],
        [19, 'Marcus Ericsson', 'Sauber F1', 9],
        [20, 'Pascal Wehrlain', 'Sauber F1', 94]
    ]
});
Ext.define('Ext4Example.store.Drivers', {
    extend: 'Ext.data.ArrayStore',
    model: 'Ext4Example.model.Track',
    data: [
        [1, 'Albert Park', 'Australia', 63],
        [2, 'Shanghai International Circuit', 'China', 56],

    ]
});