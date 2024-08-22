"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  apple,
  calsoft,
  veyron,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-2"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={apple}
              title="Apple, TX"
              subtitle="DevOps Engineer"
              date="Jan 2024 - Present"
              para={[
                "- Managed platform deployment on major cloud providers including AWS, Azure, and Google Cloud ensuring scalability and high availability.",
                "- Developed and debugged custom integration service tasks enabling seamless data flow across the ecosystem.",
                "- Monitored infrastructure health using the ELK cluster, identifying and resolving issues proactively.",
                "- Administered databases integral to platforms, ensuring data integrity."
              ]}
            />

            <Exp_prop
              img={calsoft}
              title="Calsoft Tech India"
              subtitle="DevOps Engineer"
              date="Nov 2021 - Jul 2022"
              para={[
                "- Worked on Jenkins pipeline that pulls source code from Bitbucket, uses Artifactory to store Docker images, and deploys microservices to Docker Swarm using Ansible.",
                "- Supported multiple environments with monitoring using Dynatrace.",
                "- Set up the ELK stack (Elasticsearch, Logstash, Kibana) with Kafka for efficient log management.",
                "- Defined Chef Server and Workstation to manage and configure nodes."
              ]}
            />

            <Exp_prop
              img={veyron}
              title="VeyronIT Ltd India"
              subtitle="Jr DevOps Engineer"
              date="Jun 2019 - Oct 2021"
              para={[
                "- Ensured all environment issues are fixed prior to production implementation in coordination with config management.",
                "- Worked with cloud SE CI/CD for build issues out of Jenkins, Rundeck, and Chef cookbooks that deploy to AWS ECS.",
                "- Performed health checks on services deployed in AWS ECS using Splunk logs, CloudWatch, and AppDynamics.",
                "- Administered Linux servers, managed Apache/Tomcat server, and MySQL databases in both development and production."
              ]}
            />

          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default Experience;
