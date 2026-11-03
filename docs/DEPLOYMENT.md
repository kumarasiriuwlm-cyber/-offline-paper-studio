# Deployment

GitHub Pages was enabled by the repository owner and is operational. The workflow in `.github/workflows/pages.yml` runs Node tests, uploads the static app and deploys Pages on each main-branch push. There is no API, account server, external runtime dependency or Windows/Android build in this release.

Live entry: https://kumarasiriuwlm-cyber.github.io/-offline-paper-studio/?v=0.4.1

Runtime modules and the stylesheet use a release query identifier, and the service worker precaches all matching paths. An existing cached tab may need to be closed/reopened to activate the new release. Data remains in the same IndexedDB database.
