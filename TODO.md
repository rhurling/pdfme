このメモは公開予定ではありません。リリース後に削除します。
- EditorCtlはHeaderに名前を変える->ok
- プレビューの開発用のhtmlを作る->ok
- プレビューの横幅がおかしい？横いっぱいになる->ok
- public/index.htmlの微調整->ok
- tooltipの微調整->ok
- prevewのscssの微調整->ok
- 多言語化 既存のi18nはreact contextに変更する->ok

---ここまでで labelmake-uiへprevewコンポーネントを移植する #1407 ---

- 全て関数コンポーネントにする
- TODO PreviewをEditor/Mainと共通化
- Editorのinitにsizeを追加する
- fetchTemplateはtemplateで良くない？
- initの返り値はインスタンスにしてそのインスタンスに対してdestroyする方が自然？
- refresh or renderメソッドの追加
- 外部フォントについて考える必要がある