import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.cursor-jump', (arg) => {
		const opt = Object.assign({
			lineDelta: 7,
			charDelta: 0,
			moveAnchor: true,
			moveActive: true,
		}, arg || {});

		const te = vscode.window.activeTextEditor;
		if (!te) {
			return;
		}

		const translated = (p: vscode.Position)=> {
			const p0 = p.translate(
				p.line+opt.lineDelta < 0? -p.line : opt.lineDelta,
				p.character+opt.charDelta < 0? -p.character : opt.charDelta);
			const p1 = te.document.validatePosition(p0);
			return p1;
		}

		te.selections = te.selections.map((s, i)=> new vscode.Selection(
			opt.moveAnchor? translated(s.anchor): s.anchor,
			opt.moveActive? translated(s.active): s.active
		));
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
