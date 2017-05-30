$(document).ready(function () {
    const players = "https://cigarsbaseballserver.herokuapp.com/cigarsbaseball/roster";

    $('#players-table').DataTable({
        stateSave: true,
        dom: 'Bfrtip',
        buttons: [
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
})