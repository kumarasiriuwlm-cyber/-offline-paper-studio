# Deployment checkpoint

Source is committed to `main`; automated tests run before deployment. Initial workflow run 41457819501 passed tests but failed configuring Pages because the repository has not enabled Pages and GITHUB_TOKEN lacks administration permission to create the site.

One repository setting is required: **Settings → Pages → Build and deployment → Source → GitHub Actions**. Then rerun the existing workflow from Actions. No code, terminal or Windows computer is needed. The connected GitHub tools cannot change this administration setting. The available browser session is signed out, so it cannot make that change on the owner's behalf without sign-in.

Do not consider PWA installation or airplane-mode behavior verified until the HTTPS deployment is running. The HTTP preview cannot register service workers because it is not a secure context. The app itself has no network dependencies. The Pages workflow will publish the repository root; private teacher data and commercial banks must never be committed.
