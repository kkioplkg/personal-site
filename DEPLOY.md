# 网站上线指南

下面给你一个 **最简单、最适合新手** 的上线方案：

## 方案推荐

推荐使用 **Vercel** 部署这个静态网站：

- 免费
- 不需要自己买服务器
- 自动提供 HTTPS
- 可以直接绑定你已经购买的域名 `kkioplkk.top`

如果你不想用 Vercel，也可以换成 Netlify 或 GitHub Pages，但对新手来说 Vercel 最省事。

---

## 第一步：准备网站文件

你的网站文件已经在：

- `personal-site/index.html`
- `personal-site/styles.css`
- `personal-site/assets/`

本地预览：

```bash
cd personal-site
python3 -m http.server 8080
```

浏览器打开：

```text
http://localhost:8080
```

---

## 第二步：把网站传到 GitHub

建议先创建一个 GitHub 仓库，例如：

```text
personal-site
```

然后把 `personal-site` 文件夹里的内容上传到仓库。

如果你已经安装 Git，可以在项目根目录执行：

```bash
cd /Users/kkioplkk/project/personal-site
git init
git add .
git commit -m "init personal website"
```

然后在 GitHub 上新建仓库，再执行：

```bash
git remote add origin 你的仓库地址
git branch -M main
git push -u origin main
```

---

## 第三步：在 Vercel 部署

1. 打开 [Vercel](https://vercel.com)
2. 使用 GitHub 账号登录
3. 选择 `Add New Project`
4. 导入你的 `personal-site` 仓库
5. Framework Preset 选 `Other`
6. 直接点击 `Deploy`

因为这是静态网站，不需要额外构建配置。

部署完成后，Vercel 会给你一个临时网址，例如：

```text
personal-site-xxxx.vercel.app
```

---

## 第四步：绑定你的阿里云域名

你的域名现在在阿里云，下一步要做的是 **DNS 解析**。

你截图里左侧有：

- `DNS 管理`
- `DNS修改`
- `域名解析`

通常你需要进入 **域名解析 / DNS 解析** 页面，添加记录。

### 方式 A：根域名 `kkioplkk.top`

在 Vercel 添加域名后，它会提示你需要配置的记录。最常见是：

- 类型：`A`
- 主机记录：`@`
- 记录值：`76.76.21.21`

### 方式 B：子域名 `www.kkioplkk.top`

常见配置为：

- 类型：`CNAME`
- 主机记录：`www`
- 记录值：`cname.vercel-dns.com`

注意：**最终以 Vercel 后台给你的提示为准**。

---

## 第五步：在 Vercel 中添加自定义域名

在 Vercel 项目里：

1. 进入 `Settings`
2. 找到 `Domains`
3. 添加：
   - `kkioplkk.top`
   - `www.kkioplkk.top`
4. 按它提示去阿里云加 DNS 记录
5. 等待几分钟到几小时生效

生效后，你的网站就能通过下面地址访问：

- `https://kkioplkk.top`
- `https://www.kkioplkk.top`

---

## 第六步：SSL 证书

如果你使用 Vercel：

- HTTPS 证书通常会自动签发
- 不需要你手动购买 SSL

所以你阿里云页面上的 SSL 入口，**当前可以先不用管**。

---

## 重要提醒

### 1. 如果服务器在中国大陆

如果你以后改成部署到阿里云 ECS、轻量服务器、国内虚拟主机，通常需要：

- 网站备案（ICP备案）
- 域名实名认证完成

你现在域名实名认证已经完成了，这是好事。

### 2. 如果部署在 Vercel / Netlify / GitHub Pages

通常不需要阿里云服务器，也不需要你自己配 Nginx。

不过如果你的网站主要给中国大陆用户访问，海外平台有时速度会一般。

---

## 你接下来最推荐的顺序

1. 先修改 `index.html` 内容，换成你的真实信息
2. 上传到 GitHub
3. 用 Vercel 部署
4. 在阿里云做域名解析
5. 测试 `kkioplkk.top` 是否能打开

---

## 后续我还能继续帮你做什么

我可以继续帮你：

- 把这个主页改成更像简历网站
- 增加头像、项目卡片、社交链接
- 增加中英文双语版本
- 帮你生成 GitHub 上传命令
- 帮你做 Vercel 部署清单
- 帮你一步一步填写阿里云 DNS 记录
