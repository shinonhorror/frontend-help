'use client';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/snippets/css';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { useContext } from 'react';
import { EditorContext } from '../../context/context';

export default function CssEditor() {
	const { css, setCss } = useContext(EditorContext);

	return (
		<AceEditor
			placeholder="Write your code here..."
			mode="css"
			theme="monokai"
			name="editor_css"
			value={css}
			onChange={(value) => setCss(value)}
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
