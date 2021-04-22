import React from 'react'
import './style.css'
import resumeIcon from '../../assets/images/resume.svg'
import { useDocumentTitle } from '../../shared/projectLogic'
import { resumes } from '../../shared/projectData'
import { JobItem } from '../../components/JobItem'

export const Resumes = ({ title }) => {
  useDocumentTitle(title)
  return (
    <div className="resumes">
      <h1>
        <img src={resumeIcon} alt="Resume" className="img"/>
        Резюме
      </h1>

      <div className="resumeItems">
        {resumes.map((job) => {
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
  )
}
