import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.cursor-jump', (arg) => {
		const opt = Object.assign({
			lineDelta: 7,
			charDelta: 0,
		}, arg || {});

		const te = vscode.window.activeTextEditor;
		if (!te) {
			return;
		}

		te.selections.forEach((s, i)=> {
			try {
				te.selections[i] = new vscode.Selection(
					s.anchor.translate(opt.lineDelta, opt.charDelta),
					s.active.translate(opt.lineDelta, opt.charDelta));
			} catch {}
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
