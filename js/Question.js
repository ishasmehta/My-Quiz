class Question{
    constructor(){
        this.title = createElement("h1","MyQuiz Game");
        this.input1 = createInput("Enter your name here...");
        this.input2 = createInput("Enter correct option number here...");
        this.button = createButton("Submit");
        this.question = createElement("h3","Question:- What starts and ends with the letter ‘E’, but has only one letter?");
        this.option1 = createElement("h4","1: Everyone ");
        this.option2 = createElement("h4","2: Envelope");
        this.option3 = createElement("h4","3: Estimate ");
        this.option4 = createElement("h4","4: Example");

    }
    display(){
        this.title.position(350,0);
        this.question.position(150,80);
        this.option1.position(150,100);
        this.option2.position(150,120);
        this.option3.position(150,140);
        this.option4.position(150,160);
        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.position(290,300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();

            contestantCount += 1;
            contestant.index = contestantCount;

            console.log(contestant.name, contestant.answer, contestantCount);
            contestant.update();
            contestant.updateCount(contestantCount);
        });

    }
    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
    }
}