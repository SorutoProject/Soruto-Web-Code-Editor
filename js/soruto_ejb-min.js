﻿/*Soruto EJB Ver.0.4*/var so=new Object;so.modal=new Object,so.al=function(t){alert(t)},so.getId=function(t){return document.getElementById(t)},so.setVal=function(t,e){document.getElementById(t).value=e},so.getVal=function(t){return document.getElementById(t).value},so.coL=function(t){console.log(t)},so.getDT=function(){var t=new Date;return(t.getFullYear()+" "+(t.getMonth()+1)+" "+t.getDate()+" "+t.getHours()+" "+t.getMinutes()+" "+t.getSeconds()+" "+t.getDay()).split(" ")},so.sub=function(n){eval("document."+n+".submit();")},so.foc=function(i){eval('document.getElementById("'+i+'").focus();')},so.pMov=function(t){location.href=t},so.pUrl=function(){return location.href},so.pRl=function(){location.reload()},so.pBk=function(){history.back()},so.pFw=function(){history.forward()},so.ver=function(){return"0.3.1 beta"},so.setImgUrl=function(t,e){document.getElementById(t).src=e},so.pMovR=function(t){location.replace(t)},so.getDTT=function(){var t=new Date,e=t.getFullYear(),o=t.getMonth()+1,l=t.getDate(),n=t.getHours(),s=t.getMinutes(),i=t.getSeconds();return e+"/"+o+"/"+l+"("+["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()]+") "+n+":"+s+":"+i},so.pTop=function(){scrollTo(0,0)},so.divIH=function(t,e){document.getElementById(t).innerHTML=e},so.divIHP=function(t,e){document.getElementById(t).innerHTML=document.getElementById(t).innerHTML+e},so.divIHT=function(t,e){document.getElementById(t).innerHTML=e+document.getElementById(t).innerHTML},so.cof=function(t){return window.confirm(t)},so.cofPMov=function(t,e){window.confirm(t)&&(location.href=e)},so.cofPON=function(t,e){window.confirm(t)&&window.open(e,"_blank")},so.coEr=function(t){console.error(t)},so.display=function(t){document.getElementById(t).style.display="block"},so.displayNone=function(t){document.getElementById(t).style.display="none"},so.displayCh=function(t,e){document.getElementById(t).style.display="none",document.getElementById(e).style.display="block"},so.modal.al=function(t,e){var o=document.getElementById("so-modal");o.style.display="block",o.style.background="rgba(193,193,193,0.7)",o.style.position="fixed",o.style.top=0,o.style.right=0,o.style.left=0,o.style.bottom=0,o.style.margin="auto",o.style.cursor="default";var l=document.createElement("div");l.style.display="block",l.innerHTML="<b><center>"+t+'</center></b><hr color="#bababa">'+e+'<br><center><hr color="#bababa"><input type="button" value="OK" onclick="so.modal.close();" id="sorutoejbmodalclose" style="width:64px;height:27px;"></center>',l.style.position="absolute",l.style.top=0,l.style.right=0,l.style.left=0,l.style.bottom=0,l.style.margin="auto",l.style.width="300px",l.style.height="200px",l.style.background="#fff",l.style.overflow="auto",l.style.boxShadow="0px 0px 10px",l.style.color="#000",o.appendChild(l),document.getElementById("sorutoejbmodalclose").focus(),so.pTop()},so.modal.ms=function(t,e){var o=document.getElementById("so-modal");o.style.display="block",o.style.background="rgba(193,193,193,0.7)",o.style.position="fixed",o.style.top=0,o.style.right=0,o.style.left=0,o.style.bottom=0,o.style.margin="auto",o.style.cursor="default";var l=document.createElement("div");l.style.display="block",l.innerHTML="<b><center>"+t+'</center></b><hr color="#bababa">'+e,l.style.position="absolute",l.style.top=0,l.style.right=0,l.style.left=0,l.style.bottom=0,l.style.margin="auto",l.style.width="300px",l.style.height="200px",l.style.background="#fff",l.style.overflow="auto",l.style.boxShadow="0px 0px 10px",l.style.color="#000",o.appendChild(l),so.pTop()},so.modal.custom=function(t){var e=document.getElementById("so-modal");e.style.display="block",e.style.background="rgba(193,193,193,0.7)",e.style.position="fixed",e.style.top=0,e.style.right=0,e.style.left=0,e.style.bottom=0,e.style.margin="auto",e.style.cursor="default";var o=document.createElement("div");o.style.display="block",o.innerHTML=t,o.style.position="absolute",o.style.top=0,o.style.right=0,o.style.left=0,o.style.bottom=0,o.style.margin="auto",o.style.width="300px",o.style.height="200px",o.style.background="#fff",o.style.overflow="auto",o.style.boxShadow="0px 0px 10px",o.style.color="#000",e.appendChild(o),so.pTop()},so.modal.cofPMov=function(t,e,o){var l=document.getElementById("so-modal");l.style.display="block",l.style.background="rgba(193,193,193,0.7)",l.style.position="fixed",l.style.top=0,l.style.right=0,l.style.left=0,l.style.bottom=0,l.style.margin="auto",l.style.cursor="default";var n=document.createElement("div");n.style.display="block",n.innerHTML="<b><center>"+t+'</center></b><hr color="#bababa">'+e+'<br><center><hr color="#bababa"><input type="button" value="Yes" onclick="so.pMov(\''+o+'\');so.modal.close();" style="width:64px;height:27px;">&nbsp;<input type="button" value="No" onclick="so.modal.close();" style="width:64px;height:27px;"></center>',n.style.position="absolute",n.style.top=0,n.style.right=0,n.style.left=0,n.style.bottom=0,n.style.margin="auto",n.style.width="300px",n.style.height="200px",n.style.background="#fff",n.style.overflow="auto",n.style.boxShadow="0px 0px 10px",n.style.color="#000",l.appendChild(n),so.pTop()},so.modal.close=function(){var t=so.getId("so-modal");t.style.display="none";var e=t.childNodes[0];t.removeChild(e)},so.modal.cTime=function(t){setTimeout("so.modal.close();",t)};