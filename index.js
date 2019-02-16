'use strict'
var xmlHttpRequest;
var content;
var url;
var key;
var cx;
var query;
var displayDetails;
var inlineContent;
var videoSearch
var makeSearch
var result;
function createRequest(){
    try{
        xmlHttpRequest=new XMLHttpRequest();
    }catch(tryMS){
        try{
           xmlHttpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(otherMs){
            try{
                xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(failed){
                xmlHttpRequest=null;
            }
        }
        }
    return xmlHttpRequest;
}
 function makeSearch(data){
     
    getElements[1].classList.remove('active');
    getElements[0].classList.add('active'); 
    key = 'AIzaSyAv6OuxQk7OaTfRFsYbt-K0YQjTkd52CNk';
    cx = '010920237652087603993:k44dbmiftna';
    query = data;
    url = "https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+query+"";
    createRequest();
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.onreadystatechange = displayDetails;
    xmlHttpRequest.send();
}
 function videoSearch(data) {
    getElements[0].classList.remove('active');
    getElements[1].classList.add('active');
    console.log('inVideoSearch');
    key = 'AIzaSyAv6OuxQk7OaTfRFsYbt-K0YQjTkd52CNk';
    cx = '010920237652087603993:esyci4rft5e';
    query = data;
    url = "https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+query+"";
    createRequest();
    xmlHttpRequest.open('GET', url, true);
    xmlHttpRequest.onreadystatechange = displayDetails;
    xmlHttpRequest.send();

}
function displayDetails(data){
    if(xmlHttpRequest.readyState ===4 && xmlHttpRequest.status ===200){
        var data= JSON.parse(xmlHttpRequest.response);
        content = data;
        displayContent(content);
    }

}
function displayContent(data){
    next.style.display='none';
    prev.style.display='none';
    result = document.getElementById('resultArea');
    result.innerHTML='';
    section.style.display='block';
    var displayData=data.items;
    if(data.queries.nextPage && data.queries.previousPage){
        next.style.display='inline-block';
        prev.style.display='inline-block';
    }else{
       next.style.display='inline-block'; 
    }
    for (var i = 0; i < displayData.length; i++) {
        console.log('Inside display loop')
    var element = "<h2 class='inTitle'><a href="+displayData[i].link+" target='_blank'>"+displayData[i].htmlTitle+"</a></h2><p"+ "class='snippet'>"+displayData[i].snippet+"</p><p class='link'>"+displayData[i].link+"</p>";
    result.innerHTML += element;
}
    footerArea.style.display='block';   
}
next.addEventListener('click', function () {
    result.innerHTML='';
    var start = content.queries.nextPage[0].startIndex;
    var nextUrl = "https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+query+"&start="+start+"";
    xmlHttpRequest.open('GET', nextUrl, true);
    xmlHttpRequest.onreadystatechange = displayDetails;
    xmlHttpRequest.send();

});
prev.addEventListener('click', function () {
    result.innerHTML='';
    var start = content.queries.previousPage[0].startIndex;
    var prevUrl = "https://www.googleapis.com/customsearch/v1?key="+key+"&cx="+cx+"&q="+query+"&start="+start+"";
    xmlHttpRequest.open('GET', prevUrl, true);
    xmlHttpRequest.onreadystatechange = displayDetails;
    xmlHttpRequest.send();
});