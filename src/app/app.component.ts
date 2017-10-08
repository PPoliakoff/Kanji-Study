import { Component } from '@angular/core';
import { Kanji } from  './kanji/kanji.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private dakutenChars: Map<String, String> = new Map([["か", "が"], ["き", "ぎ"], ["く", "ぐ"], ["け", "げ"], ["こ", "ご"],
  ["さ", "ざ"], ["し", "じ"], ["す", "ず"], ["せ", "ぜ"], ["そ", "ぞ"], ["た", "だ"], ["ち", "ぢ"], ["つ", "づ"],
  ["て", "で"], ["と", "ど"], ["は", "ば"], ["ひ", "び"], ["ふ", "ぶ"], ["へ", "べ"], ["ほ", "ぼ"],
                             ["ぱ", "ば"], ["ぴ", "び"], ["ぷ", "ぶ"], ["ぺ", "べ"], ["ぽ", "ぼ"]]);

  private handakutenChars: Map<String, String> = new Map([["は", "ぱ"], ["ひ", "ぴ"], ["ふ", "ぷ"], ["へ", "ぺ"], ["ほ", "ぽ"],
                                                          ["ば", "ぱ"], ["び", "ぴ"], ["ぶ", "ぷ"], ["べ", "ぺ"], ["ぼ", "ぽ"]]);
  usertext: string;
  question:string;
  kanji:Kanji;
  score:number;
  revealed:boolean;
  questionnumbermessage:string;
  scoremessage:string;
  constructor() {
    this.kanji=new Kanji();
    this.usertext = "";
    this.score=0;
    this.nextQuestion();
   
   }

   reveal():void{
    this.usertext =this.kanji.getReply();
    this.revealed=true;
   }

   nextQuestion():void{
    this.usertext = "";
    this.question=this.kanji.nextQuestion();
    this.questionnumbermessage=this.kanji.getQuestionNumber().toString() +"/"+ this.kanji.getNumberofQuestions().toString();
    this.scoremessage=this.score.toString()+"/"+this.kanji.getNumberofQuestions().toString();
    this.revealed=false;
  }

  click(event: Event) {
    let c: string;
    c = (event.target as HTMLButtonElement).innerText;
    switch (c) {
      case "⌫":
        this.usertext = this.usertext.slice(0, -1);
        break;
      case "⏎":
      if(this.kanji.checkReply(this.usertext))
        {
          if(this.revealed==false){
            this.score++;
          }

        this.nextQuestion();
        }
        break;
      case '"':
        if (this.usertext.length > 0 && this.dakutenChars.has(this.usertext.slice(-1))) {
          this.usertext = this.usertext.slice(0, -1) + this.dakutenChars.get(this.usertext.slice(-1));
        }
        break;
      case '°':
        if (this.usertext.length > 0 && this.handakutenChars.has(this.usertext.slice(-1))) {
          this.usertext = this.usertext.slice(0, -1) + this.handakutenChars.get(this.usertext.slice(-1));
        }
        break;
      default: this.usertext += c;
    }


  }

}
