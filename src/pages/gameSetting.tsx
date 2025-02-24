import { InviteURLBox } from "@/components/invite-URL-box";
import { ThemeInput } from "@/components/theme-input";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";


export default function GameSettingPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div>
      <ThemeInput />
      
      <InviteURLBox />

      <Link
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.paths.gamePlaying("12345")}
      >
        Start
      </Link>
    </div>
      </section>
    </DefaultLayout>
  );
}
