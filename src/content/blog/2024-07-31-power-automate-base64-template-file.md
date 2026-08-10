---
title: テンプレートファイルが消されてしまうことを防ぐ（Base64利用）
pubDate: 2024-07-31T00:00:00+09
category: Power Automate
level: 中級
subcategories:
  - Base64
color: blue
---

![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/ba73b4a2-de5d-0eae-4a4f-2c3a0b0d89e6.png)

:::note warn

この記事は事務業務等を自動化する方RPA Developer向けです
:::


## きっかけ
毎日処理が必要な自動化するための事務用テンプレートのエクセルファイルを
SharePointやOneDriveに置いていると一般社員の方が、
誤って移動させてしまったりすることがあります。

そういったことが続いてエラー対応に追われた際、解決策として対応した一つの方法が表題につながります。

## 詳細
PowerAutomateやPowerAutomateDesktop上ではファイルの内容の取得を取得する際には
base64という文字になります。

ファイルコンテンツの取得のアクションを実行して出力を見てみるとわかるのですが、
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/12556b6c-2eb2-09dd-b986-aedffc57a769.png)
$content以降がbase64です。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/cc99f897-9fc6-d2bc-990b-3b042d6ae758.png)

※このbase64は下記のような公開されているツールでも取得できます。
ただし会社等で利用される場合はゼロトラスト:muscle:で、各自の判断を持って行ってください。

https://lazesoftware.com/ja/tool/base64/#:~:text=Base64%20%E3%82%A8


#### このbase64を利用し、ファイルをフローに埋め込み作成する方法を下記に説明していきます。

## PowerAutomateの場合
### base64を利用してファイルを作成する

先ほどのファイルコンテンツ等で取得したbase64を作成アクション入れます
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/71518440-415a-a8fd-c1b1-07e1bae18dd2.png)

ファイルの作成アクションを追加して、
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/d60faf1b-246b-0209-3170-4d0c9d7c95eb.png)

ファイルコンテンツの項目にbase64ToBinaryの中に先ほどの作成アクションを入れてあげます。

```ruby:qiita.rb
base64ToBinary(outputs('作成'))
```

これでテンプレートファイルをフローに直接埋め込むことができました。

## PowerAutomateDesktopの場合
### base64を利用してファイルを作成する
これはとても簡単でbase64をファイルに変換するというアクションを追加し、
Base64でエンコードされたテキストという項目にbase64を入力します。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/0eedb16b-b37a-e96b-dc17-47c81c179e3c.png)


また、PADでファイルをbase64を取得したい時は下記アクションで一度実行し取得してみてください。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/1be0a8b9-35ae-402c-9bc0-eadd04e84cc2.png)


## 最後に


部署移動等で引き継ぎが漏れ、新しい担当者が、
テンプレートファイルフォルダーを丸ごとを移動してしまったなどRPAではよく起こる問題だと思います。
エラー対応するほうはとても大変ですよね。

しょっちゅうテンプレートの変更が必要でないなら、こういった対応も可能なのです。



