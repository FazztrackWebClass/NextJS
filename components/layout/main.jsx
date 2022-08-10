import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MainLayout(props) {
  const router = useRouter();
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = false;
    if (!token) {
      router.push("/auth/login");
    }
  };

  return (
    <>
      <Head>
        <title>{props.title ? props.title : "FazzPay"}</title>
      </Head>
      <div>Navbar Component</div>
      <div>Aside Component</div>
      <main>{props.children}</main>
      <div>Footer Component</div>
    </>
  );
}
