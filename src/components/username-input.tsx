"use client";

import { Input } from "@heroui/input";
import { useState } from "react";

export const UserNameInput = () => {
  const [ userName, setUserName ] = useState("");

  return (
    <Input
      label="ユーザー名"
      labelPlacement="outside"
      isRequired
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
  );
};
