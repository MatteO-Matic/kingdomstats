function jsonpophorsearmors(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=29,defaultchecked=["checkbox_ItemName"],spawntable()}function populatetablehorsearmors(){$.getJSON("/data/0077/horsearmor.json",jsonpophorsearmors)}function jsonpopadjutants(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=29,defaultchecked=["checkbox_nFight","checkbox_nQibing","checkbox_nQishe","checkbox_nGongnu","checkbox_nBubing","checkbox_nStrategy","checkbox_fHealth","checkbox_SoldierName"],spawntable()}function populatetableadjutants(){$.getJSON("/data/0077/adjutants.json",jsonpopadjutants)}function jsonpopranged(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=29,defaultchecked=["checkbox_ItemName","checkbox_FetchingTime","checkbox_Level","checkbox_LongRangeDamage","checkbox_LoadAmmoTime","checkbox_ShootDamageFactor"],spawntable()}function populatetableranged(){$.getJSON("/data/0077/rangedweapon.json",jsonpopranged)}function jsonpopmelee(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=48,defaultchecked=["checkbox_ItemName","checkbox_Level","checkbox_Attackspeed","checkbox_DpsCut","checkbox_DpsPuncture"],spawntable()}function populatetablemelee(){$.getJSON("/data/0077/meleeweapon.json",jsonpopmelee)}function jsonpoparmor(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=10,defaultchecked=["checkbox_ItemName","checkbox_MetalDefenseValue","checkbox_Level","checkbox_MetalFailPro"],spawntable()}function populatetablearmor(){$.getJSON("/data/0077/armor.json",jsonpoparmor)}function populatetablesoldiers(){$.getJSON("/data/0077/soldiers.json",jsonpopsoldiers)}function jsonpopsoldiers(e){tablecolumns={},tablecolumns[0]=e.data[0],ajaxdata=e.data,column_level_index=52,defaultchecked=["checkbox_MaxSpeed","checkbox_fHealth","checkbox_SoldierName","checkbox_Level"],spawntable()}function populatetablearmytype(){}function urlObject(e){"use strict";var t,a,n,o,l,c,s,m,i={},r=document.createElement("a"),u={url:window.location.href,unescape:!0,convert_num:!0};if("object"!=typeof e)e=u;else for(a in u)u.hasOwnProperty(a)&&void 0===e[a]&&(e[a]=u[a]);if(r.href=e.url,m=r.search.substring(1),t=m.split("&"),t[0].length>1)for(n=0;n<t.length;n+=1)l=t[n].split("="),e.unescape?(c=decodeURI(l[0]),s=decodeURI(l[1])):(c=l[0],s=l[1]),e.convert_num&&(s.match(/^\d+$/)?s=parseInt(s,10):s.match(/^\d+\.\d+$/)&&(s=parseFloat(s))),void 0===i[c]?i[c]=s:"string"==typeof i[c]?i[c]=[i[c],s]:i[c].push(s),l=[];return o={protocol:r.protocol,hostname:r.hostname,host:r.host,port:r.port,hash:r.hash.substr(1),pathname:r.pathname,search:r.search,parameters:i}}function getDataTableUrl(){var e=$("#hellotable").DataTable(),t=window.location.origin+window.location.pathname+"?";return t+="cf=",e.columns().every(function(e){this.visible()&&(t+=e+",")}),t+="&",""!=document.getElementById("max").value&&(t+="lmax="+document.getElementById("max").value+"&"),""!=document.getElementById("min").value&&(t+="lmin="+document.getElementById("min").value+"&"),t}function spawntable(){function e(e){element=document.getElementById(e),element.checked=!element.checked;var t=i.column($(element).attr("data-column"));t.visible(element.checked)}if(null==imagepath_json)return void $.getJSON("/data/0077/imagepaths.json",function(e){imagepath_json=e,spawntable()});var t=window.location.href,a=urlObject(t).parameters,n=[],o=tablecolumns[0],l=Object.keys(o),c=0;l.forEach(function(e){("ItemName"==e||"SoldierName"==e)&&(itemname_column_index=c),"Level"==e&&(column_level_index=c),n.push({title:e,data:e}),c++});var s=window.location.pathname,m=s.split("/").pop().split(".")[0],i=$("#hellotable").DataTable({deferRender:!0,columns:n,paging:!0,scrollX:!0,iDisplayLength:25,aaData:ajaxdata,columnDefs:[{targets:["_all"],visible:!1},{targets:itemname_column_index,render:function(e,t,a,n){if(-1==itemname_column_index)return"";if(!imagepath_json[a.ItemId])return"";var o=imagepath_json[a.ItemId][0];return"soldiers"==m&&(o=imagepath_json[a.ItemId][1]),'<img class="tableimage img-thumbnail" src="https://tkstats.info/assets'+o+'"/> '+e}}]});if(i.rows.add(tablecolumns).draw(),$("#hellotable tbody").on("click","tr",function(){var e=i.row(this).data();window.open("https://tkstats.info/item/"+e.ItemId)}),null!=a.lmax&&(document.getElementById("max").value=a.lmax),null!=a.lmin&&(document.getElementById("min").value=a.lmin),null!=a.cf)if(a.cf.constructor==stringConstructor){for(var r=a.cf.split(","),u=0;u<r.length;++u)if(null!=r[u]&&""!=r[u]){var d=i.column(r[u]);d.visible(!0);var h=document.getElementById("cblist").getElementsByTagName("li"),p=h[r[u]].getElementsByTagName("input")[0];p.checked=!0}}else console.debug("Unknown filter constructor");else for(u=0;u<defaultchecked.length;u++)e(defaultchecked[u]);$("input.toggle-vis").on("change",function(e){e.preventDefault();var t=i.column($(this).attr("data-column"));t.visible(this.checked)}),$("#min, #max").keyup(function(){i.draw()})}var defaultchecked=[],stringConstructor="test".constructor,arrayConstructor=[].constructor,objectConstructor={}.constructor,column_level_index=-1,itemname_column_index=-1;$.fn.dataTable.ext.search.push(function(e,t,a){var n=parseInt($("#min").val(),10),o=parseInt($("#max").val(),10),l=parseFloat(t[column_level_index])||0;return isNaN(n)&&isNaN(o)||isNaN(n)&&o>=l||l>=n&&isNaN(o)||l>=n&&o>=l?!0:!1});var imagepath_json;