$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var lvl = parseFloat( data[1] ) || 0; // use data for the lvl column
 
        if ( ( isNaN( min ) && isNaN( max ) ) ||
             ( isNaN( min ) && lvl <= max ) ||
             ( min <= lvl   && isNaN( max ) ) ||
             ( min <= lvl   && lvl <= max ) )
        {
            return true;
        }
        return false;
    }
);

$(document).ready(function() {
	var table = $('#hellotable').DataTable({ 
			"iDisplayLength": 50,
			"ajax": './data/0072/meleeweapon.json',
			"columns": [
			{ "data": "ItemName" },
			{ "data": "Level" },
			{ "data": "FrontWeaponPartName" },
			{ "data": "BackWeaponPartName" },
			{ "data": "fWeaponLength" },
			{ "data": "FiringTime" }
			]
	});
	// Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup( function() {
        table.draw();
    } );
} );