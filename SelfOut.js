var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function iniciar()
{
    document.getElementById("TextSelfOut").innerHTML = "";
    recognition.start();
} 

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("TextSelfOut").value;

    var utterance = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterance);

    Webcam.attach(camera);

    setTimeout(function(){

        img_id = "selfie1";
        take_snapshot();

        speak_data = "Tomando siguiente SelfOut en 2 segundos";

        utterance = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterance);

    }, 2000);

    setTimeout(function(){

        img_id = "selfie2";
        take_snapshot();

        speak_data = "Tomando siguiente SelfOut en 2 segundos";

        utterance = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterance);

    }, 2000);

    setTimeout(function(){

        img_id = "selfie3";
        take_snapshot();

        speak_data = "Tomando siguiente SelfOut en 2 segundos";

        utterance = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterance);

    }, 2000);
}

Webcam.set({
    width: 340,
    height: 250,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

recognition.onresult = function(event)  //El onresult contiene los valores, y el event obtiene los valores
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("TextSelfOut").innerHTML = Content;

    console.log(Content);

    if(Content == "Tómame una foto")
    {
        console.log("Tomando selfie ...");
        speak();
    }
}

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        if(img_id == "selfie1")
        {
            document.getElementById("result").innerHTML = "<img id='selfie1' src='"+ data_uri +"'/>"
        }
        if(img_id == "selfie2")
        {
            document.getElementById("result1").innerHTML = "<img id='selfie2' src='"+ data_uri +"'/>"
        }
        if(img_id == "selfie3")
        {
            document.getElementById("result2").innerHTML = "<img id='selfie3' src='"+ data_uri +"'/>"
        }
    })
}