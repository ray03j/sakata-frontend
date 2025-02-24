"use client";

import { Input } from "@heroui/input";

export const ThemeInput= () => {
  return (
    <Input
        label="テーマ"
        labelPlacement="outside"
        isRequired
        placeholder="例）牛肉の部位を多く答えてね"
    />
  );
};
