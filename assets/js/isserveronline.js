function signal(e){for(var r=JSON.parse(e),a=0;3>a;a++)switch(r[a].status){case-1:document.getElementById("server"+a).innerHTML="Query failed",$("#server"+a).addClass("major");break;case 0:document.getElementById("server"+a).innerHTML="Server closed",$("#server"+a).addClass("major");break;case 1:document.getElementById("server"+a).innerHTML="Low load",$("#server"+a).addClass("good");break;case 2:document.getElementById("server"+a).innerHTML="Medium load",$("#server"+a).addClass("minor");break;case 3:document.getElementById("server"+a).innerHTML="High load",$("#server"+a).addClass("high");break;default:document.getElementById("server"+a).innerHTML="Unknown",$("#server"+a).addClass("major")}}function currentPlayersSignal(e){document.getElementById("playercount").innerHTML=e.response.player_count}$(document).ready(function(){$.ajax({type:"GET",url:"//manager.hw.99.com/signals.php",dataType:"jsonp",success:function(e){}}),$.ajax({type:"GET",url:"//api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=5A2E34A7B75896691F0FF3A5EED5CAF9&format=json&appid=534500&jsonp=currentPlayersSignal",dataType:"jsonp",success:currentPlayersSignal})});