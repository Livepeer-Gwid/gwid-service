import React from "react";

type Props = {
  params: {
    gateway: string;
  };
};

const Gateway = ({ params }: Props) => {
  return (
    <div className="text-white">This is the Gateway ID {params.gateway}</div>
  );
};

export default Gateway;
