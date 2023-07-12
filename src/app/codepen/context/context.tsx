'use client';

import React, { createContext, useState } from 'react';

interface Values {
	html: string;
	css: string;
	js: string;
	setHtml: React.Dispatch<React.SetStateAction<string>>;
	setCss: React.Dispatch<React.SetStateAction<string>>;
	setJs: React.Dispatch<React.SetStateAction<string>>;
}

const EditorContext: React.Context<Values> = createContext();

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
	const [html, setHtml] = useState<string>('');
	const [css, setCss] = useState<string>('');
	const [js, setJs] = useState<string>('');

	const values: Values = {
		html,
		css,
		js,
		setHtml,
		setCss,
		setJs,
	};
	return (
		<EditorContext.Provider value={values}>{children}</EditorContext.Provider>
	);
};

export { EditorProvider, EditorContext };
