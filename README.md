# Yifan Li — Academic Homepage

An English academic homepage based on [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), published with GitHub Pages.

- Website: https://lcrucial1f.com/
- MPS-CLIP project: https://lcrucial1f.com/MPS-CLIP/

## Editing

- `_pages/about.md`: introduction, publications, honors and awards, education.
- `_config.yml`: name, affiliation, email, GitHub and site settings.
- `_data/navigation.yml`: navigation links.
- `images/profile.jpg`: profile image.
- `assets/css/main.scss`: homepage styling.
- `MPS-CLIP/index.html`: existing project page. Its assets remain in the repository root.

Commit and push changes to `main`. GitHub Pages builds Jekyll from the repository root. Do not add `.nojekyll` or a second root `index.html`.

For a local preview with a compatible Ruby environment:

```sh
bundle install
bundle exec jekyll serve
```

## Domain configuration

`CNAME` must remain `lcrucial1f.com`. HTTPS is managed by GitHub Pages.

DNSPod records (TTL: 600 seconds):

| Host | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| www | CNAME | lcrucial1f.github.io. |

The DNSPod free plan allows two A records on this line. This configuration passed GitHub's domain health check.

The previous server copy is retained at `/var/www/lcrucial1f/` on `81.70.166.54`. For a server rollback, first verify its content and TLS certificate, then point the apex and www records back to that server.

## Attribution

AcadHomepage is distributed under the MIT license; see `LICENSE`.
