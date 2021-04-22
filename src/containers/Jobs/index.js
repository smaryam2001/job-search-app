import React from "react";
import "./style.css";
import { JobItem } from "../../components/JobItem";
import jobIcon from "../../assets/images/job.svg";
import { jobs } from "../../shared/projectData";
import { useDocumentTitle } from "../../shared/projectLogic";

export const Jobs = ({ title }) => {
  useDocumentTitle(title)
  return (
    <div className="jobs">
      <h1>
        <img src={jobIcon} alt="Job" className="img" />
        Вакансии
      </h1>

      <div className="jobsItems">
        {jobs.map((job) => {
          return (
            <JobItem
              key={job.id}
              title={job.title}
              description={job.description}
              thumbnail={job.thumbnail}
              published={job.published}
            />
          );
        })}
      </div>
    </div>
  );
};
