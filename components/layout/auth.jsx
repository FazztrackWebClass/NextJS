import React from "react";

export default function AuthLayout(props) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
