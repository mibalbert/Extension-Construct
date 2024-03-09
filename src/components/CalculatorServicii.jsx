/**
 * CalculatorServicii.jsx
 */
"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Send } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import {
  casaLaGataData,
  casaLaRosuData,
  desfaceriData,
  instalatiiElectriceData,
  instalatiiSanitareSiTermiceData,
  lucrariDeGipsCartonData,
  pardoseliData,
  placariGresieSiFainata,
  sapaData,
  tencuieliSiZugraveliData,
  termoizolatieFatadaData,
} from "./table-data";
import { onSubmit } from "@/app/_actions";

const CalculatorServicii = () => {
  const [servicesArr, setServicesArr] = useState([]);

  const handleOnDelete = ({ name }) => {
    setServicesArr((prev) => prev.filter((el) => el.name !== name));
  };
  const handleIncrement = (name) => {
    setServicesArr((prev) =>
      prev.map((service) =>
        service.name === name ? { ...service, num: service.num + 1 } : service
      )
    );
  };

  const handleDecrement = (name) => {
    setServicesArr((prev) =>
      prev.map((service) =>
        service.name === name
          ? { ...service, num: Math.max(service.num - 1, 1) }
          : service
      )
    );
  };

  const handleChangeValue = (value, name) => {
    const trimmedValue = value.replace(/^0+/, "");
    const parsedValue = parseInt(trimmedValue);
    const newValue = isNaN(parsedValue)
      ? 1
      : Math.max(Math.min(parsedValue, 9999), 1);
    setServicesArr((prev) =>
      prev.map((service) =>
        service.name === name ? { ...service, num: newValue } : service
      )
    );
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div className="p-3 lg:p-10 lg:bg-gray-800 bg-gray-800/60  backdrop-blur-lg ">
      <div className="bg-white p-3 lg:p-10 ">
        <div className=" text-center text-2xl font-serif  ">
          Calculator Servicii
        </div>
        <hr className="my-6" />
        <div>
          <ul>
            {servicesArr?.map((service, idx) => {
              return (
                <li
                  key={idx}
                  className={cn(
                    "flex lg:gap-5  px-3 lg:h-10 items-center my-1 py-1 lg:py-0 lg:flex-nowrap lg:justify-between flex-wrap",
                    {
                      "bg-gray-50": idx % 2,
                    }
                  )}
                >
                  <div className="flex flex-grow w-full lg:w-min  truncate h-10 lg:h-full items-center">
                    {idx + 1}. {service.name}
                  </div>
                  <div className="flex items-center  justify-between  w-full lg:w-fit h-full gap-x-2  ">
                    <div className="flex items-center space-x-1  h-8 lg:h-full">
                      <button
                        className="text-xl border rounded-lg w-6 lg:w-10 h-full bg-gray-100 flex items-center justify-center pb-1 active:scale-110"
                        disabled={service.num <= 1}
                        onClick={() => handleDecrement(service.name)}
                      >
                        <span>-</span>
                      </button>
                      <input
                        className={cn(
                          "text-center h-full w-min text-sm rounded-lg",
                          {
                            "bg-gray-50": idx % 2,
                          }
                        )}
                        type="number"
                        value={service.num}
                        min="1"
                        max="9999"
                        onChange={(e) =>
                          handleChangeValue(e.target.value, service.name)
                        }
                      />
                      <button
                        className="text-xl border h-full  bg-gray-100 w-6 lg:w-10  flex items-center pb-1 justify-center active:scale-110  rounded-lg"
                        onClick={() => handleIncrement(service.name)}
                      >
                        <span>+</span>
                      </button>
                    </div>
                    <div className="w-12 text-end overflow-hidden truncate">
                      {service.measure}
                    </div>
                    <div className="w-20  text-end truncate">
                      {parseInt(service.price) * service.num + " lei"}
                    </div>
                    <button
                      onClick={() => handleOnDelete(service)}
                      className="w-6 lg:w-16 text-center lg:text-end"
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <hr className="my-6" />
        <div className="grid grid-cols-2 pb-4 space-y-4">
          <div className=" col-span-2 lg:col-span-1  items-center lg:mt-7 lg:mb-2">
            <div className="flex flex-grow lg:justify-center">
              <Dialog>
                <DialogTrigger className="border rounded-lg text-md w-full lg:text-lg bg-gray-50 px-3 py-1.5 whitespace-nowrap">
                  +Adauga Serviciu
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-[90%] sm:w-[80%] ">
                  <Command className="">
                    <CommandInput placeholder="Cauta un serviciu..." />
                    <CommandList>
                      {/* <CommandEmpty>Nu am gasit nici un rezultat.</CommandEmpty> */}
                      <CommandGroup heading="TENCUIELI SI ZUGRAVELI">
                        {tencuieliSiZugraveliData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow truncate">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="PLACARI GRESIE SI FAIANTA">
                        {placariGresieSiFainata
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="LUCRARI DE GIPS CARTON">
                        {lucrariDeGipsCartonData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="PARDOSELI">
                        {pardoseliData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="SAPA">
                        {sapaData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="TERMOIZOLATIE FATADA">
                        {termoizolatieFatadaData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="INSTALATII ELECTRICE">
                        {instalatiiElectriceData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="INSTALATII SANITARE SI TERMICE">
                        {instalatiiSanitareSiTermiceData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="CASA LA ROSU">
                        {casaLaRosuData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="CASA LA GATA">
                        {casaLaGataData
                          ?.filter(
                            (el) =>
                              !servicesArr?.find((els) => els.name === el.name)
                          )
                          ?.map((service, idx) => {
                            return (
                              <CommandItem key={idx} className="p-0 m-0">
                                <button
                                  className="w-full flex items-center p-3"
                                  onClick={() =>
                                    setServicesArr((prev) => [
                                      ...prev,
                                      { ...service, num: 1 },
                                    ])
                                  }
                                >
                                  <span className="flex flex-grow">
                                    {service.name}
                                  </span>
                                  <span>{service.measure}</span>
                                  <span className="w-[80px] text-end">
                                    {service.price}
                                  </span>
                                </button>
                              </CommandItem>
                            );
                          })}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1  w-full items-center justify-end">
            <Dialog>
              <DialogTrigger className="border text-md w-full lg:text-lg border-gray-300 shadow-sm rounded-lg bg-white px-4 py-1.5 flex items-center gap-2 font-serif">
                <span className=" flex items-center gap-2 justify-center w-full">
                  <Send className="w-3 h-3 lg:w-5 lg:h-5" />
                  <span>Total:</span>
                  <span>
                    {servicesArr.reduce((acc, el) => {
                      acc += parseInt(el.price) * el.num;
                      return acc;
                    }, 0)}
                  </span>
                  <span>lei</span>
                </span>
              </DialogTrigger>
              <DialogContent className="w-[90%] sm:w-[80%] max-w-4xl grid grid-cols-2 p-10 gap-5 max-h-[80vh] overflow-auto">
                <div className="col-span-2 lg:col-span-1 space-y-8">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">Formular Contact</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      Va rugam completati formularul de mai jos pentru a v-a
                      putea contacta.
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit((data) => onSubmit(data))}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Prenume</Label>
                        <Input
                          id="first-name"
                          {...register("firstName", { required: true })}
                          placeholder="ex: Andrei"
                          className={cn("", {
                            "border-red-500": errors.firstName,
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nume Fam.</Label>
                        <Input
                          id="last-name"
                          {...register("lastName", { required: true })}
                          placeholder="ex: Popescu"
                          className={cn("", {
                            "border-red-500": errors.lastName,
                          })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        // className={cn("", {
                        //   "border-red-500": errors.email,
                        // })}
                        {...register("email")}
                        placeholder="ex: andreipopescu@gmail.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="phone"
                        {...register("phone", { required: true })}
                        placeholder="ex: 0712345678"
                        className={cn("", {
                          "border-red-500": errors.phone,
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mesaj</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        placeholder="ex: Buna ziua, as dori serviciile selectate..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="w-full flex items-center justify-center lg:justify-start">
                      <Button className=""> Trimite mesaj</Button>
                    </div>
                  </form>
                </div>
                <div className="w-full col-span-2 lg:col-span-1 h-full">
                  {servicesArr.length ? (
                    <div className="p-5 flex flex-col justify-between border w-full h-full overflow-auto max-h-[60vh]">
                      <div className="space-y-2">
                        <div>Sumar</div>
                        <ul className="divide-y divide-gray-200">
                          {servicesArr.map((service, idx) => {
                            return (
                              <li
                                key={idx}
                                className="flex items-center justify-between py-2"
                              >
                                <div className="flex-1 mr-2 truncate">
                                  {service.name}
                                </div>
                                <div className="w-12 text-right mr-2 truncate">
                                  {service.num}
                                </div>
                                <div className="w-12 text-right mr-2 truncate">
                                  {service.measure}
                                </div>
                                <div className="w-16 text-right truncate">
                                  {parseInt(service.price) * service.num +
                                    " lei"}
                                </div>
                              </li>
                            );
                          })}
                        </ul>{" "}
                      </div>
                      <div className="w-full flex items-center justify-end">
                        <span className="text-xl pb-0.5 flex items-center gap-2">
                          <span>Total:</span>
                          <span>
                            {servicesArr.reduce((acc, el) => {
                              acc += parseInt(el.price) * el.num;
                              return acc;
                            }, 0)}
                          </span>
                          <span>lei</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="mx-auto w-full max-w-[240px]">
                        <div className=" ">
                          {`Nu a-ti selectat nici un serviciu.`}
                        </div>
                        <div className="">
                          {` Dar ne puteti contacta oricum :)`}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorServicii;
