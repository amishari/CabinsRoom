import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[14rem_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <Header />
      <main className="overflow-scroll p-16 pb-32 pl-20 pr-20 pt-24">
        <Outlet />
      </main>
    </div>
  );
}
export default AppLayout;
