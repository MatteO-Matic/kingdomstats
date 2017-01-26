$.fn.dataTable.ext.search.push(
    function( settings, data, dataIndex ) {
        var min = parseInt( $('#min').val(), 10 );
        var max = parseInt( $('#max').val(), 10 );
        var lvl = parseFloat( data[48] ) || 0; // use data for the lvl column
 
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


var egdata = [  {
    "ItemName": "Bronze Hilt Sword",
    "ItemDescription": "1-handed Sword",
    "DoHurtAnimTime": 0.24600000679493,
    "MetalBluntCamailValue": 71,
    "SprintAttackTime": 1.5,
    "WeaponFetchingTime": 0.2419999986887,
    "FailFireTime": 0.90799999237061,
    "bIsBeginCharge": 0,
    "ClothCutCamailValue": 46,
    "FiringTime": 0.60600000619888,
    "BackWeaponPartName": "handle",
    "Persist2DamageFactor": 1.0499999523163,
    "PersistFetching2Time": 0.34000000357628,
    "MetalCutCamailValue": 21,
    "bIsUseOnHorse": 1,
    "Persist2WeaponRange": 15,
    "LeatherStabCamailValue": 41,
    "costfield": 1,
    "IconTexture": "",
    "DamageShieldFactor": 0.30000001192093,
    "ReleasePercent": 12,
    "FrontWeaponPartName": "sword",
    "MetalStabCamailValue": 66,
    "Persist2WeaponWeightLevel": 1,
    "BeginDefendTime": 0.0010000000474975,
    "ClothStabCamailValue": 91,
    "AssaultDamageType": 2,
    "nUpDefendType": 1,
    "ScabbardMesh": "OneHsowd_LV05_85cm_01.Mesh.OneHsowd_LV05_85cm_01S",
    "nLeftAttackType": 3333,
    "WeaponCachedMaxRange": 0.81999999284744,
    "Durableness": 200,
    "fFrontWeaponPart": 80,
    "nLeftDefendType": 1,
    "nDownAttackType": 2222,
    "fWeaponLength": 90,
    "CutDamageFactor": 0.40099999308586,
    "LeatherBluntCamailValue": 46,
    "nDownDefendType": 1,
    "fPveDamageFactor": 1,
    "ReleaseParam": 0.94999998807907,
    "nRightDefendType": 1,
    "Persist1WeaponWeightLevel": 0,
    "WeaponWeightLevel": 1,
    "nRightAttackType": 3333,
    "PunctureDamageFactor": 0.4839999973774,
    "ForbidBreakTime": 0.2419999986887,
    "DoubleHitEndTime": 0.49200001358986,
    "Level": 5,
    "ItemId": 18011004,
    "nDifficuty": 3,
    "nIsPveWeapon": 1,
    "Persist1DamageFactor": 1,
    "ClothBluntCamailValue": 21,
    "DoubleHitTime": 1.2999999523163,
    "LeatherCutCamailValue": 71,
    "CannotAttackRange": 0.30000001192093,
    "fBackWeaponPartDamage": 95,
    "WeaponWeight": 3.2799999713898,
    "SkeletalMesh": "OneHsowd_LV05_85cm_01.Mesh.OneHsowd_LV05_85cm_01",
    "SucDefendTime": 0.11800000071526,
    "nUpAttackType": 3333,
    "AssaultDamageFactor": 0.30000001192093,
    "Persist1WeaponRange": 0,
    "PersistFetching1Time": 0.0099999997764826,
    "Attackspeed": 0.84800000488758,
    "DpsCut": 47.28773476115968,
    "DpsPuncture": 57.07547105988098
  }];

$(document).ready(function() {

    var cols = [];
    
    var exampleRecord = egdata[0];
    
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
        "ajax": "./data/0072/meleeweapon.json",
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
    togglecheckbox("checkbox_WeaponFetchingTime");
    togglecheckbox("checkbox_Level");
    togglecheckbox("checkbox_Attackspeed");
    togglecheckbox("checkbox_DpsCut");
    togglecheckbox("checkbox_DpsPuncture");

    table.rows.add(egdata).draw();
    

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

