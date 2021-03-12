function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6iC1wMV8GLf":
        Script1();
        break;
  }
}

function Script1()
{
  /* Declare the XML node variables globally,
declare the player, xmlDoc and the xmlhttp globally */

var comp0="";
var comp1="";
var name0="";
var name1="";
var desc0="";
var desc1="";
var package0="";
var package1="";
var player=GetPlayer();
var xmlDoc="";
var xmlhttp="";

/* Request the xml doc from the server using the get method, file name and set asychronous to false.
Send the request and assign the resonse to the xmlDoc */

xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","SAG.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

/* select the first package node and scan it for &#60; and replace it with < scan for &#62; and replace it with > and scan for &#47 and replace it with /
This is done for each node retrieved. The final value is assigned to a variable pre-defined in the player.
The find and replace is done so that some formatting can be retrieved from the xml document since XSL/XSLT and CSS can't be used for formatting. */

package0=xmlDoc.getElementsByTagName("package")[0].childNodes[0].nodeValue;
var n=package0.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#46;/g,"/");
player.SetVar("Package1",y);

package1=xmlDoc.getElementsByTagName("package")[1].childNodes[0].nodeValue;
var n=package1.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("Package2",y);

comp0=xmlDoc.getElementsByTagName("comp")[0].childNodes[0].nodeValue;
var n=comp0.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("Competency1",y);

comp1=xmlDoc.getElementsByTagName("comp")[1].childNodes[0].nodeValue;
var n=comp1.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("Competency2",y);

name0=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
var n=name0.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("CompName1",y);

name1=xmlDoc.getElementsByTagName("title")[1].childNodes[0].nodeValue;
var n=name1.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("CompName2",y);

desc0=xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
var n=desc0.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("CompDescription1",y);

desc1=xmlDoc.getElementsByTagName("description")[1].childNodes[0].nodeValue;
var n=desc1.replace(/&#60;/g,"<");
var x=n.replace(/&#62;/g,">");
var y=x.replace(/&#47;/g,"/");
player.SetVar("CompDescription2",y);


}

