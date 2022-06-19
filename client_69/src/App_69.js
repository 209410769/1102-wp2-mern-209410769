import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Landing_69 from "./pages/Landing_69";
import {
  Landing_69,
  Register_69,
  Error_69,
  ProtectedRoute_69,
  TestFetchUseCors_69,
  TestFetchUseProxy_69,
} from './pages';

import {
  AddJob_69,
  AllJobs_69,
  Profile_69,
  Stats_69,
  SharedLayout_69,
} from './pages/dashboard';

import styled from 'styled-components';

function App_69() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute_69>
              <SharedLayout_69 />
            </ProtectedRoute_69>
          }
        >
          <Route index element={<Stats_69 />} />
          <Route path='profile' element={<Profile_69 />} />
          <Route path='add-job' element={<AddJob_69 />} />
          <Route path='all-jobs' element={<AllJobs_69 />} />
        </Route>
        <Route path='/landing_69' element={<Landing_69 />} />
        <Route path='/register_69' element={<Register_69 />} />
        <Route path='/testcors_69' element={<TestFetchUseCors_69 />} />
        <Route path='/testproxy_69' element={<TestFetchUseProxy_69 />} />
        <Route path='*' element={<Error_69 />} />
      </Routes>
      {/* <Landing_69 /> */}
    </BrowserRouter>
  );
}

export default App_69;
