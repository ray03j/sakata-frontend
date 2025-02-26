"use client";

import { Input } from "@heroui/input";

type ThemeInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ThemeInput = ({ value, onChange }: ThemeInputProps) => {
  return (
    <Input
      label="テーマ"
      labelPlacement="outside"
      isRequired
      placeholder="例）牛肉の部位を多く答えてね"
      value={value}
      onChange={onChange}
    />
  );
};
