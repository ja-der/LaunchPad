let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Toronto, Canada",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
    },
  },
  disabled: ["search-bar"],
  localIcons: false,
  fastlink: "",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "school",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Tools",
          links: [
            {
              name: "Spotify",
              url: "https://www.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#1a782c",
            },
            {
              name: "Todoist",
              url: "https://todoist.com/",
              icon: "brand-todoist",
              icon_color: "#c41714",
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com/",
              icon: "brand-chatgpt",
              icon_color: "#a9b665",
            },
            {
              name: "Github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#d1d9e6",
            },
          ],
        },
        {
          name: "Resources",
          links: [
            {
              name: "d2l",
              url: "https://uottawa.brightspace.com/d2l/home",
              icon: "brand-d2l",
              icon_color: "#a9b665",
            },
            {
              name: "uozone",
              url: "https://uozone2.uottawa.ca/?language=en",
              icon: "brand-uozone",
              icon_color: "#e78a4e",
            },
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "brand-outlook",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "More",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#r89b482",
            },
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "Media",
      background_url: "src/img/banners/cbg-1.gif",
      categories: [
        {
          name: "Media",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#d3869b",
            },
            {
              name: "MyFlixer",
              url: "https://myflixerz.to/home",
              icon: "brand-myflixer",
              icon_color: "#a9b665",
            },
            {
              name: "Dramacool",
              url: "https://dramacool.hr/country/hong-kong-drama.html",
              icon: "brand-dramacool",
              icon_color: "#ea6962",
            },
            {
              name: "Aniwave",
              url: "https://aniwave.to/",
              icon: "brand-aniwave",
              icon_color: "#773ce6",
            },
          ],
        },
        {
          name: "Social Media",
          links: [
            {
              name: "discord",
              url: "https://discord.com/login",
              icon: "brand-discord",
              icon_color: "#6878ab",
            },
            {
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#db5418",
            },
            {
              name: "抖音",
              url: "https://www.douyin.com",
              icon: "brand-tiktok",
              icon_color: "#7daea3",
            },
            {
              name: "小红书",
              url: "https://www.xiaohongshu.com/",
              icon: "brand-xiaohongshu",
              icon_color: "#b50e0e",
            },
          ],
        },
        {
          name: "Games",
          links: [
            {
              name: "Lichess",
              url: "https://lichess.org/",
              icon: "brand-chess",
              icon_color: "#d1d9e6",
            },
            {
              name: "Epic Games",
              url: "https://www.epicgames.com/site/en-US/home",
              icon: "brand-epicgames",
              icon_color: "#8d4fb8",
            },
            {
              name: "Monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "bmo",
              url: " https://www.bmo.com/en-ca/main/personal/",
              icon: "brand-bank",
              icon_color: "#626882",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "photos",
              url: "https://photos.google.com/u/1",
              icon: "brand-photo",
              icon_color: "#57ab5d",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Tools",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#7daea3",
            },
            {
              name: "OverAPI",
              url: "https://overapi.com/python",
              icon: "brand-openapi",
              icon_color: "#7daea3",
            },
            {
              name: "carbon",
              url: "https://carbon.now.sh/",
              icon: "brand-carbon",
              icon_color: "#7daea3",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dev.to",
              url: "https://dev.to/",
              icon: "brand-flipboard",
              icon_color: "#89b482",
            },
            {
              name: "hacker news",
              url: "https://news.ycombinator.com/",
              icon: "article",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName("head")[0].appendChild(css);
})();
