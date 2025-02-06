import React from "react";
import Service from "./Service";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-services"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/all-services");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-20 px-5 mx-auto">
      <div className="text-center font-semibold mb-3 md:mb-10">
        <h2 className="text-primary ">Our Services</h2>
        <h3 className="text-2xl md:text-3xl">
          The online embassy Service we provide
        </h3>
      </div>
      <div className=" grid md:grid-cols-3 gap-4">
        {services.map((serviceData) => (
          <Service key={serviceData._id} serviceData={serviceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
