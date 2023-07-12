'use client';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/html';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { useContext } from 'react';
import { EditorContext } from '../../context/context';

export default function HtmlEditor() {
	const { html, setHtml } = useContext(EditorContext);

	return (
		<AceEditor
			placeholder="Write your code here..."
			mode="html"
			theme="monokai"
			name="editor_html"
			value={html}
			onChange={(value) => setHtml(value)}
			fontSize="16"
			height={'100%'}
			width={'100%'}
			showPrintMargin={false}
			showGutter={true}
			highlightActiveLine={true}
			setOptions={{
				enableBasicAutocompletion: true,
				enableLiveAutocompletion: true,
				enableSnippets: true,
				showLineNumbers: true,
				useWorker: false,
				tabSize: 2,
			}}
		/>
	);
}
