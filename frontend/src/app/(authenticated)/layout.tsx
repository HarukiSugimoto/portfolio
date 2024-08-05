'use client';

import React from 'react';

const AppLayout = (props: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-100">
    {/* Page Content */}
    <main>{props.children}</main>
  </div>
);

export default AppLayout;
