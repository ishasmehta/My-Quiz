class Quiz {
  constructor() {}
  getState() {
    database.ref("gameState").on("value", function (data) {
      gameState = data.val();
    });

  }
  updateState(state) {
    database.ref("/").update({
      gameState: state
    });
  }
  async start() {
    if (gameState === 0) {
    console.log("Inside Quiz start"+gameState);
      contestant = new Contestant();
      contestant.getCount();
      question = new Question();
      question.display();
    }
  }
  play() {
      question.hide();
      //print results
      text("Result of the quiz(correct answer displayed in green)",340,50);
      Contestant.getContestantInfo();
      if(allContestants !== undefined){
          var displayAnswer = 230;
          var correctAnswer = "2";
          for(var i in allContestants){
            if(allContestants[i].answer === correctAnswer)
                fill("green");
            else    
                fill("red");
            text(allContestants[i].name + ":" + allContestants[i].answer, 250, displayAnswer);
            displayAnswer += 30;
          }

      }
  }
}
