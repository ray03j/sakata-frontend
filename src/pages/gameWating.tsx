
"use client";

import { useState, useEffect } from "react";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

export default function GameWaitingPage() {
  const [countdown, setCountdown] = useState(10); // 10秒カウントダウン

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-4 text-black">ゲーム開始待機中...</h1>
        
        {/* ローディングアニメーション */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
        />

      </div>
    </DefaultLayout>
  );
}

