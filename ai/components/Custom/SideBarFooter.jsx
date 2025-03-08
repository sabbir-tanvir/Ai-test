

import { HelpCircle, LogOut, Settings } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

function SideBarFooter() {
    const options=[
        {
            title:'Settings',
            icon:Settings
        },
        {
            title:'Help Center',
            icon:HelpCircle
        },
        {
            title:'Logout',
            icon:LogOut
        }
    ]


  return (
    <div className='p-2 mb-10'>
        {options.map((option,index)=>(
            <Button variant="ghost" className="w-full my-2 flex justify-start" key={index}>
                <option.icon />
                {option.title}
            </Button>
        
        ))}
      
    </div>
  );
}

export default SideBarFooter;