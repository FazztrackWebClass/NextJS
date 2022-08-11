import React, { useState, useEffect } from "react";
import axiosServer from "../../helper/axiosServer";
import { useRouter } from "next/router";
import cookies from "next-cookies";

export async function getServerSideProps(context) {
  try {
    console.log("Log Server Side");
    const dataCookie = cookies(context);
    // console.log(dataCookie);
    // PROSES GET DATA
    const page = !context.query?.page ? 1 : context.query.page;
    const result = await axiosServer.get(
      `user?page=${page}&limit=50&search=&sort=firstName ASC`,
      {
        headers: {
          Authorization: `Bearer ${dataCookie.token}`,
        },
      }
    );
    // console.log(result);
    return {
      props: {
        data: result.data.data,
        pagination: result.data.pagination,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    if (error.response.status === 403) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          isError: true,
          msg: error.response,
        },
      };
    }
  }
}

export default function SSR(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);

  console.log("Log Client Side");
  //   console.log(router);
  const handlenNextPage = () => {
    router.push(`/rendering/ssr?page=${+router.query.page + 1}`);
  };

  return (
    <div>
      <h1>Rendering with SSR</h1>
      <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h5>{item.firstName}</h5>
        </div>
      ))}
      <button onClick={handlenNextPage}>Go to next page</button>
    </div>
  );
}
