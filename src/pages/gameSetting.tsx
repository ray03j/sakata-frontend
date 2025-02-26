import { ThemeInput } from "@/components/theme-input";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";


export default function GameSettingPage() {
  return (
    <DefaultLayout>
      <section className="">
      <div>
        <div>
          <ThemeInput />
        </div>
        <div className="flex items-center justify-center min-h-100 p-10">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.paths.gamePlaying("12345", "player1")}
          >
            Start
          </Link>
        </div>      

    </div>
      </section>
    </DefaultLayout>
  );
}
