export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  paths:{
    home: () => "/",
    gameSetting: () => `/game/setting`,
    gamePlaying: (gameId: string, userId: string) => `/game/${gameId}/${userId}`, 
    gameResult: (gameId: string) => `/game/${gameId}/result`,
    logout: () => "/logout",
  },
  links: {
    github: "https://github.com/ray03j/sakata-frontend",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
