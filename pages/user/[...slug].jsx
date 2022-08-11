import React from "react";
import { useRouter } from "next/router";

export default function UserDetail() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      {/* <h3>{router.query.slug[0]}</h3> */}
      {/* <h3>{router.query.slug[1]}</h3> */}
      {/* <h3>{router.query.slug[2]}</h3> */}
    </div>
  );
}
