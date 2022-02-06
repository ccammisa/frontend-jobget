import React from 'react';
import JobCard from '../job-card/job-card.component';
import './jobs-list.styles.css';

const JobsListComponent = ({ data } ) => {
  return (
    <div className="jobs-list">
      {data?.map((job, index) => (
        <JobCard key={job.id} {...job} index={index} />
      ))}
    </div>
  );
};

export default JobsListComponent;