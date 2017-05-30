$(document).ready(function () {
    const players = "https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster";

    let players_table = $('#players-table').DataTable({
        stateSave: true,
        dom: 'Bfrtip',
        buttons: [
            {
                text: 'OF only',
                action: function(e,dt,node,config){
                    filter(3,'OF');
                }
            },
            {
                text: 'All',
                action: function(e,dt,node,config){
                    clearFilter(players_table);
                }
            },
            'copy', 'excel', 'pdf'
        ],
        "ajax": {
            "url": "https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster",
            "dataSrc": "",
            "type": "GET",
        },
        "columns": [
            { "data": "name" },
            { "data": "lastName" },
            { "data": "number" },
            { "data": "position" },
            { "data": "hometown" },
            { "data": "throws" },
            { "data": "bats" },
            { "data": "song" },
        ],
    });

    const filter = function(column,filter) {
        players_table.columns(column).search(filter).draw();
    };

    const clearFilter = function(table){
        table.search('').columns().search('').draw()
    };
})
