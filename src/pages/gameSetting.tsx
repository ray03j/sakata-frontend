import { useState } from "react";
import { ThemeInput } from "@/components/theme-input";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

export default function GameSettingPage() {
  const [theme, setTheme] = useState("");
  const [themeId, setThemeId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleStartGame = async () => {
    if (!theme) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:8085/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme }),
      });

      if (!res.ok) throw new Error("Failed to create theme");

      const data = await res.json();
      setThemeId(data.id);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="">
        <div>
          <div>
            {/* テーマを入力 */}
            <ThemeInput value={theme} onChange={(e) => setTheme(e.target.value)} />
          </div>
          <div className="flex items-center justify-center min-h-100 p-10">
            <button
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
              onClick={handleStartGame}
              disabled={loading}
            >
              {loading ? "Loading..." : "テーマ決定"}
            </button>
          </div>
          {themeId && (
            <div className="flex items-center justify-center min-h-100 p-10">
              <Link
                className={buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                })}
                href={siteConfig.paths.gamePlaying(themeId, "player1")}
              >
                Start
              </Link>
            </div>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
