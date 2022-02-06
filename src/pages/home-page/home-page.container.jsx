import React , { Suspense, useEffect, useState} from 'react';
import SearchComponent from '../../components/search/search.component'
import NavBarComponent from '../../components/nav-bar/nav-bar.component'
import { getJobs } from '../../common/redux/actions/action';
import { resetErrors } from '../../common/redux/actions/errors'
import { connect } from 'react-redux';

const JobsListComponent = React.lazy(() => import ('../../components/jobs-list/jobs-list.component'));


const HomePageContainer = (props) => {

  const [jobs, setJobs] = useState([])
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setJobs(props.jobs);
  }, [props.jobs]);

  useEffect(()=> {
    setErrors(props.errors);
  }, [props.errors]);

  const loadJobs = ({keyword, location, radius, page = 1}) => {
    const {dispatch} = props;
      dispatch(resetErrors());
      setIsLoading(true);
      dispatch(getJobs({ keyword, location, radius, page}))
        .then(()=>{
      setIsLoading(false);
    }).catch(()=> setIsLoading(false));
  }

  const handleSearch = ({keyword, location, radius}) => {
    loadJobs({keyword, location, radius});
    setIsLoading(true)
  };

  return (
    <>
      <NavBarComponent/>
      <SearchComponent
        handleSearch={handleSearch}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <JobsListComponent
          data={jobs}
        />
      </Suspense>
    </>
  )

}

const mapStateToProps = (state) => ({
  jobs: state.jobs,
  errors: state.errors
});

export default connect(mapStateToProps)(HomePageContainer);