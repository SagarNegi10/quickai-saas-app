import { useState } from "react";
import MarkDown from "react-markdown";

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {expanded && (
        <div className="">
          {expanded && (
            <div>
              {item.type === "image" ? (
                <div className="flex flex-row items-center gap-4 p-4">
                  <img
                    src={item.content}
                    alt="image"
                    className="max-w-35 max-h-35 rounded-lg object-contain"
                  />
                  <a
                    href={item.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-4 py-2 bg-[#00AD25] text-white text-xs rounded-lg shadow hover:bg-[#009920] transition"
                  >
                    Download Image
                  </a>
                </div>
              ) : (
                <div className="mt-3 h-full overflow-y-auto text-sm text-slate-700">
                  <div className="reset-tw">
                    <MarkDown>{item.content}</MarkDown>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
