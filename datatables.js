/* Map $ to Jquery  */ (function($) {

// Skrift til uttale
$(document).ready(function() {

   // Add event listener for opening and closing details
   $('#skrift_uttale').on('click', 'tbody td.dt-control', function () {
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

            /*
           $('span.ipa_eksempel').each(function(index,item) {});
             */

       }
   } );

   $('#skrift_uttale').on('requestChild.dt', function(e, row) {
       row.child(format(row.data())).show();
   });

   var table = $('#skrift_uttale').DataTable({
               data: dataSet_skrift_uttale.data,
               rowId: 'id',

               language: {
                   //"sUrl": "no-NB.json"
                   // "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/no-NB.json"


       "emptyTable": "Ingen data tilgjengelig i tabellen",
       "infoThousands": " ",
       "loadingRecords": "Laster...",
       "processing": "Laster...",
       "search": "S&oslash;k:",
       "paginate": {
       "first": "F&oslash;rste",
           "previous": "Forrige",
           "next": "Neste",
           "last": "Siste"
   },
       "aria": {
       "sortAscending": "aktiver for &aring; sortere kolonnen stigende",
           "sortDescending": "aktiver for &aring; sortere kolonnen synkende"
   },
       "autoFill": {
       "cancel": "Avbryt",
           "fillHorizontal": "Fyll celler horisontalt",
           "fillVertical": "Fyll celler vertikalt",
           "fill": "Fyll alle celler med <i>%d<\/i>"
   },
       "buttons": {
       "colvisRestore": "Gjennopprett synlighet",
           "copy": "Kopier",
           "copySuccess": {
           "_": "Kopierte %ds rader til utklippstavle",
               "1": "Kopierte én rad til utklippstavle"
       },
       "csv": "CSV",
           "excel": "Excel",
           "pageLength": {
           "-1": "Vis alle rader",
               "_": "Vis %d rader"
       },
       "pdf": "PDF",
           "print": "Utskrift",
           "collection": "Samling <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
           "colvis": "Kolonne-synlighet",
           "copyKeys": "Trykk ctrl eller u2318 + C for &aring; kopiere tabelldata til systemets utklippstavle.<br \/><br \/>For &aring; avbryte, klikk p&aring; denne meldingen eller trykk p&aring; escape.",
           "copyTitle": "Kopier til utklippstavle"
   },
       "decimal": ",",
       "searchBuilder": {
       "conditions": {
           "date": {
               "after": "Etter",
                   "between": "Mellom",
                   "empty": "Tom",
                   "equals": "Er lik",
                   "not": "Ikke",
                   "notBetween": "Ikke mellom",
                   "notEmpty": "Ikke tom",
                   "before": "F&oslash;r"
           },
           "number": {
               "between": "Mellom",
                   "empty": "Tom",
                   "equals": "Er lik",
                   "lt": "Mindre enn",
                   "lte": "Mindre eller lik",
                   "not": "Ikke",
                   "notBetween": "Ikke mellom",
                   "notEmpty": "Ikke tom",
                   "gt": "St&oslash;rre enn",
                   "gte": "St&oslash;rre eller lik"
           },
           "string": {
               "contains": "Inneholder",
                   "empty": "Tom",
                   "equals": "Er lik",
                   "not": "Ikke",
                   "notEmpty": "Ikke tom",
                   "startsWith": "Starter med",
                   "endsWith": "Slutter med"
           },
           "array": {
               "equals": "Er lik",
                   "empty": "Tom",
                   "contains": "Inneholder",
                   "not": "Ikke",
                   "notEmpty": "Ikke tom",
                   "without": "Uten"
           }
       },
       "data": "Data",
           "deleteTitle": "Slett filtreringsregel",
           "logicAnd": "Og",
           "logicOr": "Eller",
           "value": "Verdi",
           "add": "Legg til betingelse",
           "button": {
           "0": "S&oslash;kekonstrukt&oslash;r",
               "_": "S&oslash;kekonstrukt&oslash;r (%d)"
       },
       "clearAll": "Fjern alle",
           "condition": "Betingelse",
           "leftTitle": "Rykk tilbake betingelse",
           "rightTitle": "Rykk inn betingelse",
           "title": {
           "0": "S&oslash;kekonstrukt&oslash;r",
               "_": "S&oslash;kekonstrukt&oslash;r (%d)"
       }
   },
       "searchPanes": {
       "count": "{total}",
           "countFiltered": "{shown} ({total})",
           "clearMessage": "Fjern alle",
           "collapse": {
           "0": "S&oslash;kerute",
               "_": "S&oslash;kerute (%d)"
       },
       "emptyPanes": "Ingen s&oslash;kerute",
           "loadMessage": "Laster inn s&oslash;kerute...",
           "title": "Aktive filter - %d",
           "showMessage": "Vis alle",
           "collapseMessage": "Komprimer Alle"
   },
       "select": {
       "cells": {
           "1": "1 celle er valgt",
               "_": "%d celler er valgt"
       },
       "columns": {
           "1": "1 kolonne er valgt",
               "_": "%d kolonner er valgt"
       }
   },
       "thousands": " ",
       "info": "Viser _START_ til _END_ av _TOTAL_ oppf&oslash;ringer",
       "infoEmpty": "Viser 0 til 0 av 0 oppf&oslash;ringer",
       "infoFiltered": "filtrert fra totalt _MAX_ oppf&oslash;ringer",
       "lengthMenu": "Vis _MENU_ oppf&oslash;ringer",
       "zeroRecords": "Velg bokstav (grafem) over",
       "datetime": {
       "previous": "forrige",
           "next": "neste",
           "hours": "timer",
           "minutes": "minutter",
           "seconds": "sekunder",
           "unknown": "ukjent"
   },
       "editor": {
       "close": "Lukk",
           "create": {
           "button": "Ny",
               "title": "Ny oppføring",
               "submit": "Opprett"
       },
       "edit": {
           "button": "Endre",
               "title": "Endre oppføring",
               "submit": "Oppdater"
       },
       "remove": {
           "button": "Slett",
               "title": "Sletting",
               "submit": "Slett",
               "confirm": {
               "_": "Er du sikker på at du vil slette %d rader?",
                   "1": "Er du sikker på at du vil slette 1 rad?"
           }
       },
       "error": {
           "system": "En systemfeil har inntruffet (Mer informasjon)"
       },
       "multi": {
           "restore": "Gjør om endringer",
               "noMulti": "Dette feltet kan redigeres individuelt men ikke som del av en gruppe."
       }
   }



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

       lengthMenu: [50,100,1000],

       columns: [
                    {
                        "className":      'dt-control',
                        "orderable":      false,
                        "data":           null,
                        "defaultContent": ''
                    },
                    { data: "kons_vok", title: "Kons/Vok"},
                    { data: "gruppe", title: "Gruppe"},
                    { data: "grafem", title: "Bokstavkombinasjon: "},
                    { data: "ipa", title: "Uttale (IPA)"},
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

} );

// Uttale til skrift
$(document).ready(function() {

        // Add event listener for opening and closing details
        $('#uttale_skrift').on('click', 'tbody td.dt-control', function () {
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

                /*
               $('span.ipa_eksempel').each(function(index,item) {});
                 */

            }
        } );

        $('#uttale_skrift').on('requestChild.dt', function(e, row) {
            row.child(format(row.data())).show();
        });

        var table = $('#uttale_skrift').DataTable({
            data: dataSet_uttale_skrift.data,
            rowId: 'id',

            language: {
                //"sUrl": "no-NB.json"
                // "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/no-NB.json"


                "emptyTable": "Ingen data tilgjengelig i tabellen",
                "infoThousands": " ",
                "loadingRecords": "Laster...",
                "processing": "Laster...",
                "search": "S&oslash;k:",
                "paginate": {
                    "first": "F&oslash;rste",
                    "previous": "Forrige",
                    "next": "Neste",
                    "last": "Siste"
                },
                "aria": {
                    "sortAscending": "aktiver for &aring; sortere kolonnen stigende",
                    "sortDescending": "aktiver for &aring; sortere kolonnen synkende"
                },
                "autoFill": {
                    "cancel": "Avbryt",
                    "fillHorizontal": "Fyll celler horisontalt",
                    "fillVertical": "Fyll celler vertikalt",
                    "fill": "Fyll alle celler med <i>%d<\/i>"
                },
                "buttons": {
                    "colvisRestore": "Gjennopprett synlighet",
                    "copy": "Kopier",
                    "copySuccess": {
                        "_": "Kopierte %ds rader til utklippstavle",
                        "1": "Kopierte én rad til utklippstavle"
                    },
                    "csv": "CSV",
                    "excel": "Excel",
                    "pageLength": {
                        "-1": "Vis alle rader",
                        "_": "Vis %d rader"
                    },
                    "pdf": "PDF",
                    "print": "Utskrift",
                    "collection": "Samling <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                    "colvis": "Kolonne-synlighet",
                    "copyKeys": "Trykk ctrl eller u2318 + C for &aring; kopiere tabelldata til systemets utklippstavle.<br \/><br \/>For &aring; avbryte, klikk p&aring; denne meldingen eller trykk p&aring; escape.",
                    "copyTitle": "Kopier til utklippstavle"
                },
                "decimal": ",",
                "searchBuilder": {
                    "conditions": {
                        "date": {
                            "after": "Etter",
                            "between": "Mellom",
                            "empty": "Tom",
                            "equals": "Er lik",
                            "not": "Ikke",
                            "notBetween": "Ikke mellom",
                            "notEmpty": "Ikke tom",
                            "before": "F&oslash;r"
                        },
                        "number": {
                            "between": "Mellom",
                            "empty": "Tom",
                            "equals": "Er lik",
                            "lt": "Mindre enn",
                            "lte": "Mindre eller lik",
                            "not": "Ikke",
                            "notBetween": "Ikke mellom",
                            "notEmpty": "Ikke tom",
                            "gt": "St&oslash;rre enn",
                            "gte": "St&oslash;rre eller lik"
                        },
                        "string": {
                            "contains": "Inneholder",
                            "empty": "Tom",
                            "equals": "Er lik",
                            "not": "Ikke",
                            "notEmpty": "Ikke tom",
                            "startsWith": "Starter med",
                            "endsWith": "Slutter med"
                        },
                        "array": {
                            "equals": "Er lik",
                            "empty": "Tom",
                            "contains": "Inneholder",
                            "not": "Ikke",
                            "notEmpty": "Ikke tom",
                            "without": "Uten"
                        }
                    },
                    "data": "Data",
                    "deleteTitle": "Slett filtreringsregel",
                    "logicAnd": "Og",
                    "logicOr": "Eller",
                    "value": "Verdi",
                    "add": "Legg til betingelse",
                    "button": {
                        "0": "S&oslash;kekonstrukt&oslash;r",
                        "_": "S&oslash;kekonstrukt&oslash;r (%d)"
                    },
                    "clearAll": "Fjern alle",
                    "condition": "Betingelse",
                    "leftTitle": "Rykk tilbake betingelse",
                    "rightTitle": "Rykk inn betingelse",
                    "title": {
                        "0": "S&oslash;kekonstrukt&oslash;r",
                        "_": "S&oslash;kekonstrukt&oslash;r (%d)"
                    }
                },
                "searchPanes": {
                    "count": "{total}",
                    "countFiltered": "{shown} ({total})",
                    "clearMessage": "Fjern alle",
                    "collapse": {
                        "0": "S&oslash;kerute",
                        "_": "S&oslash;kerute (%d)"
                    },
                    "emptyPanes": "Ingen s&oslash;kerute",
                    "loadMessage": "Laster inn s&oslash;kerute...",
                    "title": "Aktive filter - %d",
                    "showMessage": "Vis alle",
                    "collapseMessage": "Komprimer Alle"
                },
                "select": {
                    "cells": {
                        "1": "1 celle er valgt",
                        "_": "%d celler er valgt"
                    },
                    "columns": {
                        "1": "1 kolonne er valgt",
                        "_": "%d kolonner er valgt"
                    }
                },
                "thousands": " ",
                "info": "Viser _START_ til _END_ av _TOTAL_ oppf&oslash;ringer",
                "infoEmpty": "Viser 0 til 0 av 0 oppf&oslash;ringer",
                "infoFiltered": "filtrert fra totalt _MAX_ oppf&oslash;ringer",
                "lengthMenu": "Vis _MENU_ oppf&oslash;ringer",
                "zeroRecords": "Velg uttale (IPA) over",
                "datetime": {
                    "previous": "forrige",
                    "next": "neste",
                    "hours": "timer",
                    "minutes": "minutter",
                    "seconds": "sekunder",
                    "unknown": "ukjent"
                },
                "editor": {
                    "close": "Lukk",
                    "create": {
                        "button": "Ny",
                        "title": "Ny oppføring",
                        "submit": "Opprett"
                    },
                    "edit": {
                        "button": "Endre",
                        "title": "Endre oppføring",
                        "submit": "Oppdater"
                    },
                    "remove": {
                        "button": "Slett",
                        "title": "Sletting",
                        "submit": "Slett",
                        "confirm": {
                            "_": "Er du sikker på at du vil slette %d rader?",
                            "1": "Er du sikker på at du vil slette 1 rad?"
                        }
                    },
                    "error": {
                        "system": "En systemfeil har inntruffet (Mer informasjon)"
                    },
                    "multi": {
                        "restore": "Gjør om endringer",
                        "noMulti": "Dette feltet kan redigeres individuelt men ikke som del av en gruppe."
                    }
                }



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

            lengthMenu: [50,100,1000],

            columns: [
                {
                    "className":      'dt-control',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": ''
                },
                { data: "kons_vok", title: "Kons/Vok"},
                { data: "gruppe", title: "Gruppe"},
                { data: "ipa", title: "Uttale (IPA)"},
                { data: "grafem", title: "Bokstavkombinasjon: "},
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

