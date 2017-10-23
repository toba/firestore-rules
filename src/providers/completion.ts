import * as vscode from "vscode";

export class RuleCompletionProvider implements vscode.CompletionItemProvider {
   //private _completions:vscode.CompletionItem[];
   //private _snippets:vscode.CompletionItem[];

   public provideCompletionItems(
      _document:vscode.TextDocument,
      _position:vscode.Position,
      _token:vscode.CancellationToken):Thenable<vscode.CompletionItem[]> {

      return new Promise<vscode.CompletionItem[]>((resolve, _reject) => {
         //const completions:vscode.CompletionItem[] = [];
         // const lineText = document.lineAt(position.line).text;
         // const text = document.getText();
         // const wordRange = document.getWordRangeAtPosition(position);
         // const word = wordRange && document.getText(wordRange);
         // const item = this.getItem(document, position, lineText, text);

         const item = new vscode.CompletionItem("test", vscode.CompletionItemKind.Field);
       
        
         resolve([item]);
      });
   }
}