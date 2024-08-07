import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { AwardIntro } from "~/components/AwardIntro";
import { OurAttributes } from "~/components/OurAttributes";
import { ServicesGrid } from "~/components/ServicesGrid";
import { getServices, ServiceType } from "~/data/services";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" }
  ];
};

export default function Index() {
  const [services, setServices]: [services: ServiceType[], setServices: any] =
    useState([]);
  useEffect(() => {
    setServices(getServices());
  }, []);
  return (
    <div>
      <AwardIntro />
      <ServicesGrid services={services} twoRows />
      <OurAttributes />
    </div>
  );
}
