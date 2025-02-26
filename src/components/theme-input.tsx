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
      placeholder="例）最近あったたのしかったこと"
      value={value}
      onChange={onChange}
    />
  );
};
