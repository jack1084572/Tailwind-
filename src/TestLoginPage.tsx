import React, { useEffect, useState } from "react";

export default function InfoPage() {
  const [content, setContent] = useState<string>("加载中...");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://8000-cs-1071762297925-default.cs-us-west1-wolo.cloudshell.dev/login?username=admin&password=123456"
        );

        const text = await response.text();
        try {
          const json = JSON.parse(text);
          setContent(JSON.stringify(json, null, 2));
        } catch {
          setContent(text);
        }
      } catch (err: any) {
        setError("获取数据时出错: " + err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-2xl font-bold mb-4">服务器返回内容</h1>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <pre className="bg-white p-6 rounded shadow overflow-x-auto text-left whitespace-pre-wrap break-words">
          {content}
        </pre>
      </div>
    </div>
  );
}
