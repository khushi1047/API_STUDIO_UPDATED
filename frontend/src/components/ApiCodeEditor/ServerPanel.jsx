import React from "react";

const ServerPanel = ({ response }) => {
  let display = response;

  try {
    const parsed = JSON.parse(response);
    if(parsed.result !== undefined) {
      display = JSON.stringify(parsed.result, null, 2);
    }
  } catch (err) {
    // keep as-is if not JSON
  }

  return (
    <div className="h-full p-3 border border-gray-600 rounded bg-black overflow-auto">
      <p className='text-white font-bold text-3xl mb-2'>Server Response</p>
      <pre className="text-white text-sm">{display || "Response will appear here..."}</pre>
    </div>
  );
};

export default ServerPanel;
