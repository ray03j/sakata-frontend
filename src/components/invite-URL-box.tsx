"use client";

import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export const InviteURLBox = () => {
  const URL = "https://localhost/9637668-41cd-4776-a9f4-1fcb804dcd34";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2秒後にリセット
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Input isReadOnly value={URL} />
      <Button onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};
