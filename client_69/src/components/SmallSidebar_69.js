import Wrapper from '../assets/wrappers/SmallSidebar_69';
import { FaTimes } from 'react-icons/fa';
import { useAppContext_69 } from '../context/appContext_69';

import Logo_69 from './Logo_69';
import NavLinks_69 from './NavLinks_69';

const SmallSidebar_69 = () => {
  const { showSidebar, toggleSidebar } = useAppContext_69();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo_69 />
          </header>
          <NavLinks_69 toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar_69;
