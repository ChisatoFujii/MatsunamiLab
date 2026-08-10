---
title: フロー共有した人のOneDriveの中でExcelを読み込む
pubDate: 2023-09-24T00:00:00+09:00
updatedDate: 2023-09-26T00:00:00+09:00
category: Power Automate
level: 中級
subcategories:
  - Onedrive
color: blue
---

# フロー共有した人のOneDriveの中でExcelを読み込む

下記のようにExcelファイルをOneDriveの中に置いてデータを読み取るフローを作成し、共有をするとエラーが発生してフローが失敗します。

![共有したフローで発生するエラー](/images/blog/onedrive-excel-flow/shared-flow-error.png)

<aside class="notice-warning">
  学び始めにやりがちなことですね。
</aside>

これは、規定で表示されている「OneDrive」がフロー所有者のドキュメントライブラリを指定しているためです。

そのため、ここは動的になるようにカスタム値へ変数などを指定する必要があります。

![OneDriveをカスタム値で指定する設定](/images/blog/onedrive-excel-flow/onedrive-custom-value.png)

## どうやってドキュメントライブラリのIDを抜き出すか

ドキュメントライブラリのIDの取得方法は色々ありますが、今回は「パスによるファイルのメタデータの取得」アクションを使用しています。

このアクション内のID、またはファイルロケーターの `.`（ドット）以前がドキュメントライブラリのIDなので、それを抜き出します。

```text title="ファイルロケーターの中身（毎回変わるため参考程度）"
"b!iQo7tRtGJUuWnIKRSWuie15eoRkWdfdIm0IN9wQOpW_htF2vnX7LRaKTSAcWX0i_.01JAGVXCMH2PVLDMV3MRDJZ5FUMFYKORDU"
```

Slice関数を使用して、`.` 以前のドキュメントライブラリIDを抜き出し、変数に入れます。

データはObjectの状態なので、一度「作成」アクションに吐き出します。作成を使わない場合は、後続の関数に `string` 関数を足す必要があります。

![ファイルのメタデータからIDを確認する](/images/blog/onedrive-excel-flow/file-metadata-id.png)

![作成アクションに出力する設定](/images/blog/onedrive-excel-flow/compose-output.png)

```text title="Slice関数でドット以前を抜き出す"
slice(outputs('作成'),0,indexOf(outputs('作成'),'.'))
```

## ついでに場所も指定しておく

場所も指定しておきましょう。こちらは簡単で、変数に `me` と入力するだけです。

![場所にmeを指定する設定](/images/blog/onedrive-excel-flow/location-me.png)

こんな感じです。

おまけですが、動的にデータを取得するには、下記のように「ファイル」にメタデータの取得で取得したIDを入れます。テーブル名はIDでなくとも文字で読み込みます。

![Excelのデータを動的に取得する設定](/images/blog/onedrive-excel-flow/excel-dynamic-data.png)

無事データを読み込めました。

![データの読み込みに成功した結果](/images/blog/onedrive-excel-flow/success.png)
