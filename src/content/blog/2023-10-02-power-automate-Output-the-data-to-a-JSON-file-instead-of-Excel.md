---
title: 書込データの出力先をExcelの代わりにJsonファイルにする
pubDate: 2023-10-02T00:00:00+09:00
category: Power Automate for desktop
level: 中級
subcategories:
  - Cloud Flow
color: blue
---


## 書込データの出力先をJsonファイルにする
![Automate_logo (2).jpg](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/ed3662d5-4ad1-fefb-3fe0-a3a70a2953ae.jpeg)
RPAをやっていてもPowerAutomateを触るまで知らなかったJsonファイル。
でも、使ってみると便利なので今日はその紹介をしようと思います。

### Jsonファイルって何？-ざっくりとした解説

JSONファイルは、
【データ交換の時などに使うファイルのこと】です。
よく会社で.csvファイルや.xlsxファイルで毎日配信されるファイルがあるでしょう？
そういった時に使う、.jsonという拡張子のファイルのことです。


### なんでJsonファイル？Excelやcsvじゃダメなの？
PowerAutomate(クラウドフロー)のExcelって【一つのアクションで完結できないことが多い】です。
テーブルじゃないと読み込めなかったり、
データ数が多いと、何回かに分けでデータを出させたりとかで
データを取り出すことはできますが、時間や、アクションの数が増えますね。
それは、HTTP要求の数が増えてしまい、システム費と見合わなくなる…といったことになりやすいのです。

### 1.PowerAutomatefordesktopでJsonファイルを作る
PowerAutomateのJsonファイルの作り方は簡単なので、先にDesktopについて説明します。

まずデータテーブルを作りましょう。なんでもいいんですが、
せっかくですからPowerAutomateforDesktopのバージョンでも取得しましょう。
https://learn.microsoft.com/en-us/power-platform/released-versions/power-automate-desktop#all-power-automate-desktop-versions
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/9f9c5711-06ac-d23a-1945-97bbd845207c.png)
こんなかんじでDataFromWebPageにデータを取得します。
この辺は、割愛しますね。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/61d0af51-c069-1682-a43f-ffc9feb851cd.png)
その下にJsonに変換するための下地を変数の中に作成します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/c21ba06d-020d-21e2-ac33-4002f2add4cf.png)
```ruby:変数outputsJsonの中身
%{{ }}%
```
次に先ほど用意した変数名outputsJsonの中に['DataFromWebPage']を追加し
値にDataFromWebPageを設定します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/330e7029-2baf-7300-6921-c6471714085a.png)
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/929433b0-fe13-a7d2-e245-27efd37154dc.png)
※変数名の変更を忘れないでね！でないとエラーになったり後続アクションで出てきません。

次に、上記で設定した変数outputsJsonをカスタムオブジェクトをJsonに変換アクションに入れます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/73b01bc5-1c59-fa46-d5b1-5de6f4cba2cf.png)

最後にテキストをファイルに書き込むアクションを使用してJsonファイルを作成しましょう。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/1a6618b4-4103-004d-f775-1e402cf3ae09.png)
１.→.json拡張子を忘れずにつけましょう
２.→先ほど作成したカスタムオブジェクトを入れましょう
３.→UTF-8(バイトオーダーマーク無し)を選択。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/52459542-f3bd-940a-d017-dd224f561691.png)
きちんとデータが作成されました。

### 2.PowerAutomateでJsonファイルを作る

PowerAutomateの場合はもっと簡単で、対象ファイルを選択→作成に入れて、最終的にファイルの作成でJsonファイルを作成することができます

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/8034bfde-4a54-5ae9-16f8-ff3c30a35993.png)



```ruby:ファイルの作成のファイルコンテンツの中身
outputs('作成')
```

### 最後に


Jsonファイルを作ってしまえば、以降はPowerAutomateやDesktopで制限なく読み込んだりでき
また、PowerQueryを使用してJsonを読み込めばExcelやBIでも操作も可能です。

それはPowerAutomateで出るExcelアクションのありがちなエラーへの回避策にもなるでしょう。
以上が、書き込みデータの出力先をJsonファイルにするためのJsonファイルの作成方法の説明でした。






