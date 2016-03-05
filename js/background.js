$(document).ready(function (){ 


    xhr = new XMLHttpRequest();
    xhr.open("GET","https://www.flickr.com/",true);
    // body...
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) 
        {
            if (xhr.responseText) 
            {
                   console.log("Привет");


                }
                else{
                alert("Hi");    
                }


            }
        };
    
});