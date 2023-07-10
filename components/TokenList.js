export default function TokenList({ data, loading }) {
	if (loading) {
		return (
			<>
				<span className="bi bi-arrow-repeat">Loading</span>
			</>
		)
	}

	if (data.length < 1) {
		return (
			<></>
		)
	}

	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Website</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>
								{item.img.length > 0 && <img src={item.img} width={25} height={25} />}
								&nbsp;
								{item.title.length > 0 ? item.title : 'No data'}
							</td>
							<td>{item.address.length > 0 ? item.address : 'No data'}</td>
							<td>{item.website.length > 0 ? <a target="_blank" href={item.website}>{item.website}</a> : 'No data'}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}