---
title: 30分毎にドロップダウンに時間を設定をする方法(SequenceとForAllで)
pubDate: 2023-10-09T00:00:00+09:00
category: Power Apps
level: 中級
subcategories:
  - Dropdown
  - Sequence
  - ForAll
color: blue
---
今日はPower Appsのお話です。

ドロップダウンに時間を設定することは、アプリ作成者にとっては多いことだと思いますが、
Itemsに入力すると下記画像のように長々とした悩ましいローコードになってしまいがちではないでしょうか
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/4342cf0a-c7e1-047e-22d5-139b3c2df047.png)

:::note info
ローコードアプリなんだから最初から設定されている見本のようなものがあってもいいんじゃないか、と思うくらいです。
:::

## SequenceとForAllの関数を利用し30分毎のテーブルを作る


そこでSequenceとForAllを利用し、短いコードで解決してみようと思います。
これが結構便利で、よく使います。

## Sequence関数とは
下記のようにSequence(数字)と入力すると自動で連番を生成しテーブルを作成します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/fd5383e2-1df6-6165-63d9-5d273f17eca4.png)

https://learn.microsoft.com/ja-jp/power-platform/power-fx/reference/function-sequence
## ForAll関数とは
名前の通り、全てのテーブルのデータにアクションを与えます
今回は、Sequence関数で作成した連番を00：00など時間に表示を変更したいのでこれを利用します

https://learn.microsoft.com/ja-jp/power-platform/power-fx/reference/function-forall

今回、24時間のうち30分毎にデータを表示させたいので、まずテーブルには全部で48個のデータが必要になります
とりあえず48データを作成します

```IETF BCP-47:下地
Sequence(48)
```
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/60f06063-5067-ba83-5a4b-d10f203b64f9.png)

Sequence関数は、0は開始する数字、0.5は増加分量を指定することもできます。
```IETF BCP-47:下地
Sequence(48,0,0.5)
```

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/6caa9780-6e62-e40c-fdc0-9330368a20d7.png)
こんな感じで0.5ずつ増えていくテーブルが作成されます
とっても便利ですよね。

さあ、最初に時間を設定していきましょう
```IETF BCP-47:書き方
ForAll(Sequence(48,0,0.5),Text(RoundDown(Value,0),"00"))
```
全ての値にText(RoundDown(Value,0),"00"))を反映させたいのでForAllを使用します

30分置きのコードは&以下のコードで、下記のようになりました
```IETF BCP-47:書き方
ForAll(Sequence(48,0,0.5),Text(RoundDown(Value,0),"00")&":"&Text(Mod(Value*60,60),"00"))
```
ただくっつけてるだけ(笑)ですが、これだけで入力が終わります。
15分置きに設定したい時はSequence関数の中身を下記のように
倍に変更してあげるとよいでしょう。

```IETF BCP-47:書き方
Sequence(96,0,0.25)
```

これを利用しコレクションにいれて、現在時間の30分後に開始時間を初期値として入れてあげたりしたらユーザーの時間を減らすこともできるかもしれませんね。

## 最後に
読んでくださってありがとうございました。
地味に時間がかかる入力作業はこのように
できるだけ簡単な関数を使って減らしていくと、
保守性もあがりますし
家族と過ごす時間も増えてWinWinだと思います。
ぜひ利用してみてくださいね！
