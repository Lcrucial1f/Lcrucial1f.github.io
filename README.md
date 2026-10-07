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

默认域名为 https://lcrucial1f.github.io/ 。绑定自定义域名后，GitHub Pages 会将默认域名重定向至自定义域名，保留项目路径。

原服务器网站目录：`/var/www/lcrucial1f/`。迁移验证完成前保留服务器上的文件。
