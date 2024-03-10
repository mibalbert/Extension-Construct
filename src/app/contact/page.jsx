/**
 * contact/page.jsx
 */

"use client";

import Button from "@/components/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="text-gray-600 relative pt-10 w-full">
      <h1 className="text-3xl text-center font-semibold font-serif">Contact</h1>
      <hr className="w-full max-w-screen-xl mx-auto mb-10 mt-5" />
      <div className="flex w-full max-w-screen-xl flex-wrap px-2 md:px-5 lg:px-2 lg:flex-nowrap justify-center mx-auto pb-32 gap-10">
        <div className="w-[90%] md:w-2/3 mx-auto lg:w-1/3  space-y-10 lg:pr-10">
          <div className="space-y-5">
            <div>
              <h2 className="title-font text-lg md:text-2xl font-semibold text-gray-900">
                Telefon
              </h2>
              <h3 className="leading-relaxed text-sm md:text-lg">
                123-456-7890
              </h3>
            </div>
            <div>
              <h2 className="title-font text-lg md:text-2xl font-semibold text-gray-900">
                Email
              </h2>
              <h3 className="leading-relaxed text-sm md:text-lg">
                marketing.extension.con@gmail.com
              </h3>
            </div>
          </div>

          <div>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contactati-ne prin email aici:
            </h2>
            <form
              onSubmit={handleSubmit((data) => {
                try {
                  const res = onSubmit(data, servicesArr);

                  console.log(res);
                  if (res.ok) {
                    toast({
                      title: res.message,
                      description: "Friday, February 10, 2023 at 5:57 PM",
                    });
                  }
                  toast({
                    title: res.message,
                    description: "Friday, February 10, 2023 at 5:57 PM",
                  });
                } catch (error) {
                  toast({
                    title: JSON.stringify(error),
                    description: "Friday, February 10, 2023 at 5:57 PM",
                  });
                }
              })}
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
                  className={cn("", {
                    "border-red-500": errors.email,
                  })}
                  {...register("email", { required: true })}
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
                  placeholder="Scrieti aici mesajul dumenavoastra..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="w-full flex items-center justify-center lg:justify-start">
                <Button className=""> Trimite mesaj</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-[90%] min-h-[70vh]   md:w-2/3 mx-auto lg:w-2/3   bg-gray-300 rounded-lg overflow-hidden  p-2  md:p-5 lg:p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ contrast: 1.2, opacity: 0.4 }}
          ></iframe>
          <div className="bg-white w-full relative flex flex-wrap  py-6 rounded shadow-md overflow-auto">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Adresa
              </h2>
              <p className="mt-1">Vurpar, Str. Lunga</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Email
              </h2>
              <h3 href="#" className=" leading-relaxed ">
                marketing.extension.con@gmail.com
              </h3>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Telefon
              </h2>
              <h3 className="leading-relaxed">123-456-7890</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
