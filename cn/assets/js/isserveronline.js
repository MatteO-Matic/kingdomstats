function getServerStatus1(e){signal(e)}function getServerStatus2(e){signal(e)}function getServerStatus3(e){signal(e)}function signal(e){var a=e;switch(console.log(a),"North America"==a.name&&(a.name="America"),document.getElementById("playercount_"+a.name).innerHTML=a.amount,a.status){case-1:document.getElementById("server_"+a.name).innerHTML="\u67e5\u8be2\u5931\u8d25",$("#server_"+a.name).addClass("major");break;case 0:document.getElementById("server_"+a.name).innerHTML="\u672a\u5f00\u670d",$("#server_"+a.name).addClass("major");break;case 1:document.getElementById("server_"+a.name).innerHTML="\u672a\u5f00\u670d",$("#server_"+a.name).addClass("good");break;case 2:document.getElementById("server_"+a.name).innerHTML="\u91cd\u8d1f\u8377",$("#server_"+a.name).addClass("minor");break;case 3:document.getElementById("server_"+a.name).innerHTML="\u9ad8\u8d1f\u8377",$("#server_"+a.name).addClass("high");break;default:document.getElementById("server_"+a.name).innerHTML="Unknown",$("#server_"+a.name).addClass("major")}}function currentPlayersSignal(e){document.getElementById("playercount").innerHTML=e.response.player_count}$(document).ready(function(){$.ajax({type:"GET",url:"//odp3.oasgames.com/api/data/request-proxy?sign=c83b02094fa22ff0568e2b3f26d36ea8&url=http%3A%2F%2F119.28.62.185%3A55000%2Flz%3Fm%3Dgsp%26token%3D693978e716177b67%26t%3D1490961295%26callback%3DgetServerStatus2",dataType:"jsonp",success:function(e){signal(e)}}),$.ajax({type:"GET",url:"//odp3.oasgames.com/api/data/request-proxy?sign=cf8f549747f3e2135752eac5f3b83866&url=http%3A%2F%2F34.205.170.34%3A55000%2Flz%3Fm%3Dgsp%26token%3D955882743bdeafda%26t%3D1490961295%26callback%3DgetServerStatus1",dataType:"jsonp",success:function(e){signal(e)}}),$.ajax({type:"GET",url:"//odp3.oasgames.com/api/data/request-proxy?sign=d885fdf451778490c0039d97e298449f&url=http%3A%2F%2F37.61.219.49%3A55000%2Flz%3Fm%3Dgsp%26token%3Df0f32fde78840380%26t%3D1490961295%26callback%3DgetServerStatus3",dataType:"jsonp",success:signal}),$.ajax({type:"GET",url:"//api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?key=5A2E34A7B75896691F0FF3A5EED5CAF9&format=json&appid=534500&jsonp=currentPlayersSignal",dataType:"jsonp",success:function(e){signal(e)}})});
