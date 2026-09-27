
const button = document.querySelector(".menu");
const nav = document.querySelector("#mobile-nav");
if (button && nav) {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.textContent = open ? "菜单" : "关闭";
    nav.hidden = open;
    document.body.style.overflow = open ? "" : "hidden";
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.textContent = "菜单";
      document.body.style.overflow = "";
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !nav.hidden) button.click();
  });
}
const form = document.querySelector("#brief");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const org = String(data.get("org") || "").trim();
    const email = String(data.get("email") || "").trim();
    const need = String(data.get("need") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = `委托 · ${need} · ${org || name}`;
    const body = [`称呼：${name}`, `机构：${org || "（未填）"}`, `回邮：${email}`, `事项：${need}`, "", message].join("\n");
    const href = `mailto:hello@sevenmintcreative.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const note = document.querySelector("#form-note");
    if (note) {
      note.innerHTML = `如果邮件没有自动打开，<a href="${href}">点这里继续</a>。内容还停在这台设备上，没有另存到服务器。`;
    }
    window.location.href = href;
  });
}
