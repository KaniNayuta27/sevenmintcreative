# 七锦敏团 · Seven Mint Creative

上海七锦敏团广告有限公司官网第一版。静态页面，预备域名 `sevenmintcreative.com`。

## 页面

当前整站在 `/temp1` 下。站点根路径会 301 到 `/temp1/`。

- `/temp1/` 首页
- `/temp1/work/` 方向样本
- `/temp1/services/` 服务与营业范围
- `/temp1/about/` 关于与标志
- `/temp1/contact/` 联络

作品页是方向样本，不是已交付客户案例。电话和门牌这一版故意留空。

## 放到 Cloudflare Pages

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/) → Workers & Pages → Create → Pages → Connect to Git。
2. 选择仓库 `KaniNayuta27/sevenmintcreative`。
3. 项目名称填 `sevenmintcreative`（这样预览地址是 `https://sevenmintcreative.pages.dev`）。
4. 构建设置：Framework preset 选 **None**，Build command **留空**，Build output directory 填 **`/`**。
5. 保存并部署。

自定义域以后在该项目的 Custom domains 里绑定 `sevenmintcreative.com`，并把域名 DNS 交到 Cloudflare。绑好之后，如需分享卡片指向正式域名，把各页 `og:url` 里的 `sevenmintcreative.pages.dev` 换成正式域名即可。

这一版不需要构建命令，也不需要环境变量。
