"use client";

import React, { useState } from 'react';
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import Lookup from '@/data/Lookup';
import { Code, Play, Settings, Moon, Sun, ChevronDown } from 'lucide-react';

function CodeView() {
  const [activeTab, setActiveTab] = useState('code');
  const [files, setFiles] = useState(Lookup.DEFAULT_FILE);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedFile, setSelectedFile] = useState('Default Example');


  const handleFileChange = (file) => {
    // In a real app, you would load different example files
    setSelectedFile(file);
    // For now, we'll just use the default files
    setFiles(Lookup.DEFAULT_FILE);
  };

  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className='bg-[#111111] w-full p-3 border-b border-gray-800 flex justify-between items-center'>


        <div className='flex items-center gap-2 bg-[#222222] p-1 rounded-lg'>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md transition-all ${activeTab === 'code'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-300 hover:bg-[#333333]'
              }`}
          >
            <Code size={16} />
            Code
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-md transition-all ${activeTab === 'preview'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-300 hover:bg-[#333333]'
              }`}
          >
            <Play size={16} />
            Preview
          </button>
        </div>

        <div className='flex items-center gap-3'>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-md bg-[#222222] hover:bg-[#333333] text-gray-300 transition-colors"
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="p-2 rounded-md bg-[#222222] hover:bg-[#333333] text-gray-300 transition-colors"
            title="Settings"
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      <SandpackProvider
        files={files}
        template="react"
        theme={isDarkMode ? 'dark' : 'light'}
        customSetup={{
          dependencies: {
            ...Lookup.DEPENDENCIES
          }
        }}
      >
        <SandpackLayout className="!rounded-none">
          {activeTab === 'code' && (
            <>
              <SandpackFileExplorer
                style={{ height: '80vh', minWidth: '200px' }}
                className="border-r border-gray-800"
              />
              <SandpackCodeEditor
                style={{ height: '80vh', flex: 1 }}
                showTabs
                showLineNumbers
                showInlineErrors
                wrapContent
              />
            </>
          )}
          {activeTab === 'preview' && (
            <SandpackPreview
              style={{ height: '80vh' }}
              showNavigator={true}
              showRefreshButton={true}
            />
          )}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default CodeView;