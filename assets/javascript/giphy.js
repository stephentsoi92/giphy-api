/*
create an app that has various buttons on the top of the different animal kingdom and once the user click on the button 10 gifs will be displayed showing content that is relevant to the animal that was click. The user also has the option to look for other animals by typing in the box below the words "add an Animal". When the animal is added then the button should be created in the buttons tab and make the 10 gifs appear
*/

// 1. create the animal array
var topics = ["dog", "cat", "zebra", "lion", "bull", "eagle", "cobra", "shark", "cheetah", "tarantula"]

// 2. make the variables necessary


// 3. display array on the DOM
for (var i=0; i<topics.length; i++)
{
    $(".animal-btn-arr").append("<button topic="+topics[i]+">"+topics[i]+"</button>")
}

//4. function for when the user click the buttons the we call the funtion to obtain the api for the giphys
$("button").on("click",function ()
    {
        //if I wanted to caputer the innerText of $(this) how would i do it?
        var chosenTopic = $(this).attr("topic")

        console.log(chosenTopic)// WORKS to capture the button of the topic click

        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ chosenTopic+"&api_key=TXpTp5lyJYpyVcndS4tIlmnGPeFaKnGn&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
        console.log(response.data)
        var results= response.data
        //for loop to go through the reponses array

        for (var j=0; j<results.length;j++)
        var gifRows = $("<img>")
        images
        $(".gifs").html('<img src="'+response.data[j].images.original.url+'">')
        console.log(response.data[0].images.original.url)
        console.log(response.data[0].images.original_still.url)
        $

    });
})