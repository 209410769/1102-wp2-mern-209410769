import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

import { Navbar_69, BigSidebar_69, SmallSidebar_69 } from '../../components';

const SharedLayout_69 = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar_69 />
        <BigSidebar_69 />
        <div>
          <Navbar_69 />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default SharedLayout_69;

/*
const SharedLayout_69 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to='add-job'>add job</Link>
        <Link to='all-jobs'>all jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
*/
