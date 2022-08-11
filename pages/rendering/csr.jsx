import React, { useState, useEffect } from "react";
import axios from "../../helper/axios";

export default function CSR() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDataUser();
  }, []);

  const getDataUser = async () => {
    try {
      const result = await axios.get(
        `user?page=${page}&limit=50&search=&sort=firstName ASC`
      );
      setData(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Rendering with CSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h5>{item.firstName}</h5>
        </div>
      ))}
    </div>
  );
}
