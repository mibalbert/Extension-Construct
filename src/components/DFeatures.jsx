/**
 * componenets/DFeatures.jsx
 */

"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "./Container";
import Image from "next/image";

const DFeatures = () => {
  return (
    <Tabs
      defaultValue="account"
      className="w-full max-w-screen-2xl mx-auto grid grid-cols-5 gap-10 h-[70vh]"
    >
      <div className="col-span-3">
        <TabsContent value="account" className="relative w-full h-full">
          <Image
            src={"/tabs/1.webp"}
            alt="1"
            fill
            className="object-contain object-center"
          />
        </TabsContent>
        <TabsContent value="password" className="relative w-full h-full">
          <Image
            src={"/tabs/2.webp"}
            alt="2"
            fill
            className="object-contain object-center"
          />
        </TabsContent>
        <TabsContent value="password2" className="relative w-full h-full">
          <Image
            src={"/tabs/3.webp"}
            alt="3"
            fill
            className="object-contain object-center"
          />
        </TabsContent>
      </div>
      <TabsList className="col-span-2 flex flex-col h-full bg-none space-y-3  justify-evenly">
        <TabsTrigger value="account" className="w-full h-full bg-none">
          <div>Account</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam et
            perspiciatis, earum autem adipisci soluta sequi ex. Beatae, quidem
            veritatis.
          </div>
        </TabsTrigger>
        <TabsTrigger value="password" className="w-full h-full bg-none">
          <div>Password</div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam et
            perspiciatis, earum autem adipisci soluta sequi ex. Beatae, quidem
            veritatis.
          </div>
        </TabsTrigger>
        <TabsTrigger value="password2" className="w-full h-full bg-none">
          <div>Password2</div>{" "}
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam et
            perspiciatis, earum autem adipisci soluta sequi ex. Beatae, quidem
            veritatis.
          </div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default DFeatures;
