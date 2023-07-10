import { useState } from 'react';

export default function SearchBar({ onBeforeSearch, onAfterSearch }) {
	const [searchValue, setSearchValue] = useState('');

	return (
		<form>
			<div className="input-group mb-3 mx-5 px-5">
				<input
					type="text"
					className="form-control"
					placeholder="Search for a token"
					aria-label="Search for a token"
					aria-describedby="button-addon2"
					onChange={e => setSearchValue(e.target.value)}
				/>
				<button
					className="btn btn-outline-secondary"
					type="submit"
					id="button-addon2"
					onClick={(e) => {
						e.preventDefault();
						onBeforeSearch()
						fetch(`api/search-token`, {
							method: 'post',
							body: JSON.stringify({ searchValue: searchValue }),
							headers: {
								'Content-Type': 'application/json'
							}
						})
							.then(resp => resp.json())
							.then(data => {
								console.log(data)
								onAfterSearch(data)
							})
							.catch(error => {
								console.log(error)
							})
					}}
				>
					Go
				</button>
			</div>
		</form>
	)
}