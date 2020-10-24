var apigClient = apigClientFactory.newClient();

function chatBotResponse() {
  
  lastUserMessage = userMessage();

  return new Promise(function(resolve,reject){

    var body = {
      "message": lastUserMessage,
      "userId": "lf0"
    };

    //console.log(body)
    var params = {};
    var additionalParams = {};

    apigClient.chatbotPost(params, body, additionalParams)
    .then(function (result) {
      // Add success callback code here.
      
      console.log("Hello" + result.data.body);
      response = (result.data.body.message) ? result.data.body.message : result.data.body;
      console.log(response);
      d = new Date()
      setTimeout(function () {
        outputArea.append(`
          <div class='user-message'>
            <div class='message' style="background-color: #000000;">
            <p>${response}</p>
            <div class="timestamp">${d.getHours()}:${d.getMinutes()}</div>
            </div>
          </div>
        `);
      }, 250);
      resolve("done");
      
    }).catch(function (result) {
      // Add error callback code here.
      console.log("Rejected");
      reject("Rejected");
    });

  });

}

function userMessage() {

  var message = $("#user-input").val();
  console.log(message);
  d = new Date()
  outputArea.append(`
    <div class='bot-message'>
      <div class='message'>
        <p>${message}</p>
        <div class="timestamp">${d.getHours()}:${d.getMinutes()}</div>
      </div>
    </div>
  `);
  return message;

}

//JS Code

var outputArea = $("#chat-output");

$("#user-input-form").on("submit", function (e) {
  chatBotResponse();  
  $("#user-input").val("");

});

$(window).on('keydown', function(e) {
  if (e.which == 13) {

    chatBotResponse();
    $("#user-input").val("");
    return false;
  }
});