import React  from 'react';
import SearchComponent from '../../components/search/search.component'
import NavBarComponent from '../../components/navbar/NavBar.component'



const HomePageContainer = () => {

  return (
    <>
    <NavBarComponent/>
    <SearchComponent/>
    {/* <JobListComponent/> // una lista que muestre los resultados */}
    </>
  )

}

export default HomePageContainer;