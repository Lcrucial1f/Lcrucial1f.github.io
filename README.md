# Lcrucial1f.github.io

个人主页与 MPS-CLIP 项目网站，通过 GitHub Pages 从 `main` 分支根目录发布。

- `/`：个人主页。内容为 `index.html`，样式为 `style.css`，交互为 `script.js`。
- `/MPS-CLIP/`：MPS-CLIP 项目主页，编辑 `MPS-CLIP/index.html`。
- 项目图片和 `paper.pdf` 保留在根目录，项目页使用 `../` 引用，原资源链接仍然有效。

## 更新网站

在 VS Code 打开此仓库，修改后提交并推送到 `main`。GitHub Pages 自动发布。

```bash
git pull --ff-only
# 编辑并检查网页
git add index.html style.css script.js MPS-CLIP/index.html
git commit -m "Update website"
git push origin main
```

自定义域名为 https://lcrucial1f.com/ ，MPS-CLIP 项目路径为 https://lcrucial1f.com/MPS-CLIP/ 。GitHub Pages 会将 https://lcrucial1f.github.io/ 重定向至自定义域名，保留项目路径。

## 域名配置

GitHub Pages 的 Custom domain 设置为 `lcrucial1f.com`，与根目录 `CNAME` 文件一致。

DNSPod 记录（TTL 均为 600 秒）：

| 主机记录 | 类型 | 记录值 |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| www | CNAME | lcrucial1f.github.io. |

DNSPod 免费版同一主机同一线路最多支持两条 A 记录，当前采用 GitHub Pages 的两个地址。GitHub 域名健康检查已确认此解析配置有效。

需要回退到原服务器时，可将 `@` 改为单条 A 记录 `81.70.166.54`，将 `www` 改为同地址的 A 记录；先确认原服务器上的内容与 HTTPS 证书仍然可用。

原服务器网站目录：`/var/www/lcrucial1f/`。迁移验证完成前保留服务器上的文件。
