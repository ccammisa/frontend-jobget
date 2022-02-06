import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const JobCard = (props) => {
  const {
    name,
    location,
    posted_time_friendly,
    hiring_company,
    category,
    salaryMax,
    index,
    url,
    snippet
  } = props;

  function formatSnipet() {
    return {__html: snippet};
  }
  return (
    <Card className="job-card" index={index + 1}>
      <CardContent className="job-info">
        <Typography className="post-time">Posted {posted_time_friendly}</Typography>
        <Typography className="job-name"><a href={url} target="_blank" rel="noopener noreferrer" className="url"><strong> {name}</strong></a></Typography>
        <Typography className="job-location"><strong>Location:</strong> {location}</Typography>
        <Typography className="company-name"><strong>Company:</strong> {hiring_company.name}</Typography>
        <div className="snippet" dangerouslySetInnerHTML={formatSnipet()}></div>
      </CardContent>
    </Card>
  );
};

export default JobCard;