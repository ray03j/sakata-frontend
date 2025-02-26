import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import SwimmingImage from "@/components/swimming-image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div>
        <SwimmingImage />
      </div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title({ color: "cyan" })}>エイ</span>
          <span className={title()}>くんのお気持ち</span>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.paths.gameSetting()}
          >
            Start
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
