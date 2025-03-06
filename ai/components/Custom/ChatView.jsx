"use client";

import { MessgaesContext } from '@/Contex/MessagesContex';
import { useConvex } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { use, useContext, useEffect, useState } from 'react';
import { api } from '../../convex/_generated/api';
import Image from 'next/image';
import Lookup from "../../data/Lookup";

import Colors from '../../data/Colors';
import { UserDetailsContext } from '../../Contex/UserDetailsContext';
import { ArrowRight, Link } from 'lucide-react';



function ChatView () {
    const {id} = useParams();
    const convex = useConvex();

    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
    const { messages, setMessages } = useContext(MessgaesContext);

    const [userInput, setUserInput] = useState('');
    
    useEffect(() => {
        id&&GetWorkspaceData();
    }, [id])

    const GetWorkspaceData=async()=>{
        const result =await convex.query(api.workspace.GetWorkspace,{
            WorkSpaceId:id});
        
        setMessages(result?.messages);
        console.log(result);
    };


    return (
        <div className='reletive h-[85vh] flex flex-col'>
            <div className='flex-1 overflow-y-scroll p-5 '>
                {messages?.map((msg, index) => (
                    <div key={index}
                        className='p-3 rounded-lg mb-2 flex gap-2 items-start'
                        style={{
                            backgroundColor: Colors.CHAT_BACKGROUND
                        }}>
                        {msg.role === 'user' && userDetails?.picture && (
                            <div className="flex items-center gap-2 mb-2">
                                <Image
                                    src={userDetails.picture}
                                    alt="User"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    unoptimized={true} // Add this for external images that might cause issues
                                />
                                <h2>{msg.content}</h2>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Input Section */}
            <div className="p-5 border rounded-xl max-w-2xl w-full mt-3"
                style={{ backgroundColor: Colors.BACKGROUND }}
            >
                <div className="flex gap-2">
                    <textarea placeholder={Lookup.INPUT_PLACEHOLDER}
                        onChange={(event) => setUserInput(event.target.value)}
                        className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
                    ></textarea>
                    {userInput.trim().length > 0 && <ArrowRight
                        onClick={() => onGenerate(userInput)}
                        className="bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer" />}
                </div>
                <div>
                    <Link className="h-5 w-5" />
                </div>
            </div>
        </div>

  );


};

export default ChatView;