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
      g: ["https://www.google.com/search?q=", "Google"],
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
              name: "spotify",
              url: "https://www.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#1a782c",
            },
            {
              name: "chatGPT",
              url: "https://chat.openai.com/",
              icon: "brand-chatgpt",
              icon_color: "#a9b665",
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
          name: "Finances",
          links: [
            {
              name: "nslsc",
              url: "https://www.csnpe-nslsc.canada.ca/en/home",
              icon: "brand-nslsc",
              icon_color: "#b91c1c",
            },
            {
              name: "osap",
              url: "https://www.ontario.ca/page/osap-ontario-student-assistance-program",
              icon: "brand-osap",
              icon_color: "#007749",
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
            {
              name: "Instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: "#C13584",
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
              name: "Gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "Wealthsimple",
              url: "https://www.wealthsimple.com/en-ca",
              icon: "brand-wealthsimple",
              icon_color: "#r89b482",
            },
            {
              name: "BMO",
              url: " https://www.bmo.com/en-ca/main/personal/",
              icon: "brand-bank",
              icon_color: "#0047AB",
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
        {
          name: "stuff",
          links: [
            {
              name: "ici-radio",
              url: "https://ici.radio-canada.ca/",
              icon: "brand-cbc",
              icon_color: "#c41714",
            },
            {
              name: "mlh",
              url: "https://mlh.io/seasons/2025/events",
              icon: "brand-mlh",
              icon_color: "#r89b482",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.ca/",
              icon: "brand-pinterest",
              icon_color: "#c41714",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "Resources",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#d1d9e6",
            },
            {
              name: "tailwind",
              url: "https://tailwindcss.com/",
              icon: "brand-tailwind",
              icon_color: "#38bdf8",
            },
            {
              name: "figma",
              url: "https://www.figma.com/",
              icon: "brand-figma",
              icon_color: "#a259ff",
            },
            // {
            //   name: "OverAPI",
            //   url: "https://overapi.com/python",
            //   icon: "brand-openapi",
            //   icon_color: "#7daea3",
            // },
            // {
            //   name: "carbon",
            //   url: "https://carbon.now.sh/",
            //   icon: "brand-carbon",
            //   icon_color: "#7daea3",
            // },
          ],
        },
        {
          name: "Tools",
          links: [
            {
              name: "leetCode",
              url: "https://leetcode.com/",
              icon: "brand-leetcode",
              icon_color: "#cc8a10",
            },
            {
              name: "neetcode",
              url: "https://neetcode.io/practice",
              icon: "brand-neetcode",
              icon_color: "#00d1b2",
            },
            {
              name: "bytebytego",
              url: "https://blog.bytebytego.com/?utm_source=site",
              icon: "brand-bytebytego",
              icon_color: "#0284c7",
            },
          ],
        },
        {
          name: "Career",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#0077b5",
            },
            {
              name: "jobright",
              url: "https://jobright.ai/jobs/recommend",
              icon: "brand-jobright",
              icon_color: "#a3e635",
            },
            {
              name: "ripplematch",
              url: "https://app.ripplematch.com/v2/login",
              icon: "brand-ripplematch",
              icon_color: "#6a1b9a",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);

(function () {
  var css = document.createElement("link");
  css.href = "src/css/tabler-icons.min.css";
  css.rel = "stylesheet";
  css.type = "text/css";
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName("head")[0].appendChild(css);
})();
