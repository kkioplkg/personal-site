const links = [
  {
    name: "My Manchester",
    url: "https://my.manchester.ac.uk/",
    hint: "University portal",
    icon: "🎓",
  },
  {
    name: "Canvas",
    url: "https://canvas.manchester.ac.uk/",
    hint: "Course platform",
    icon: "📘",
  },
  {
    name: "ThetaWave",
    url: "https://thetawave.ai/app/dashboard",
    hint: "AI dashboard",
    icon: "🧠",
  },
  {
    name: "Key Dates",
    url: "https://www.manchester.ac.uk/about/key-dates/",
    hint: "University dates",
    icon: "📅",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    hint: "AI assistant",
    icon: "✦",
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    hint: "Code hub",
    icon: "🐙",
  },
  {
    name: "Gmail",
    url: "https://mail.google.com/",
    hint: "Inbox",
    icon: "✉️",
  },
  {
    name: "Google Drive",
    url: "https://drive.google.com/",
    hint: "Cloud files",
    icon: "☁️",
  },
];

const quickLinks = document.getElementById("quickLinks");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const scrollNext = document.getElementById("scrollNext");
const timeBeijing = document.getElementById("timeBeijing");
const timeGmt = document.getElementById("timeGmt");
const dateBeijing = document.getElementById("dateBeijing");
const dateGmt = document.getElementById("dateGmt");

const weekdayMap = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

function renderLinks() {
  quickLinks.innerHTML = links
    .map(
      (link) => `
        <a class="quick-link" href="${link.url}" target="_blank" rel="noreferrer">
          <div class="quick-link-icon">${link.icon}</div>
          <div class="quick-link-label">
            <strong>${link.name}</strong>
            <span>${link.hint}</span>
          </div>
        </a>
      `,
    )
    .join("");
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return "";

  const hasProtocol = /^https?:\/\//i.test(trimmed);
  const looksLikeDomain =
    /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/.test(trimmed) || trimmed.includes(".");

  if (hasProtocol) return trimmed;
  if (looksLikeDomain) return `https://${trimmed}`;

  return `https://www.google.com/search?q=${encodeURIComponent(trimmed)}`;
}

function updateTime() {
  const now = new Date();
  const formatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  timeBeijing.textContent = now.toLocaleTimeString("zh-CN", {
    ...formatOptions,
    timeZone: "Asia/Shanghai",
  });

  timeGmt.textContent = now.toLocaleTimeString("en-GB", {
    ...formatOptions,
    timeZone: "Etc/GMT",
  });

  const beijingDate = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  })
    .formatToParts(now)
    .reduce((accumulator, part) => {
      accumulator[part.type] = part.value;
      return accumulator;
    }, {});

  const gmtDate = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Etc/GMT",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  })
    .formatToParts(now)
    .reduce((accumulator, part) => {
      accumulator[part.type] = part.value;
      return accumulator;
    }, {});

  dateBeijing.textContent = `${beijingDate.year}/${beijingDate.month}/${beijingDate.day} ${beijingDate.weekday}`;
  dateGmt.textContent = `${gmtDate.year}/${gmtDate.month}/${gmtDate.day} ${gmtDate.weekday}`;
}

renderLinks();
updateTime();
setInterval(updateTime, 1000);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = normalizeUrl(searchInput.value);
  if (!target) return;
  window.open(target, "_blank", "noopener,noreferrer");
});

scrollNext.addEventListener("click", () => {
  document.getElementById("tools").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});
