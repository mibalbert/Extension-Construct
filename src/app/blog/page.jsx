import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { blogPosts } from "@/constants";
import { ArrowRight } from "lucide-react";

const BlogPostsPage = () => {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 w-full">
      <Container className={"space-y-4 "}>
        <h1 className="text-center text-3xl md:text-5xl font-serif font-bold">
          Citeste Blogul nostru
        </h1>
        <h3 className="text-center text-md font-extrathin">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          recusandae natus. Eligendi.
        </h3>
      </Container>
      <div className="py-20 grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl w-full mx-auto">
        {blogPosts.map((post, idx) => {
          return (
            <Link
              key={idx}
              href={`/blog/${post.id}`}
              className="flex flex-col space-y-4 col-span-1 hover:bg-gray-100 p-5 "
            >
              <div className="space-y-2">
                <Image
                  alt="Image 1"
                  className="object-cover "
                  height={250}
                  src={post.heroUrl}
                  style={{
                    aspectRatio: "400/250",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <h2 className="text-lg font-bold tracking-tight">
                  {post.heroTitle}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 truncate">
                  {post.firstBlock}
                </p>
              </div>
              <div
                className="self-start mt-auto flex items-center gap-1"
                href="#"
              >
                Citeste
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPostsPage;
