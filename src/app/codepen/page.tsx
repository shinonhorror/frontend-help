import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import styles from './page.module.scss';

export default function Codepen() {
	return (
		<div className={styles.root}>
			<CodeBar />
			<div className={styles.main}>
				<Header />
				<Preview />
			</div>
		</div>
	);
}
