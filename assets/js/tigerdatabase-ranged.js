$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var lvl = parseFloat( data[29] ) || 0; // use data for the lvl column
 
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

var rangeddata = [{
    "ItemName": "Javelin",
    "vecHitOffsetY": 12,
    "ItemDescription": "物品说明-英文",
    "LongRangeDamage": 1,
    "DoHurtAnimTime": 0.60000002384186,
    "WeaponCachedMaxRange": 80,
    "HighLowDamage": 2,
    "AmmoID": 18420999,
    "LoadAmmoCount": 1,
    "fPresistHoldingToSpreadTime": 2.635999917984,
    "LongRange": 41,
    "DamageDownLv7": 0.80800002813339,
    "iFirstMinRadius": 9,
    "kind": 2,
    "nMaxFireRange": 18,
    "fHoldLvPerscent": 0.40000000596046,
    "costfield": 1,
    "DamageDownLv6": 0.80800002813339,
    "Persist1WeaponWeightLevel": 0,
    "DamageDownLv2": 0.89300000667572,
    "LoadAmmoTime": 0,
    "ShootDamageFactor": 0.61799997091293,
    "WeaponWeightLevel": 2,
    "nSwitchWeapon": 0,
    "bIsUseOnHorse": 1,
    "ShortRangeDamage": 1.1000000238419,
    "WeaponWeight": 1,
    "ShortRange": 8,
    "DamageDownLv5": 0.8299999833107,
    "Level": 4,
    "DamageDownLv8": 0.78600001335144,
    "IconTexture": "",
    "DamageDownLv9": 0.78600001335144,
    "DamageShieldFactor": 0.69999998807907,
    "HoldingTime": 2,
    "ItemId": 18160003,
    "DamageDownLv3": 0.85199999809265,
    "vecHitOffsetX": -12,
    "fOriginalSpeed": 63,
    "Persist2WeaponWeightLevel": 2,
    "ShootDamageDown": 0.032600000500679,
    "nDifficuty": 8,
    "SkeletalMesh": "throwjavelin_lv04_100cm_01.Mesh.throwjavelin_lv04_120cm_01",
    "FetchingTime": 0.28000000119209,
    "CannotAttackRange": 3,
    "DamageDownLv4": 0.8299999833107,
    "DamageDownLv1": 0.97200000286102,
    "iSecondMinRadius": 4
  }];

$(document).ready(function() {
    var cols = [];
    
    var exampleRecord = rangeddata[0];
    
    //get keys in object. This will only work if your statement remains true that all objects have identical keys
    var keys = Object.keys(exampleRecord);
    
    //for each key, add a column definition
    keys.forEach(function(k) {
        cols.push({
        title: k,
        data: k
        //optionally do some type detection here for render function
        });
    });

    var table = $('#hellotable').DataTable({
        "columns": cols,
        "paging": true,
        "iDisplayLength": 50,
        "ajax": "./data/0072/rangedweapon.json",
            "columnDefs": [
            // {
            //     "targets": [ 0 ,1 ],
            //     "visible": true,
            //     "searchable": true
            // },
            {
                "targets": ["_all"],
                "visible": false,
            }
        ]
    });

    /* Table default checked */
    togglecheckbox("checkbox_ItemName");
    togglecheckbox("checkbox_FetchingTime");
    togglecheckbox("checkbox_Level");
    togglecheckbox("checkbox_LongRangeDamage");
    togglecheckbox("checkbox_LoadAmmoTime");
    togglecheckbox("checkbox_ShootDamageFactor");

    table.rows.add(rangeddata).draw();
    

    $('input.toggle-vis').on( 'change', function (e) {
        e.preventDefault();
        // Get the column API object
        var column = table.column( $(this).attr('data-column') );
        
        // Toggle the visibility
        column.visible(this.checked);
    } );


	// Event listener to the two range filtering inputs to redraw on input
    $('#min, #max').keyup( function() {
        table.draw();
    } );

    function togglecheckbox(itemID){
        element = document.getElementById(itemID);
        element.checked = !element.checked;
        
        var column = table.column( $(element).attr('data-column') );
        column.visible(element.checked);
    }
} );

