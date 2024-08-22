import Project_prop from "./Project_prop";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiDjango,
  SiNpm,
  SiPycharm,
  SiPython,
  SiR,
  SiReact,
  SiRstudio,
  SiTailwindcss,
  SiVite,
  SiDocker,
  SiFlux,
  SiKubernetes,
  SiGooglecloud,
  SiAmazonaws,
  SiAmazondynamodb,
} from "react-icons/si";
import {
  uh, todo,cicd
} from "../constants/Constant";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >

          <Project_prop
            title="Django To-Do App: Streamlined Task Management with Docker Integration"
            para="The Django To-Do app is a simple task management project, demonstrating CRUD operations. It includes a Dockerfile for seamless containerization and deployment, enabling easy setup and consistent environment replication using Docker, highlighting practical skills in both Django and Docker."
            img={todo}
            link=""
            github_link="https://github.com/vivekreddy5959/django-todo"
            django={
              <Tooltip title="Django" arrow>
                <IconButton>
                  <SiDjango className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            docker={
              <Tooltip title="Docker" arrow>
                <IconButton>
                  <SiDocker className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Automated CI/CD Deployment for App in GCP"
            para=" Automated CI/CD Pipeline for Py-Expense Tracker in GCP, with GitHub Actions and Flux CD ensuring efficient, consistent deployment to GKE."
            img={cicd}
            link=""
            github_link=""
            flux={
              <Tooltip title="flux" arrow>
                <IconButton>
                  <SiFlux className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            docker={
              <Tooltip title="Docker" arrow>
                <IconButton>
                  <SiDocker className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            ks={
              <Tooltip title="Kubernetes" arrow>
                <IconButton>
                  <SiKubernetes className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            gcp={
              <Tooltip title="Google Cloud Platform" arrow>
                <IconButton>
                  <SiGooglecloud className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          <Project_prop
            title="Real-Time Object Detection and Tracking System: AWS Integration with Python for Enhanced Data Processing"
            para="This project involves extracting data from over 50,000 frames using Amazon Textract, with results stored in DynamoDB and visualized through SQS. It also features a real-time object detection system using Kinesis Video Streams, EC2, and S3."
            img={uh}
            link=""
            github_link=""
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            aws={
              <Tooltip title="AWS" arrow>
                <IconButton>
                  <SiAmazonaws className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            awsdb={
              <Tooltip title="DynamoDB" arrow>
                <IconButton>
                  <SiAmazondynamodb className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
