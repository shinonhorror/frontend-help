'use client';

import { useState } from 'react';
import styles from './CodeBar.module.scss';
import HtmlEditor from '../Editor/HtmlEdtor';
import CssEditor from '../Editor/CssEditor';
import JsEditor from '../Editor/JsEditor';

export default function CodeBar() {
	const [activeTab, setActiveTab] = useState('html');

	return (
		<div>
			<div className={styles.codebar}>
				<nav className={styles.tab}>
					<button
						onClick={() => setActiveTab('html')}
						className={`${styles.item} ${
							activeTab === 'html' ? styles.activeTab : ''
						}`}
					>
						HTML
					</button>
					<button
						onClick={() => setActiveTab('css')}
						className={`${styles.item} ${
							activeTab === 'css' ? styles.activeTab : ''
						}`}
					>
						CSS
					</button>
					<button
						onClick={() => setActiveTab('js')}
						className={`${styles.item} ${
							activeTab === 'js' ? styles.activeTab : ''
						}`}
					>
						JS
					</button>
				</nav>
				<div className={styles.editor}>
					{activeTab === 'html' ? <HtmlEditor/> : null}
					{activeTab === 'css' ? <CssEditor/> : null}
					{activeTab === 'js' ? <JsEditor/> : null}
				</div>
			</div>
		</div>
	);
}
