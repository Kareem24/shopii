import ProfileNav from '@/components/ProfileNav';
import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';

const getHeading = (path: string) => {
  const heading = path;
  const header = heading.split('/').at(-1);

  if (header?.includes('-')) return header.replace('-', ' ');

  return header;
};

function ProfileLayout() {
  const { pathname } = useLocation();
  const header = getHeading(pathname);

  return (
    <>
      <ProfileNav />
      <div className="pl-0 md:pl-16">
        <p className="mb-14 font-semibold capitalize text-shopii-black-900">
          {header}
        </p>
        <Outlet />
      </div>
    </>
  );
}

export default ProfileLayout;
