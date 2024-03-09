import logoBbc from "@/images/logos/bbc.svg";
import logoCbs from "@/images/logos/cbs.svg";
import logoCnn from "@/images/logos/cnn.svg";
import logoFastCompany from "@/images/logos/fast-company.svg";
import logoForbes from "@/images/logos/forbes.svg";
import logoHuffpost from "@/images/logos/huffpost.svg";
import logoTechcrunch from "@/images/logos/techcrunch.svg";
import logoWired from "@/images/logos/wired.svg";
import Image from "next/image";
import Container from "./Container";

const ExtraLogos = () => {
  const logos = [
    { _id: 2001, title: "Forbes", logo: logoForbes },
    { _id: 2002, title: "TechCrunch", logo: logoTechcrunch },
    { _id: 2003, title: "Wired", logo: logoWired },
    { _id: 2004, title: "CNN", logo: logoCnn },
    { _id: 2005, title: "BBC", logo: logoBbc },
    { _id: 2006, title: "CBS", logo: logoCbs },
    { _id: 2007, title: "Fast Company", logo: logoFastCompany },
    { _id: 2008, title: "HuffPost", logo: logoHuffpost },
  ];
  return (
    <Container className="py-16 ">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        As featured in
      </p>
      <ul
        role="list"
        className="mx-auto mt-8 flex  flex-wrap  gap-x-10 gap-y-8 lg:mx-0  "
      >
        {logos.map(({ title, logo }) => (
          <li key={title}>
            <Image src={logo} alt={title} className="h-8" unoptimized />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ExtraLogos;
