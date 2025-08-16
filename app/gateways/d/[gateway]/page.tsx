"use client";

import * as React from "react";

type Props = {
  params: Promise<{
    gateway: string;
  }>;
};

const Page = ({ params }: Props) => {
  const { gateway } = React.use(params);

  return <div className="text-white">This is the Gateway ID {gateway}</div>;
};

export default Page;
