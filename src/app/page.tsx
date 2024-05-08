/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import {
  Monitor,
  Server,
  Database,
  CloudCog,
  Calendar,
  Briefcase,
  LinkedinIcon,
  PhoneCallIcon,
  MailIcon,
  GithubIcon,
} from "lucide-react";
import {
  AwsIcon,
  CSSIcon,
  DjangoIcon,
  DockerIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  JiraIcon,
  MongodbIcon,
  MysqlIcon,
  NestIcon,
  NextIcon,
  NodeIcon,
  PostgresqlIcon,
  PrismaIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  VueIcon,
} from "@/utils/icons";
import HeroMobile from "@/components/hero-mobile";
import TechLine from "@/components/tech-line";
import WorkLine from "@/components/work-line";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const goToWorks = () => {
    window.location.href = "#works";
  };

  const goToContact = () => {
    window.location.href = "#contact";
  };
  return (
    <>
      <section className="bg-[#28293E] min-h-screen scroll-smooth">
        <div className="z-10 top-0 w-full py-5 px-12 lg:px-32  flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              alt="mylogo"
              width={48}
              height={48}
              src="./icon.svg"
            />
            <h3 className="text-white font-semibold text-2xl">CRIONI EPONDE</h3>
          </div>
          <div className="hidden lg:flex justify-between p-3 text-white space-x-8">
            <a
              href="#about"
              className="hover:underline cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:underline cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#works"
              className="hover:underline cursor-pointer"
            >
              Works
            </a>
          </div>
          <Link
            href={"#contact"}
            className="hover:bg-white hidden cursor-pointer lg:flex hover:text-black rounded-lg px-8 py-2 bg-transparent text-white text-md border-[1px] border-white"
          >
            Contact
          </Link>
        </div>
        <div className="hidden md:flex justify-around items-center min-h-screen px-24">
          <div className="space-y-8">
            <h4 className="text-[#EF6D58] font-normal">Crioni Eponde Babili</h4>

            <h2 className="font-bold md:text-4xl lg:text-6xl text-white">
              Fullstack web
              <br /> developer
            </h2>

            <p className="text-gray-400 mb-6">
              Highly skilled Fullstack developer with over
              <br /> 5 years of industry experience
            </p>
            <button
              onClick={() => goToWorks()}
              className="text-white  uppercase hover:border-2 border-[#EF6D58] hover:bg-transparent hover:text-[#EF6D58] bg-[#EF6D58] font-semibold px-6 py-2 rounded-md"
            >
              see my works
            </button>

            {/* 
            <button  className="text-white uppercase hover:border-2 border-[#EF6D58] hover:bg-transparent hover:text-[#EF6D58] bg-[#EF6D58] font-semibold px-6 py-2 rounded-md">
              see my work
            </button> */}
          </div>
          <div className="relative">
            <Image
              width={150}
              height={108}
              alt="oval"
              className="absolute top-[-6.5rem] left-[-2rem]"
              src={"/Star.png"}
            />
            <Image
              width={408}
              height={408}
              alt="oval"
              src={"/Oval.png"}
            />
            <Image
              width={48}
              height={48}
              alt="shape2"
              className="absolute top-[-3.5rem] left-[1.3rem]"
              src={"/Combined-Shape-2.png"}
            />
            <Image
              width={100}
              height={162}
              alt="shape"
              className="absolute top-[2rem] left-[4rem] "
              src={"/Combined-Shape.png"}
            />
            <Image
              width={100}
              height={105}
              alt="shap1"
              className="absolute lg:top-[20.25rem] lg:left-[6rem] md:top-[13.25rem] md:left-[3rem]"
              src={"/Combined-Shape-1.png"}
            />

            <Image
              width={316}
              height={392}
              alt="myself"
              className="absolute lg:top-[0.25rem] md:top-[-3.75rem] md:left-[5rem] lg:left-[10rem]  rounded-t-full"
              src={"/myself.png"}
            />
            <Image
              className="md:hidden lg:block absolute lg:top-[9.25rem] lg:left-[-5rem]"
              width={275}
              height={144}
              alt="oval"
              src={"/block.png"}
            />
          </div>
        </div>
        <HeroMobile />
      </section>
      <section
        id="skills"
        className="bg-[#f3d1bfd9] min-h-screen p-24 space-y-8"
      >
        <div className="flex flex-col items-center">
          <h3 className="uppercase text-[#EF6D58] mb-4">Skills</h3>
          <h1 className="font-bold text-3xl md:text-6xl text-center text-[#391400]">
            My Arsenal of Languages and
          </h1>
          <h1 className="font-bold text-3xl md:text-6xl text-center text-[#391400]">
            Frameworks
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="border-2 border-[#ceb2a2] border-text-[#391400] w-full p-8 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-[#EF6D58] rounded-full">
                <Monitor
                  stroke={"white"}
                  fill={"white"}
                />
              </div>
              <h3 className="font-semibold text-2xl">Frontend</h3>
            </div>
            <p className="text-[#39140083]">
              The Palette of Frontend Technologies
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <TechLine
                icon={<TailwindIcon />}
                name={"TailwindCSS"}
              />
              <TechLine
                icon={<HtmlIcon />}
                name={"HTML"}
              />
              <TechLine
                icon={<CSSIcon />}
                name={"CSS"}
              />
              <TechLine
                icon={<ReactIcon />}
                name={"React"}
              />
              <TechLine
                icon={<VueIcon />}
                name={"VueJs"}
              />
              <TechLine
                icon={<ReduxIcon />}
                name={"Redux"}
              />
              <TechLine
                icon={<NextIcon />}
                name={"Next.js"}
              />
              <TechLine
                icon={<JavascriptIcon />}
                name={"Javascript"}
              />
            </div>
          </div>

          <div className="border-2 border-[#ceb2a2] border-text-[#391400] w-full p-8 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-[#EF6D58] rounded-full">
                <Server
                  stroke={"white"}
                  fill={"white"}
                />
              </div>
              <h3 className="font-semibold text-2xl">Backend</h3>
            </div>
            <p className="text-[#39140083]">Backend Languages and Frameworks</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <TechLine
                icon={<ExpressIcon />}
                name={"ExpressJs"}
              />
              <TechLine
                icon={<NestIcon />}
                name={"NestJs"}
              />
              <TechLine
                icon={<DjangoIcon />}
                name={"Django"}
              />
              <TechLine
                icon={<NodeIcon />}
                name={"Node"}
              />
              <TechLine
                icon={<PythonIcon />}
                name={"Python"}
              />
              <TechLine
                icon={<PrismaIcon />}
                name={"Prisma"}
              />
            </div>
          </div>

          <div className="border-2 border-[#ceb2a2] border-text-[#391400] w-full p-8 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 p-2 h-8 md:w-20 md:h-20 bg-[#EF6D58] rounded-full">
                <Database
                  stroke={"white"}
                  fill={"white"}
                />
              </div>
              <h3 className="font-semibold text-2xl">Databases</h3>
            </div>
            <p className="text-[#39140083]">The Palette of database</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <TechLine
                icon={<MysqlIcon />}
                name={"mySQL"}
              />
              <TechLine
                icon={<PostgresqlIcon />}
                name={"PostgreSQL"}
              />
              <TechLine
                icon={<MongodbIcon />}
                name={"MongoDB"}
              />
            </div>
          </div>

          <div className="border-2 border-[#ceb2a2] border-text-[#391400] w-full p-8 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 md:w-20 p-2 md:h-20 bg-[#EF6D58] rounded-full">
                <CloudCog
                  stroke={"white"}
                  fill={"white"}
                />
              </div>
              <h3 className="font-semibold text-2xl">Cloud / Tools</h3>
            </div>
            <p className="text-[#39140083]">
              Cloud technologies, ops, and developement tools
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <TechLine
                icon={<JiraIcon />}
                name={"Jira"}
              />
              <TechLine
                icon={<DockerIcon />}
                name={"Docker"}
              />
              <TechLine
                icon={<GitIcon />}
                name={"Git"}
              />
              <TechLine
                icon={<FigmaIcon />}
                name={"Figma"}
              />
              <TechLine
                icon={<AwsIcon />}
                name={"Aws"}
              />
              <TechLine
                icon={<FirebaseIcon />}
                name={"Firebase"}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id="works"
        className="bg-[#28293E] min-h-screen w-full space-y-32 py-24"
      >
        <div className="flex justify-between items-end px-24">
          <div className="space-y-5">
            <h3 className="text-[#EF6D58] uppercase text-md font-thin">
              portfolio
            </h3>
            <h1 className="text-5xl font-bold text-white">Latest work</h1>
          </div>
          {/* <button className="uppercase bg-transparent border-[1px] text-white rounded-md px-6 py-3 border-white">
            explore more
          </button> */}
        </div>
        <div className="flex min-h-[6rem] min-w-[18rem] max-w-8xl flex-wrap items-center justify-center">
          <div className="carousel carousel-start">
            <WorkLine
              bg={"/works/work-1.jpeg"}
              link={"#"}
            />
            <WorkLine
              bg={"/works/work-3.jpeg"}
              link={"https://meteorite-strike.web.app/"}
            />
            <WorkLine
              bg={"/works/work-4.jpeg"}
              link={"https://lisapo-studio.web.app/"}
            />
            <WorkLine
              bg={"/works/work-5.jpeg"}
              link={"https://perishopp-web.web.app/"}
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="bg-[#f3d1bfd9] min-h-screen p-24 space-y-8"
      >
        <div className="block lg:flex space-x-12 items-center">
          <Image
            src="/about.svg"
            alt="about-pic"
            width={530}
            height={550}
          />
          <div className="space-y-8">
            <p className="uppercase text-[#EF6D58] text-md">Crioni Eponde</p>
            <h2 className="text-[#391400] font-bold text-3xl lg:text-6xl">
              Fullstack <br /> Web Develope
            </h2>
            <p className="text-[#391400] text-lg">
              Highly skilled Fullstack developer
            </p>
            <p className="text-[#391400]">
              with over 5 years of experience developing various full-stack
              solutions within tight timelines. Skilled in guiding projects from
              conceptualization to deployment. Proficient in coding web apps for
              asset inspection & verification processes, necessitating data
              encryption, improving app performance, optimizing UX, and
              translating UI designs into intuitive code. Committed to
              continuous learning and incorporating emerging industry trends and
              technologies into projects for creating innovative and
              user-centric solutions.
            </p>
            <button
              onClick={() => goToContact()}
              className="text-[#391400] uppercase font-bold shadow-md py-2 px-4 bg-white rounded-md"
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="border-2 space-x-7 h-[176px] flex items-center py-3 px-9">
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-[#EF6D58] rounded-full">
              <Calendar stroke={"white"} />
            </div>
            <div>
              <h3 className="text-[#28293E] text-4xl font-bold">5</h3>
              <p className="font-light">Year of experience</p>
            </div>
          </div>
          <div className="border-2 space-x-7 h-[176px] flex items-center py-3 px-9">
            <div className="flex items-center justify-center w-10 h-10 md:w-20 md:h-20 bg-[#EF6D58] rounded-full">
              <Briefcase stroke={"white"} />
            </div>
            <div>
              <h3 className="text-[#28293E] text-4xl font-bold">15</h3>
              <p className="font-thin">Projects Done</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="bg-[#28293E] block lg:flex justify-between min-h-screen px-24"
      >
        <Image
          className=""
          src={"/contact.svg"}
          alt="contact"
          width={570}
          height={601}
        />
        <div className="flex justify-center items-center">
          <div className="space-y-4">
            <p className="text-[#EF6D58]">Contact</p>
            <h3 className="text-4xl text-white font-bold">Contact Me</h3>
            <p className="text-white">
              Reach Out and Let's Turn Ideas into Reality!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 p-2 bg-[#EF6D58] rounded-full">
                  <LinkedinIcon
                    stroke={"white"}
                    fill={"white"}
                  />
                </div>
                <a
                  href="https://www.linkedin.com/in/crionieponde/"
                  target="_blank"
                  className="font-semibold text-white text-md hover:underline"
                >
                  crionieponde
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 p-2 bg-[#EF6D58] rounded-full">
                  <GithubIcon
                    stroke={"white"}
                    fill={"white"}
                  />
                </div>
                <a
                  href="https://github.com/chrioniep"
                  target="_blank"
                  className="font-semibold text-white text-md hover:underline"
                >
                  my github
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 p-2 bg-[#EF6D58] rounded-full">
                  <PhoneCallIcon stroke={"white"} />
                </div>
                <h3 className="font-semibold text-white text-md">
                  +243 (81) 945 11 20
                </h3>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 p-2 bg-[#EF6D58] rounded-full">
                  <MailIcon stroke={"white"} />
                </div>
                <h3 className="font-semibold text-white text-md">
                  eponde26@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
