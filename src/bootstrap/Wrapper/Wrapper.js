import React, { Fragment } from 'react';
import * as routeService from '../../services/route/routeService';

const Wrapper = (props) => {
  const { route } = props;
  return (
    <Fragment>
      <div>{routeService.renderRoutes(route.routes)}</div>
    </Fragment>
  );
};

export default Wrapper;