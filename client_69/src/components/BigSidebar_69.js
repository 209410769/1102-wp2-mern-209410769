import { useAppContext_69 } from '../context/appContext_69';
import NavLinks from './NavLinks_69';
import Logo from '../components/Logo_69';
import Wrapper from '../assets/wrappers/BigSidebar_69';

const BigSidebar_69 = () => {
  const { showSidebar } = useAppContext_69();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container ' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar_69;
