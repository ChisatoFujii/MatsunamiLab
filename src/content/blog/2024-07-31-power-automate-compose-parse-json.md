---
title: Power Automateで大量の変数初期化が面倒になったら「作成」と「JSONの解析」を使う
pubDate: 2026-08-10
category: Power Automate
level: 中級
subcategories:
  - JSON
color: blue
---
Power Automateでフローを作っていると、こんな経験はないでしょうか。

* 変数の初期化アクションが大量に並ぶ
* フローが縦に長くなる
* 変数名の管理が大変になる

私も最初は素直に変数を初期化していましたが、変数の数が増えるにつれて管理が面倒になってきました。

そんなときに便利なのが「作成（Compose）」アクションと「JSONの解析（Parse JSON）」アクションの組み合わせです。

## 従来の方法

例えば以下の値を保持したい場合、

* 氏名
* 部署
* メールアドレス

それぞれに対して変数を初期化します。

```
varUserName
varDepartment
varMailAddress
```

変数が3つ程度なら問題ありませんが、10個、20個と増えてくるとフローが見づらくなります。

## 作成アクションでまとめる

代わりに、「作成」で変数の代わりとなるJSONオブジェクトを作成します。

```json
{
  "UserName": "山田太郎",
  "Department": "営業部",
  "MailAddress": "sample@example.com"
}
```

このJSONを1つのオブジェクトとして「作成」に保存します
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/fe0a5506-4d68-40b9-b9ad-0928ef676d7c.png)

## JSONの解析で利用する

このJsonオブジェクトを「JSONの解析」に渡します。

スキーマを生成すると、

* UserName
* Department
* MailAddress

が動的コンテンツとして利用できるようになります。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/2636e3e2-0280-43ca-993c-47971eb8a806.png)

以降は変数を大量に作成しなくても、必要な値を参照できます。
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/e29a82b1-1ed7-40ef-b683-f7eb7f945366.png)

## Copilotとの相性も良い

最近はCopilotに、

「以下の項目でJSONオブジェクトを作成してください」

と依頼するだけで簡単にJSONを生成できます。


例えば、

* 氏名
* 部署
* メールアドレス
* 電話番号
* 所属拠点

などを渡せば、そのまま「作成」に貼り付けられる形式で出力してくれます。

## メリット

* 変数初期化アクションが減る
* フローがスッキリする
* 管理対象が減る
* Copilotとの相性が良い
* オブジェクトとして扱えるため拡張しやすい
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/3111714/4e6f70ae-c8bc-44a2-b1b4-fe3fd297d383.png)

## まとめ

少数の変数であれば従来の「変数の初期化」でも問題ありません。

しかし、扱う値が増えてきた場合は、「作成」でJSONオブジェクトを作成し、Parse JSONで利用する方法を覚えておくとフローをかなりシンプルにできます。

個人的には「変数が5個を超えたらもうこれ」ですね。

