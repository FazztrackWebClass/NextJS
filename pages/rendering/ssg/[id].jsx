import React from "react";
import axios from "axios";

// getStaticPaths = menyiapkan page detail yang ingin di buat statis
export async function getStaticPaths(context) {
  try {
    const listUser = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const listPath = listUser.data.map((item) => ({
      params: {
        id: `${item.id}`,
      },
    }));
    console.log(listPath);
    return {
      paths: listPath,
      fallback: "blocking", // false, true, blocking
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

// getstaticProps = untuk get data detail per user
export async function getStaticProps(context) {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${context.params.id}`
    );
    return {
      props: {
        data: result.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
}

export default function DetailProfile(props) {
  //   console.log(props);
  return (
    <div className="text-center">
      <h1>DetailProfile</h1>
      <hr />
      <h5>{props.data.name}</h5>
      <h6>{props.data.email}</h6>
    </div>
  );
}
