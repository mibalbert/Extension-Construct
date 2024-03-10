import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NikeReceiptEmail = () => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Preview>
        Get your order summary, estimated delivery date and more
      </Preview>
      <Body className="bg-white font-sans">
        <Container className="mx-auto border border-gray-300">
          <Section className="bg-gray-100 p-6">
            <Row>
              <Column>
                <Text className="font-bold text-blue-500">Tracking Number</Text>
                <Text className="text-gray-700">1ZV218970300071628</Text>
              </Column>
              <Column align="right">
                <Link className="border border-gray-600 px-4 py-2">
                  Track Package
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="p-10 text-center">
            <Img
              src={`${baseUrl}/static/nike-logo.png`}
              width="66"
              height="22"
              alt="Nike"
              className="mx-auto"
            />
            <Heading className="text-4xl font-bold mt-6">
              I VOIL U, gurita
            </Heading>
            <Text className="text-gray-700">
              Your order's is on its way. Use the link above to track its
              progress.
            </Text>
            <Text className="text-gray-700 mt-6">
              We´ve also charged your payment method for the cost of your order
              and will be removing any authorization holds. For payment details,
              please visit your Orders page on Nike.com or in the Nike app.
            </Text>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="px-10 py-6">
            <Text className="font-bold text-lg">Shipping to: Alan Turing</Text>
            <Text className="text-gray-700 text-sm">
              2125 Chestnut St, San Francisco, CA 94123
            </Text>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="px-40 py-20">
            <Row>
              <Column>
                <Img
                  src={`${baseUrl}/static/nike-product.png`}
                  alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                  className="float-left"
                  width="260px"
                />
              </Column>
              <Column className="pl-12">
                <Text className="font-semibold">
                  Brazil 2022/23 Stadium Away Nike Dri-FIT Soccer Jersey
                </Text>
                <Text className="text-gray-700">Size L (12–14)</Text>
              </Column>
            </Row>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="px-10 py-6">
            <Row className="mb-10">
              <Column className="w-1/2">
                <Text className="font-bold">Order Number</Text>
                <Text className="text-gray-700">C0106373851</Text>
              </Column>
              <Column className="w-1/2">
                <Text className="font-bold">Order Date</Text>
                <Text className="text-gray-700">Sep 22, 2022</Text>
              </Column>
            </Row>
            <Row>
              <Column className="w-full text-center">
                <Link className="border border-gray-600 px-4 py-2">
                  Order Status
                </Link>
              </Column>
            </Row>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="py-8 px-10">
            <Row>
              <Text className="text-2xl font-bold">Top Picks For You</Text>
            </Row>
            <Row className="flex">{/* Recomendations */}</Row>
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="px-10 py-6 bg-gray-100">
            <Row>
              <Text className="font-bold">Get Help</Text>
            </Row>
            {/* Menu content */}
          </Section>
          <Hr className="border-t border-gray-300" />
          <Section className="py-8 px-10">
            <Row>
              <Text className="text-2xl font-bold">Nike.com</Text>
            </Row>
            <Row className="flex">{/* Categories */}</Row>
          </Section>
          <Hr className="border-t border-gray-300 mt-3" />
          <Section className="py-8 px-10">
            <Row className="flex">
              <Column>
                <Text className="text-gray-600">Web Version</Text>
              </Column>
              <Column>
                <Text className="text-gray-600">Privacy Policy</Text>
              </Column>
            </Row>
            <Row>
              <Text className="text-gray-600 pt-5 pb-5">
                Please contact us if you have any questions. (If you reply to
                this email, we wont be able to see it.)
              </Text>
            </Row>
            <Row>
              <Text className="text-gray-600">
                © 2022 Nike, Inc. All Rights Reserved.
              </Text>
            </Row>
            <Row>
              <Text className="text-gray-600">
                NIKE, INC. One Bowerman Drive, Beaverton, Oregon 97005, USA.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default NikeReceiptEmail;
