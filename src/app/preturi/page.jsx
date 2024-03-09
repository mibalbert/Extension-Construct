import CalculatorServicii from "@/components/CalculatorServicii";
import CasaLaRosuTable from "@/components/CasaLaRosuTable";
import Container from "@/components/Container";
import ServicesPricingTable from "@/components/DesfaceriTable";
import InstalatiiElectriceTable from "@/components/InstalatiiElectriceTable";
import InstalatiiSanitareSiTermiceTable from "@/components/InstalatiiSanitareSiTermice";
import LucrariDeGipsCartonTable from "@/components/LucrariDeGipsCartonTable";
import PardoseliTable from "@/components/PardoseliTable";
import PlacariGresieSiFainataTable from "@/components/PlacariGresieSiFainataTable";
import SapaTable from "@/components/SapaTable";
import TencuieliSiZugraveltTable from "@/components/TencuieliSiZugraveliTable";
import TermoizolatieFatadaTable from "@/components/TermoizolatieFatadaTable";
import CasaLaGataTable from "@/components/casaLaGataTable";
import React from "react";

const Preturi = () => {
  return (
    <section>
      {/* <div className="py-20 lg:py-32 bg-[url('/topography.svg')] bg-contain bg-center"> */}
      <div className="py-10 lg:py-32 bg-topo relative">
        <div className="absolute z-5 top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent" />
        <div className="space-y-10 lg:space-y-16 z-10 relative">
          <div className="text-4xl font-serif max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            Oferim peste 50+ de servicii.
          </div>
          <div className="max-w-screen-2xl mx-auto w-full  sm:px-6 lg:px-16">
            <CalculatorServicii />
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        <Container className={"py-16 md:py-20"}>
          <div className="text-4xl font-serif">
            Punem accentul pe Transparenta.
          </div>
        </Container>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="flex flex-grow">
            <div className="w-[90%] lg:w-full mx-auto ">
              <ServicesPricingTable />
              <TencuieliSiZugraveltTable />
              <PlacariGresieSiFainataTable />
              <LucrariDeGipsCartonTable />
              <PardoseliTable />
              <SapaTable />
              <TermoizolatieFatadaTable />
              <InstalatiiElectriceTable />
              <InstalatiiSanitareSiTermiceTable />
              <CasaLaRosuTable />
              <CasaLaGataTable />
            </div>
          </div>
          <div className="relative pt-10">
            <div className="w-[90%] mx-auto lg:w-[300px] border border-blue-600 h-[400px] lg:sticky top-32 rounded-xl">
              akldsaskldnla
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preturi;
