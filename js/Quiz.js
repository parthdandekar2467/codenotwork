class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    if(question!==undefined){
      question.hide();
    }

    //write code to change the background color here
    background("PINK");

    //write code to show a heading for showing the result of Quiz
    fill(30);
    textSize(30);
    text("Result of the Quiz", 340, 50);
    

    //call getContestantInfo() here
    Contestant.getContestantInfo();


    //write condition to check if contestantInfor is not undefined
    if(Contestant!==undifined){
      var displayAnswer = 230;

      fill("cyan");
      textSize(20);
      text("Contestant who answered correct will he highlited in green color");

      for(var plr in allContestants){
        var correctAns = "2"
        if(correctAns === allContestants[plr].answer)
        fill("green")
         else{
        fill("red ")
      }
    }

    //write code to add a note here
    displayAnswer+=30;

    //write code to highlight contest who answered correctly
    textSize(20);
    text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_Answers);
  }

}
}
