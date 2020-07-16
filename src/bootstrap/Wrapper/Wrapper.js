import React, { Fragment } from 'react';
// import NavBar from '../../components/NavBar';
import * as routeService from '../../services/route/routeService';

const Wrapper = (props) => {
  const { route } = props;
  return (
    <Fragment>
      {/* <NavBar /> */}
      <div>{routeService.renderRoutes(route.routes)}</div>
    </Fragment>
  );
};

export default Wrapper;