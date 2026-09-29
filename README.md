# Humanoid Safety & Assurance

A static website for the research community and its IEEE-RAS Humanoids 2026
full-day workshop, **From Capability to Assurance: Trustworthy Humanoid Systems
in Human Environments**.

## Pages and files

| File | Purpose |
| --- | --- |
| `index.html` | Organization homepage at `/`, with prominent workshop links |
| `humanoids2026/index.html` | Main workshop page at `/humanoids2026/` |
| `assets/css/site.css` | Shared styles, responsive layouts, and print styles |
| `assets/js/site.js` | Accessible mobile menu and current-section highlighting |
| `assets/images/mark.svg` | Community mark and favicon; not an IEEE logo |
| `assets/images/assurance-figure.svg` | Original illustrative humanoid diagram |
| `.nojekyll` | Serve the static files without Jekyll processing |
| `CNAME` | Existing custom domain configuration |

There is no build step, package installation, framework, or remote asset dependency.
All page content and links remain available without JavaScript. Links and assets
use relative paths so they work on the custom domain, GitHub Pages, and under a
directory prefix.

## Local preview

From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` and `http://127.0.0.1:8000/humanoids2026/`.
Check desktop and mobile layouts, the navigation menu, in-page anchors, and the
links between the organization and workshop pages after editing.

## GitHub Pages

Publish the repository root using GitHub Pages. The workshop's `index.html`
resolves at `/humanoids2026/`. The existing `CNAME` is retained. Deployment and
repository Pages settings are managed separately from these source files.

## Organizer input still needed

The date **December 7, 2026**, location **Santa Clara, California**, and
**full-day** format are provided workshop details. All unconfirmed participation
information is visibly marked “To be announced” or “forthcoming.”

Update `humanoids2026/index.html` when these details are confirmed:

- **Submission information** (`#submission`): portal URL, paper format and page
  limits, review process, and publication/presentation arrangements. Add an actual
  submission link only once a confirmed URL is available.
- **Important dates** (`#important-dates`): submission deadline, acceptance
  notification, camera-ready deadline (or remove that milestone if inapplicable),
  and deadline time zones.
- **Invited speakers** (`#speakers`): confirmed names, affiliations, and talk
  details. No speaker identities or number of speakers have been assumed.
- **Organizers** (`#organizers`): confirmed names, affiliations, and profile links.
- **Contact** (`#contact`): confirmed organizer email address. Add a `mailto:` link
  only once the address is known.

The motivation, central question, topic descriptions, and call-for-papers prose
are editorial drafts for organizer review. No submission rules, publication
commitments, or review policies have been assumed.
