import { useState } from "react";
import { ThemeInput } from "@/components/theme-input";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Schema } from "@/types/schema";
import { useThemeStore } from "@/store/useThemeStore";

export default function GameSettingPage() {
  const setTheme = useThemeStore((state) => state.setTheme);
  const theme = useThemeStore((state) => state.theme);

  const handleStartGame = async () => {
    if (!theme) return;

    try {
      const res = await fetch("http://localhost:8080/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme: theme }),
      });

      if (!res.ok) {
        console.error(res);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DefaultLayout>
      <section className="">
        <div>
          <div>
            {/* テーマを入力 */}
            <ThemeInput
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center min-h-100 p-10">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              href={siteConfig.paths.gamePlaying("1cd25514", "TODO: player")}
              onPress={handleStartGame}
            >
              テーマ決定
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
