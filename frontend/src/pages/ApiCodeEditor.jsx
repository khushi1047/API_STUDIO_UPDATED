import React from 'react'
import ApiTester from '../components/ApiCodeEditor/ApiTester'
import CodeEditor from '../components/ApiCodeEditor/CodeEditor'
import ServerPanel from '../components/ApiCodeEditor/ServerPanel'

const ApiCodeEditor = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full min-h-screen p-4">
      {/* API Tester */}
      <div className="border p-6 border-gray-600 bg-[#111827] rounded-lg">
        <ApiTester />
      </div>

      {/* Code Editor */}
      <div className="border p-6 border-gray-600 bg-[#111827] rounded-lg min-h-[60vh]">
        <CodeEditor />
      </div>

      {/* Server Panel (full width on all screens) */}
      <div className="border p-6 border-gray-600 bg-[#111827] rounded-lg lg:col-span-2">
        <ServerPanel />
      </div>
    </div>
  )
}

export default ApiCodeEditor
