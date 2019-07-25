/*
create an app that has various buttons on the top of the different animal kingdom and once the user click on the button 10 gifs will be displayed showing content that is relevant to the animal that was click. The user also has the option to look for other animals by typing in the box below the words "add an Animal". When the animal is added then the button should be created in the buttons tab and make the 10 gifs appear
*/

// 1. create the animal array
var topics = ["pasta", "car", "cellphone", "hat", "drake", "angelina jolie", "michelle obama", "shoe", "blue", "budha"];

// 2. make the variables necessary


// 3. display array on the DOM
function topicList ()
{
    $(".animal-btn-arr").empty();
    for (var i=0; i<topics.length; i++)
    {
        $(".animal-btn-arr").append('<button class="topic-btn btn btn-primary" topic="'+topics[i]+'">'+topics[i]+'</button>');
    };
};
// Calling the renderButtons function to display the intial buttons
topicList();

//4. function for when the user click the buttons the we call the funtion to obtain the api for the giphys
function pushGif ()
{
    $(".topic-btn").on("click",function ()
        {
            console.log(this);
            //if I wanted to caputer the innerText of $(this) how would i do it?
            var chosenTopic = $(this).attr("topic");

            console.log(chosenTopic);// WORKS to capture the button of the topic click

            var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ chosenTopic+"&api_key=TXpTp5lyJYpyVcndS4tIlmnGPeFaKnGn&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
            console.log(response.data)
            var results= response.data
            //for loop to go through the reponses array

            $(".gifs").empty();
            for (var j=0; j<results.length;j++)

            // Display images and gifs on the DOM
            $(".gifs").append('<img src="'+response.data[j].images.original.url+'"class="gif" data-still="'+response.data[0].images.original_still.url+'" data-animate="'+response.data[0].images.original.url+'" data-state="animate">');
            
            console.log(response.data[0].images.original.url)
            console.log(response.data[0].images.original_still.url)

            // 6. pausing or playing gifs 

            $(".gif").on("click", function() 
            {
                var state = $(this).attr("data-state");
                console.log(state)
                if (state === "still") 
                {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                } 
                else 
                {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
                }
            });

        });
    })
}

// Calling the pushGif function to display the gifs
pushGif()

// 5. add new topics
function addTopic (){
    var newTopic = $(".input-arr").val();
    console.log(newTopic); // WORKS it captures the users input
    topics.push(newTopic);
    topicList()
    pushGif()
};
// handles the submit button when the user clicks
$(".submit-btn-arr").on("click", addTopic)

