"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { blogPosts } from "@/constants";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const OneBlogPage = ({ params }) => {
  const postData = blogPosts.find((el) => el.id === +params.blogId);

  if (!postData) {
    return <div className="text-center py-32">No post found </div>;
  }

  return (
    <section className="p-4 md:py-12 md:px-8   gap-10 w-full mx-auto">
      <Container className={"px-0 my-3 "}>
        <Link href={"/blog"} className="flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" /> <span>Toate Blogurile</span>
        </Link>
      </Container>
      <div className=" mx-auto w-full sm:p-10 md:p-16   dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <div className="w-full h-60 sm:h-96 dark:bg-gray-500 relative">
            <Image
              src={postData.heroUrl}
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="p-6 py-12 m-4 mx-auto relative z-10 -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md  bg-gray-900 text-white">
            <div className="space-y-4">
              <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
                {postData.heroTitle}
              </h1>
              <p className="text-sm font-serif">Date: {postData.date}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-full col-span-2  left-6"> */}
      <div className="mx-auto w-[90%]  max-w-screen-sm    ">
        <Typography color="blue" variant="h6">
          {postData?.tags?.map((tag, idx) => {
            return (
              <span key={idx} className="pr-2">
                #{tag}
              </span>
            );
          })}
        </Typography>
        {postData.firstBlock && (
          <Typography className="my-12 font-normal !text-gray-500">
            {postData.firstBlock}
          </Typography>
        )}

        {postData.firstTitle && (
          <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
            {postData.firstTitle}
          </Typography>
        )}

        {postData.secBlock && (
          <Typography className="my-10 font-normal !text-gray-500">
            {postData.secBlock}{" "}
          </Typography>
        )}
        {postData.firstContImageUrl && (
          <Image
            width={768}
            height={500}
            src={postData.firstContImageUrl}
            alt="post"
            className="mb-4 h-[28rem] w-full rounded-xl object-cover"
          />
        )}
        {/* <Typography variant="small" className="font-normal !text-gray-500">
          Photo by Jackson Sophat on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-gray-900"
          >
            Unsplash
          </a>
        </Typography> */}

        {postData.thirdBlock && (
          <Typography className="my-12 font-normal !text-gray-500">
            {postData.thirdBlock}
          </Typography>
        )}
        {postData.secTitle && (
          <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
            {postData.secTitle}
          </Typography>
        )}
        {postData.forthBlock && (
          <Typography className="my-10 font-normal !text-gray-500">
            {postData.forthBlock}
          </Typography>
        )}
        {postData.fifthBlock && (
          <div className="my-10 font-normal text-gray-500">
            {postData.fifthBlock}
          </div>
        )}
      </div>
      {/* <div className="col-span-1 border rounded-lg h-[350px]">
        aJKSdbnjkasbdkja
      </div> */}
    </section>
  );
};

export default OneBlogPage;
