import { useState, useEffect } from "react";

export default function NewTokenList() {
  const [data, setData] = useState([]);

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
        console.log(data)
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Age</th>
            <th>Price Variance %</th>
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
                {item.img.length > 0 && (
                  <img src={item.img} width={25} height={25} />
                )}
                &nbsp;
                {item.title.length > 0 ? item.title : "No data"}
              </td>
              <td>{item.address.length > 0 ? item.address : "No data"}</td>
              <td>
                {item.website.length > 0 ? (
                  <a target="_blank" href={item.website}>
                    {item.website}
                  </a>
                ) : (
                  "No data"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
