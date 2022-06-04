//import Landing_69 from "./pages/Landing_69";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing_69, Dashboard_69, Register_69, Error_69, TestFetchUseCors_69, TestFetchUseProxy_69 } from './pages';

import styled from 'styled-components'

// const Button = styled.button`
// background:red;
// color:white;
// font-size:1rem;
// `
// const ButtonSecond = styled.button`
// background:blue;
// color:white;
// font-size:1rem;`

function App_69() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard_69 />} />
        <Route path='/landing_69' element={<Landing_69 />} />
        <Route path='/register_69' element={<Register_69 />} />
        <Route path='/testCors_69' element={<TestFetchUseCors_69 />} />
        <Route path='/testProxy_69' element={<TestFetchUseProxy_69 />} />
        <Route path="*" element={<Error_69 />} />
      </Routes>
      {/*<Landing_69/>*/}
    </BrowserRouter>
  );
}

export default App_69;
