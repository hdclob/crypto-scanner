import DateTimeHelper from "../lib/helpers/DateTimeHelper"

import { useState, useEffect } from "react";


export default function NewTokenList() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const resp = await fetch(`api/fetch-new-tokens`, {
					method: "post",
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await resp.json();
				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		fetchData();
	}, []);

	const getPercentage = (price, oldPrice) => {
		const percentageChange = ((price - oldPrice) / Math.abs(oldPrice)) * 100;

		if (isNaN(percentageChange)) {
			return '--';
		}

		if (percentageChange == 0) {
			return percentageChange;
		}

		if (percentageChange < 0) {
			return <span className="text-danger">{percentageChange.toFixed(2)}%</span>;
		}

		return <span className="text-success">+{percentageChange.toFixed(2)}%</span>
	}

	const abbreviateNumber = (number) => {
		if (isNaN(number) || number == null || number == undefined) {
			return '--';
		}

		const thousand = 1000;
		const million = 1000000;
		const billion = 1000000000;
		const trillion = 1000000000000;

		if (number >= trillion) {
			return (number / trillion).toFixed(2) + "T";
		}
		if (number >= billion) {
			return (number / billion).toFixed(2) + "B";
		}
		if (number >= million) {
			return (number / million).toFixed(2) + "M";
		}
		if (number >= thousand) {
			return (number / thousand).toFixed(2) + "k";
		}
		return number.toFixed(2);

	}

	if (isLoading) {
		return (
			<>
				<span className="spinner-border"></span>
			</>
		)
	}

	return (
		<div className="table-responsive">
			<table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>Age</th>
						<th>% 5m</th>
						<th>Liquidity</th>
						<th>Locked</th>
						<th>Volume</th>
						<th>Total Supply</th>
						<th>Circulating Supply</th>
						<th>Total Market Cap</th>
						<th>Circ. Market Cap</th>
						<th>Holders</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>
								{/* {item.token.logo.length > 0 && <img src={'https://www.dextools.io/resources/tokens/logos/' + item.token.logo} width={25} height={25} />}
								&nbsp; */}
								{item.token.name}
							</td>
							<td>{item.price}</td>
							<td>{DateTimeHelper.getTimeAgoString(item.token.creationTime)}</td>
							<td>{getPercentage(item.price, item.price5m)}</td>
							<td>{abbreviateNumber(item.pair.metrics.liquidity)}</td>
							<td>Missing info</td>
							<td>{abbreviateNumber(item.volume5m)}</td>
							<td>{abbreviateNumber(item.token.metrics.totalSupply)}</td>
							<td>Missing info</td>
							<td>{abbreviateNumber(item.token.metrics.fdv)}</td>
							<td>Missing info</td>
							<td>{item.token.metrics.holders}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
