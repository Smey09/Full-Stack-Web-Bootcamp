import React, { useState, useEffect } from "react";

interface Data {
  id: number;
  name: string;
}

const DataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const result: Data = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        console.log("eror");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Empty array means this effect runs once after initial render

  return (
    <div>
      {loading ? "Loading..." : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DataFetchingComponent;
