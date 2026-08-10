---
title: 誰のPCでもダウンロードフォルダを指定するPath指定方法【 Power Automate Desktop 】
pubDate: 2024-07-09T00:00:00+09
category: Power Automate for desktop
level: 中級
subcategories:
  - Onedrive
color: blue
---
## フォルダPath指定変更無しでどのPCでも動作するよう設定


ダウンロードファイル、ドキュメントファイルなどで操作するファイルがあるとして、
C:\Users\〇〇\Downloadsと〇〇のところを
フォルダPathの指定を操作するPCが変更Orフローを渡した人に変更してもらう話をするのは
面倒…:innocent:で、何かないかと思いついたのが下記方法です。

## フローの作り方
システム-Windowsの環境変数を取得アクションを追加します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/08c13e76-bb8a-20e8-99ba-77031882bad6.png)

①環境変数名をUSERNAMEを指定し、
EnviromentVariableValueの変数に入れる
![image.pあじｒng](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/2fd82fc5-1f94-c94d-7a9a-d16f5bb4d3c4.png)

②変数の設定でC:\Users\〇〇\Downloadsと入力した後、
〇〇の所をEnviromentVariableValue変数に変更する
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/dd68221e-25dc-5072-fea4-431992ae83ea.png)


こうすることによって、どのPCでもダウンロードフォルダの中で操作できるようになります。

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/1cbf5933-e6c1-237b-8c2b-dcf8e53e952f.png)

Pathの指定変更はできるだけ少ない方がミスが少ないと思いますので…。
