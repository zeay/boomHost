'use strict'
var section=document.getElementById('result');
var footerArea=document.getElementsByTagName('footer')[0];
var asideArea=document.getElementsByTagName('aside')[0];
var getElements;
window.onload = function () {
    var inlineContent;
    var inputArea = document.getElementById('mainContainer');
    var result = document.getElementById('resultArea');
    var box;
        box = document.getElementById('query');
    var query;
    var error = document.getElementById('error');
    var web = document.getElementById('web');
    var videos = document.getElementById('video');
    var clickEvent=[];
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');
    web.addEventListener('click',function(){
        query = document.getElementById('query').value;
        if (query === '') {
             err();
        } else {
            error.style.display = 'none';
            footerArea.style.display='none';
            inlineContent();
            makeSearch(query);
        }
    });
    videos.addEventListener('click',function(){
        query = document.getElementById('query').value;
        if (query === '') {
             err();
        } else {
            error.style.display = 'none';
            footerArea.style.display='none';
            inlineContent();
            videoSearch(query);
        }
    });
    box.addEventListener('keypress', function(event) {
            enterFunction(event);
    });
    function enterFunction(event){
            query = document.getElementById('query').value;
                if (event.keyCode === 13 && query !=="" ) {
                        footerArea.style.display='none';
                        inlineContent();
                        makeSearch(query);
                    }else if(query ===""){
                        box.placeholder="Ahh! You have to Fill In Here Error!";
                    }
    }
    
    function inlineContent(){
        inputArea.innerHTML = '';
        result.innerHTML='';
        next.style.display='none';
        prev.style.display='none';
        var links="<button class='inlineButton firstButton'>Web</button><button class='inlineButton'>Video</button><!-- <button class='inlineButton'>Image</button> -->";
        var element = "<div class='row'><div class='col-md-12 col-lg-12'><div class='inline-content'><a href='index.html'><img src='im/icon.jpg' class='inline-img' alt='Boom Logo'></a><input type='text' autocomplete='on' id='query' placeholder='Enter Your Search Query and Press Enter'><hr class='hr'>"+links+"</div></div></div>";
        inputArea.innerHTML += element;
         box = document.getElementById('query');
        box.value=query;
        getElements=document.getElementsByClassName('inlineButton');
         getElements[0].addEventListener('click',function(e){
                e.preventDefault();
                producinSear(getElements[0]);
         });
        getElements[1].addEventListener('click',function(e){
                e.preventDefault();
                producinSear(getElements[1]);
         });
       box.addEventListener('keypress', function(event){
            enterFunction(event);
       });
    }
    
    function producinSear(element){
        next.style.display='none';
        prev.style.display='none';
        result.innerHTML='';
         if(element.innerText === 'Web'){
               makeSearch(box.value); 
        }else if(element.innerText === 'Video'){
            videoSearch(box.value);
        }
    }

        //error Function
    function err(){
            error.className = 'styleError';
            error.innerHTML = "It's Empty ,You need to fill your query";
    }

}