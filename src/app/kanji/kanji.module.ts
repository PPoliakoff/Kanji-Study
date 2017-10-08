import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


interface question_response {
  question: string;
  response: string;
}


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class Kanji {

  questions: question_response[] = [
{ question: "小川", response: "おがわ"},
{ question: "月", response: "つき"},
{ question: "富士山", response: "ふじさん"},
{ question: "木", response: "き"},
{ question: "日", response: "ひ"},
{ question: "山", response: "やま"},
{ question: "川", response: "かわ"},
{ question: "火山", response: "かざん"},
{ question: "田", response: "た"},
{ question: "田んぼ", response: "たんぼ"},
{ question: "水田", response: "すいでん"},
{ question: "人", response: "ひと"},
{ question: "日本人", response: "にほんじん"},
{ question: "口", response: "くち"},
{ question: "入口", response: "いりぐち"},
{ question: "出口", response: "でぐち"},
{ question: "人口", response: "じんこう"},
{ question: "車", response: "くるま"},
{ question: "自動車", response: "じどうしゃ"},
{ question: "電車", response: "でんしゃ"},
{ question: "門", response: "もん"},
{ question: "専門", response: "せんもん"},
{ question: "火", response: "ひ"},
{ question: "火事", response: "かじ"},
{ question: "水", response: "みず"},
{ question: "お金", response: "おかね"},
{ question: "金", response: "きん"},
{ question: "土", response: "つち"},
{ question: "土木", response: "どぼく"},
{ question: "子供子ども", response: "こども"},
{ question: "女の子", response: "おんなのこ"},
{ question: "女子", response: "じょし"},
{ question: "女子学生", response: "じょしがくせい"},
{ question: "女", response: "おんな"},
{ question: "女の人", response: "おんなのひと"},
{ question: "彼女", response: "かのじょ"},
{ question: "学生", response: "がくせい"},
{ question: "大学", response: "だいがく"},
{ question: "学校", response: "がっこう"},
{ question: "生きる", response: "いきる"},
{ question: "生まれる", response: "うまれる"},
{ question: "先生", response: "せんせい"},
{ question: "先", response: "さき"},
{ question: "先月", response: "せんげつ"},
{ question: "私", response: "わたし"},
{ question: "私立", response: "しりつ"},
{ question: "私立大学", response: "しりつだいがく"},
{ question: "生年月日", response: "せいねんがっぴ"},
{ question: "一", response: "いち"},
{ question: "二", response: "に"},
{ question: "三", response: "さん"},
{ question: "四", response: "よん"},
{ question: "五", response: "ご"},
{ question: "六", response: "ろく"},
{ question: "七", response: "ななしち"},
{ question: "八", response: "はち"},
{ question: "九", response: "きゅう"},
{ question: "十", response: "じゅう"},
{ question: "百", response: "ひゃく"},
{ question: "千", response: "せん"},
{ question: "万", response: "まん"},
{ question: "円", response: "えん"},
{ question: "年", response: "とし"},
{ question: "年間", response: "ねんかん"},
{ question: "今年", response: "ことし"},
{ question: "去年", response: "きょねん"},
{ question: "来年", response: "らいねん"},
{ question: "上", response: "うえ"},
{ question: "下", response: "した"},
{ question: "下がる", response: "さがる"},
{ question: "地下", response: "ちか"},
{ question: "下車する", response: "げしゃする"},
{ question: "中", response: "なか"},
{ question: "中学", response: "ちゅうがく"},
{ question: "中学生", response: "ちゅうがくせい"},
{ question: "中学校", response: "ちゅうがっこう"},
{ question: "一日中", response: "いちにちじゅう"},
{ question: "大", response: "だい"},
{ question: "大きい", response: "おおきい"},
{ question: "大人", response: "おとな"},
{ question: "大切", response: "たいせつ"},
{ question: "小さい", response: "ちいさい"},
{ question: "小人", response: "こども"},
{ question: "小学校", response: "しょうがっこう"},
{ question: "本", response: "ほん"},
{ question: "本日", response: "ほんじつ"},
{ question: "本店", response: "ほんてん"},
{ question: "半分", response: "はんぶん"},
{ question: "半年", response: "はんとし"},
{ question: "半日", response: "はんにち"},
{ question: "分", response: "ふん"},
{ question: "分ける", response: "わける"},
{ question: "分かる", response: "わかる"},
{ question: "力", response: "ちから"},
{ question: "力学", response: "りきがく"},
{ question: "水力", response: "すいりょく"},
{ question: "火力", response: "かりょく"},
{ question: "何", response: "なに"},
{ question: "北", response: "きた"},
{ question: "南", response: "みなみ"},
{ question: "東", response: "ひがし"},
{ question: "西", response: "にし"},
{ question: "上り (線)", response: "のぼり  (せん)"},
{ question: "下り", response: "くだり"},
{ question: "明るい", response: "あかるい"},
{ question: "明ける", response: "あける"},
{ question: "明日", response: "あした"},
{ question: "説明する", response: "せつ  めい  する"},
{ question: "休み", response: "やすみ"},
{ question: "休む", response: "やすむ"},
{ question: "休日", response: "きゅうじつ"},
{ question: "体", response: "からだ"},
{ question: "体力", response: "たいりょく"},
{ question: "体育", response: "たいいく"},
{ question: "好き", response: "すき"},
{ question: "好物", response: "こうぶつ"},
{ question: "男", response: "おとこ"},
{ question: "男の子", response: "おとこのこ"},
{ question: "男子", response: "だんし"},
{ question: "男子学生", response: "だんしがくせい"},
{ question: "長男", response: "ちょうなん"},
{ question: "林", response: "はやし"},
{ question: "森", response: "もり"},
{ question: "林業", response: "りんぎょう"},
{ question: "森林", response: "しんりん"},
{ question: "間", response: "あいだ"},
{ question: "間に合う", response: "まにあう"},
{ question: "畑", response: "はたけ"},
{ question: "花畑", response: "はなばたけ"},
{ question: "田畑", response: "たはた"},
{ question: "岩", response: "いわ"},
{ question: "岩石", response: "がんせき"},
{ question: "火山岩", response: "かざんがん"},
{ question: "休火山", response: "きゅうかざん"},
{ question: "目", response: "め"},
{ question: "目上", response: "めうえ"},
{ question: "目下", response: "めした"},
{ question: "目次", response: "もくじ"},
{ question: "耳", response: "みみ"},
{ question: "耳鼻科", response: "じびか"},
{ question: "手", response: "て"},
{ question: "手紙", response: "てがみ"},
{ question: "歌手", response: "かしゅ"},
{ question: "上手", response: "じょうず"},
{ question: "足", response: "あし"},
{ question: "足りる", response: "たりる"},
{ question: "足す", response: "たす"},
{ question: "一足", response: "いっそく"},
{ question: "二足", response: "にそく"},
{ question: "雨", response: "あめ"},
{ question: "大雨", response: "おおあめ"},
{ question: "雨天", response: "うてん"},
{ question: "竹", response: "たけ"},
{ question: "竹の子", response: "たけのこ"},
{ question: "米", response: "こめ"},
{ question: "新米", response: "しんまい"},
{ question: "米国", response: "べいこく"},
{ question: "中米", response: "ちゅうべい"},
{ question: "南米", response: "なんべい"},
{ question: "貝", response: "かい"},
{ question: "貝殻", response: "かいがら"},
{ question: "石", response: "いし"},
{ question: "石油", response: "せきゆ"},
{ question: "化石", response: "かせき"},
{ question: "糸", response: "いと"},
{ question: "毛糸", response: "けいと"},
{ question: "下手", response: "へた"},
{ question: "切手", response: "きって"},
{ question: "目的", response: "もくてき"},
{ question: "助手", response: "じょしゅ"},
{ question: "不足", response: "ふそく"},
{ question: "小雨", response: "こさめ"},
{ question: "北米", response: "ほくべい"}
  ];
  private questionNumber: number;
  private ingame:boolean;


  constructor() {
    this.NewQuiz();
  }

  NewQuiz(): void {
    
    this.questionNumber = -1;
    this.ingame=true;
  }

  checkReply(reply: string): boolean {
    return this.ingame && this.questions[this.questionNumber].response == reply;
  }

  getReply():string{
    return this.questions[this.questionNumber].response;
  }

  getQuestionNumber():number {
    return this.questionNumber;
  }

  getNumberofQuestions ():number {
    return this.questions.length;
  }
  nextQuestion(): string {
    let retval: string = "";
    if (this.questionNumber < this.questions.length-1) {
      this.questionNumber++;
      retval = this.questions[this.questionNumber].question;
    }
    else
      {
        this.ingame=false;
      }
    return retval;
  }



}
