class Contestant{
    constructor(){
        this.answer = null;
        this.answer = 0;
        this.name = null;
    }
    getCount(){
        database.ref("contestantCount").on("value",function(data){
            contestantCount = data.val();
        });
    }
    updateCount(count){
        database.ref("/").update({
            contestantCount:count
        });
    }



    update(){
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
            answer : this.answer,
            name : this.name
        });
        console.log(contestantIndex,this.answer,this.name);
    }
    static getContestantInfo(){
        database.ref("contestants").on("value",function(data){
            allContestants = data.val();
        });
    }
}