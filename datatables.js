


/* Map $ to Jquery  */ (function($) {

$(document).ready(function() {

    // Add event listener for opening and closing details
    $('#arkiv').on('click', 'tbody td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();

            // Add classes for tonem
            $( "span:contains('¹')" ).css( "color", "#00a6f8" );
            $( "span:contains('²')" ).css( "color", "#00cd4a" );


        }
    } );

    $('#arkiv').on('requestChild.dt', function(e, row) {
        row.child(format(row.data())).show();
    });

    // $('#arkiv').parent().removeClass('entry-the-content');

            var table = $('#arkiv').DataTable({
                data: dataSet.data,
                rowId: 'id',

                language: {
                    "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/no-NB.json"
                },

                searchCols: [
                    null,
                    null,
                    null,
                    {'search': 'Velg ...' },
                ],
                columnDefs: [
                    { "visible": false, "targets": [1,2,5,6,7,8,9,10]},
                    /* { "searchable": false, "targets": [0,1,2,4,5,6,7,8,9,10] } */
                ],

                columns: [
                    {
                        "className":      'dt-control',
                        "orderable":      false,
                        "data":           null,
                        "defaultContent": ''
                    },
                    { data: "kons_vok", title: "Kons/Vok"},
                    { data: "gruppe", title: "Gruppe"},
                    { data: "grafem", title: "Grafem"},
                    { data: "ipa", title: "IPA"},
                    { data: "regeltype", title: "Regeltype"},
                    { data: "eksempel", title: "Eksempel"},
                    { data: "eksempel_ipa", title: "Eksempel IPA"},
                    { data: "forklaring", title: "Forklaring"},
                    { data: "lant_fra", title: "Lånt fra"},
                    { data: "ordkommentar", title: "Ordkommentar"},

                ],

                "order": [[1, 'asc']],
                dom: 'Blfrtip',
                buttons:['createState', 'savedStates'],

                initComplete: function () {
                    this.api().columns().every( function () {
                        var column = this;

                        if (column.index() === 0 ) {
                            return; // exits the function, being the last (and desired) column
                        }


                        if (column.index() === 3 ) {

                            /* */

                            var select = $('<select><option value="Velg ...">Velg ...</option></select>')
                                .appendTo( $(column.header()))
                                .on( 'change', function () {
                                    var val = $.fn.dataTable.util.escapeRegex(
                                        $(this).val()
                                    );
                                    column
                                        .search( val ? '^'+val+'$' : '', true, false )
                                        .draw();
                                } );




                            column.data().unique().sort().each( function ( d, j ) {
                                select.append( '<option value="'+d+'">'+d+'</option>' )
                            } );



                            /* */

                        }
                    } );
                }
            });




    table.on('stateLoaded', (e, settings, data) => {
        for(var i = 0; i < data.childRows.length; i++) {
            var row = table.row(data.childRows[i]);
            row.child(format(row.data())).show().reload();


        }
    });





    $('#adrkiv').DataTable( {
        initComplete: function () {

            /*

            this.api().columns().every( function () {

                var column = this;

                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.header()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'dd</option>' )

                } );
            } );

            */
        }
    } );



} );    
    

/* end */ })( jQuery );

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

/* Formatting function for row details */
function format ( d ) {
    // `d` is the original data object for the row
    cnthtml =  '\n\n\n\n\n<table cellpadding="5" cellspacing="0" border="0" >';

    /*

        cnthtml +=    '<tr>'+'<td>Grafem:</td>'+'<td>'+d.grafem+'</td>'+'</tr>';
    cnthtml +=    '<tr>'+'<td>IPA:</td>'+'<td>'+d.ipa+'</td>'+'</tr>';

    cnthtml += '<tr>'+'<td>Regeltype:</td>'+'<td>'+d.regeltype+'</td>'+'</tr>';
    cnthtml +=    '<tr>'+'<td>Konsonant/vokal:</td>'+'<td>'+d.kons_vok+'</td>'+'</tr>';
    cnthtml +=    '<tr>'+'<td>Gruppe:</td>'+'<td>'+d.gruppe+'</td>'+'</tr>';
     */

    if(!isBlank(d.eksempel) || !isBlank(d.eksempel_ipa)){
    cnthtml += '<tr>'+'<td><b>Eksempel:</b></td>'+'<td>'+d.eksempel+'</td>';
    }

    if(!isBlank(d.eksempel_ipa)){
    cnthtml += '<td>'+d.eksempel_ipa+'</td>';
    }


    if(!isBlank(d.eksempel)){
        cnthtml += '</tr>';
    }


    if(!isBlank(d.ordkommentar)){
    cnthtml +=    '<tr>'+'<td>Ordkommentar:</td>'+'<td>'+d.ordkommentar+'</td>'+'</tr>';
    }

    if(!isBlank(d.lant_fra)){
    cnthtml +=    '<tr>'+'<td>Lånt fra:</td>'+'<td>'+d.lant_fra+'</td>'+'</tr>';
    }

    if(!isBlank(d.forklaring)){
    cnthtml +=    '<tr>'+'<td>Forklaring:</td>'+'<td>'+d.forklaring+'</td>'+'</tr>';
    }

    cnthtml +=    '</table>';

    return cnthtml;


    /*
    return '' +
        '' +
        '' +
        '' +
        '' +
        '' +
        '<table cellpadding="5" cellspacing="0" border="0" >'+

        '<tr>'+'<td>Regeltype:</td>'+'<td>'+d.regeltype+'</td>'+'</tr>'+
        '<tr>'+'<td>Konsonant/vokal:</td>'+'<td>'+d.kons_vok+'</td>'+'</tr>'+
        '<tr>'+'<td>Gruppe:</td>'+'<td>'+d.gruppe+'</td>'+'</tr>'+
        '<tr>'+'<td>Grafem:</td>'+'<td>'+d.grafem+'</td>'+'</tr>'+
        '<tr>'+'<td>IPA:</td>'+'<td>'+d.ipa+'</td>'+'</tr>'+


        '<tr>'+'<td>Eksempel:</td>'+'<td>'+d.eksempel+'</td>'+'</tr>'+
        '<tr>'+'<td>Eksempel IPA:</td>'+'<td>'+d.eksempel_ipa+'</td>'+'</tr>'+
        '<tr>'+'<td>Ordkommentar:</td>'+'<td>'+d.ordkommentar+'</td>'+'</tr>'+
        '<tr>'+'<td>Lånt fra:</td>'+'<td>'+d.lant_fra+'</td>'+'</tr>'+

        '<tr>'+'<td>Forklaring:</td>'+'<td>'+d.forklaring+'</td>'+'</tr>'+


        '</table>';

     */
}



/* Formatting function for row details - modify as you need
function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
        '<td>Full name:</td>'+
        '<td>'+d.name+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extension number:</td>'+
        '<td>'+d.extn+'</td>'+
        '</tr>'+
        '<tr>'+
        '<td>Extra info:</td>'+
        '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
        '</table>';
}

$(document).ready(function() {
    // Add event listener for opening and closing details
    $('#example').on('click', 'tbody td.dt-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );

        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
        }
    } );

    $('#example').on('requestChild.dt', function(e, row) {
        row.child(format(row.data())).show();
    })

    var table = $('#example').DataTable( {
        "ajax": "../data/objects.txt",
        "rowId": 'id',
        "columns": [
            {
                "className":      'dt-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "position" },
            { "data": "office" },
            { "data": "salary" }
        ],
        "order": [[1, 'asc']],
        dom: 'Blfrtip',
        buttons:['createState', 'savedStates']
    } );

    table.on('stateLoaded', (e, settings, data) => {
        for(var i = 0; i < data.childRows.length; i++) {
            var row = table.row(data.childRows[i]);
            row.child(format(row.data())).show();
        }
    })
} );



 */