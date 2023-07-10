import { useState } from 'react';
import SearchBar from './/SearchBar';
import TokenList from './/TokenList';

export default function TokenHandler() {
	const [tokenResults, setTokenResults] = useState([]);
	const [loading, setLoading] = useState(false);

	return (
		<>
			<SearchBar onBeforeSearch={() => {
				setLoading(true);
			}} onAfterSearch={(results) => {
				setLoading(false);
				setTokenResults(results);
			}} />
			<TokenList data={tokenResults} loading={loading} />
		</>
	)
}