import React from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
import Image from 'next/image';
import { Button } from '../ui/button';
import { MessageCircleCode } from 'lucide-react';
import WorkspaceHistory from './WorkspaceHistory';
 
  
function AppSidebar  ()  {
  return (
    <Sidebar>
    <SidebarHeader  className="p-4">
        <Image src={'/logo.png'} alt="Logo" width={30} height={30} />
    </SidebarHeader>
    <SidebarContent className="p-4">
        <Button><MessageCircleCode/> Start New Chat</Button>
      <SidebarGroup >
        <WorkspaceHistory />
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  );
};

export default AppSidebar;