import React, { useState } from "react";

interface Data {
  id: number;
  name: string;
}

const NoEffictDataFetchingComponent: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const result: Data = await response.json();
      setData(result);
      //   console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      //   console.log("error");
    } finally {
      setLoading(false);
    }
  };

  // Fetch data directly in the component body
  fetchData();

  return (
    <div>
      {loading ? "Loading..." : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default NoEffictDataFetchingComponent;
