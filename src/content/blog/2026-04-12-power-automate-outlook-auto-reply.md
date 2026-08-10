---
title: PCがOFF状態でもメールに一時返信するPower Automate
pubDate: 2026-04-12T08:15:28+09:00
updatedDate: 2026-04-30T16:17:15+09:00
category: Power Automate
level: 初級
subcategories:
  - Outlook
  - Cloud Flow
tags:
  - 業務効率化
  - シングルマザー
  - 自動化
  - PowerAutomate
  - Outlook
  - PowerPlatform
  - 自動返信
  - シングルマザー支援
  - ママは定時でかえります
color: blue
thumbnail: /images/blog/power-automate-outlook-auto-reply/thumbnail.png
---

## この記事について

対象：PCがOFFでも特定のメールに自動返信したい方  
前提：Power Automate（クラウドフロー・有料版）  
所要時間：約3分（実際の作成は5〜7分程度）

![こんな感じ](/images/blog/power-automate-outlook-auto-reply/overview.png)

### ちょっと小話…

さて、少し間が空いてしまいましたが、前回の記事ではPower Automate for desktop（PAD）を使ったメール返信の方法を解説しました。

[前回の記事を読む](https://note.com/forbabygirl/n/n26597bb36755)

今回は前回の内容をふまえ、有料版のクラウドフローを使い、PCを起動していなくてもOutlookのメールに自動返信する方法を紹介します。

これは、大変な状況でも人に頼らず対応できる**仕組み**として活用できます。

**介護や子育て、時短勤務、体調に不安がある方でも、無理なく働くためのヒント**になればと思います。

![](/images/blog/power-automate-outlook-auto-reply/introduction.png)

※Power Automate（クラウドフロー）が初めての方は、まずは下記の記事から試してみるのがおすすめです。

[Power Automate（クラウドフロー）が初めての方向けの記事を読む](https://note.com/forbabygirl/n/n9c873e883763)

## PCがOFF状態でもメールに一時返信（Outlook）

全体の流れは最初のクラウドフローを見ればわかるので割愛します。

### 1.フローの作成開始

![](/images/blog/power-automate-outlook-auto-reply/create-flow.png)

![](/images/blog/power-automate-outlook-auto-reply/select-trigger.png)

> 💡まず、Power Automateの「マイ フロー」画面から、「新しいフロー」→「自動化したクラウドフロー」を選択します。

- **フロー名：** 見積依頼メール一時応答
- **トリガーを選択：** 新しいメールが届いたとき (V3) [Office 365 Outlook]

※Outlookと検索すると出てきますので選択して保存ボタンをクリックします

### 2.アクション:「新しいメールが届いたとき (V3)」

![](/images/blog/power-automate-outlook-auto-reply/trigger-settings.png)

![](/images/blog/power-automate-outlook-auto-reply/trigger-parameters.png)

> 💡特定の条件に合うメールが届いたときにフローを起動する設定を行います。今回は、『注文書依頼』フォルダに届き、件名が『見積依頼』のメールだけに自動返信するようにしていきます。

- **詳細パラメーターの設定：**
  - **追加設定：** 「詳細パラメーター」から「件名フィルター」と「フォルダー」にチェックを入れててください。これで件名フィルターとフォルダーが表示され設定できるようになります
  - **フォルダー：** 注文書依頼（※特定のフォルダを監視する場合）と選択
  - **件名フィルター：** 見積依頼

### 3.アクション:「メールに返信する (V3)」

![](/images/blog/power-automate-outlook-auto-reply/reply-email.png)

![](/images/blog/power-automate-outlook-auto-reply/reply-parameters.png)

> 💡届いたメールに対して、あらかじめ決めた定型文で自動返信します。

- **詳細パラメーターの設定：**
  - **追加設定：** 「詳細パラメーター」から「宛先」にチェックを入れててください。これで「宛先」が表示されます
- **メッセージ ID：** 「メッセージID」の欄をクリックして表示される⚡マークから動的コンテンツを開き、「新しいメールが届いたとき」の「メッセージ ID」を選択します。
- **宛先：** 「宛先」の欄をクリックして表示される⚡マークから動的コンテンツを開き、「新しいメールが届いたとき」の「差出人」を選択します。
- **本文：**
- ご担当者 様　この度は見積のご依頼をいただき、ありがとうございます。 内容を確認のうえ、改めてご連絡いたします。 恐れ入りますが、今しばらくお待ちくださいますようお願いいたします。の文を本分に張り付けてください。

### 4.アクション:「開封済みまたは未読 としてマークする (V3)」

![](/images/blog/power-automate-outlook-auto-reply/mark-as-read.png)

> 💡自動返信したメールを「既読」状態にします。

- **メッセージ ID：** メールに返信する (V3)で設定したid（トリガーのメッセージ IDを指定）と同じなのでそちらを参考に設定
- **次としてマーク：** はい（＝既読にする）

### 5.アクション「メールを移動する (V2)」

![](/images/blog/power-automate-outlook-auto-reply/move-email.png)

> 💡一時応答で返信した後は、そのメールを別フォルダへ移動します。  
> 返信後のメールを移動することで、同じメールへの重複返信を防ぐことができます。

- **メッセージ ID：** メールに返信する (V3)で設定したid（トリガーのメッセージ IDを指定）と同じなのでそちらを参考に設定
- **フォルダー：** 注文書保存済（※移動先のフォルダを選択）

最後に、画面上部にある保存ボタンをクリックしてください。これで設定は完了です。

![](/images/blog/power-automate-outlook-auto-reply/save-flow.png)

以上で、見積依頼メールがきたら、すぐに返信される設定になっています。ぜひテストをしてみてくださいね。

### Power Automate for desktopとPower Automateの比較

無料版のPower Automate for desktopと有料版のPower Automateで同じ内容のフローを作成してみると、同じ内容でもこんなに違うことがわかりましたね。

![](/images/blog/power-automate-outlook-auto-reply/comparison.png)

Power Automate（クラウドフロー）は、メールが1通届くと同時に自動で動いてくれるので、**待機の設定やFor eachは不要です**。PCがオフの状態でも動作するため、**Outlookの起動や終了を意識する必要もありません**。その分、シンプルにフローを作ることができます。

また、各アクション毎に保存ボタンもないので、PADより少し手軽に感じる部分もあります。

### 最後に

小さい子どもがいると、PCの前にずっといられないことも多いですね。  
お金はかかりますが、こういった仕組みに頼って楽になる方法を選ぶことも、ママは必要なことだと思っています。

![](/images/blog/power-automate-outlook-auto-reply/closing.png)
