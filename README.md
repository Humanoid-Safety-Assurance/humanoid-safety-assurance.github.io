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
| `assets/js/site.js` | Accessible mobile menu and scroll-position navigation highlighting |
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
links between the organization and workshop pages after editing. At approximately
390 × 844 pixels, the workshop title, conference, date, location, CFP/demo status,
and paper/demo links should fit in the first viewport. The workshop illustration
is hidden on narrow screens to prioritize this information.

Check direct links to `#overview`, `#topics`, `#call-for-papers`, `#important-dates`,
`#submission`, `#call-for-demos`, `#speakers`, `#organizers`, and `#contact`. During
manual scrolling, navigation follows the top reading position and selects the
last section at the page's end. Direct links highlight the requested section,
including targets near the footer. The nested Paper Submission and Call for Demos
sections map to CFP & Demos; Dates has its own link.

## GitHub Pages

Publish the repository root using GitHub Pages. The workshop's `index.html`
resolves at `/humanoids2026/`. The existing `CNAME` is retained. Deployment and
repository Pages settings are managed separately from these source files.

## Call for Papers requirements

The paper submission requirements and dates come from the organizer-provided CFP text:

- **Short / Position Papers:** up to 4 pages.
- **Research Papers:** up to 6 pages.
- **Format:** IEEE standard double-column conference format; one additional page
  exclusively for references. Appendices are not considered part of the review
  submission.
- **Presentation:** accepted submissions will be presented as posters; selected
  contributions will additionally be invited for short spotlight presentations.
- **Paper submissions open:** October 2, 2026.
- **Submission deadline:** October 25, 2026, 23:59 AoE.
- **Acceptance notification:** November 2, 2026.

**Non-archival is a proposed policy awaiting Workshop Chairs confirmation.**
Do not announce it as confirmed. The workshop page retains “To be announced” for
the publication policy.

## Call for Demos

The workshop also welcomes demos addressing humanoid safety and assurance, either
in simulation or using physical robots, as requested by the organizer. The paper
page limits, IEEE format, poster/spotlight arrangements, and paper dates above
have not been assigned to demos.

Demo submission materials, portal, dates, selection process, and presentation
arrangements still need organizer confirmation, including whether an accompanying
paper is required. Confirm space, equipment, and on-site arrangements before
publishing physical robot demo logistics.

## Organizers and photos

The five organizer cards use the names, roles, and affiliations in the
**List of Organizers** section of the supplied `Humanoids2026 Workshop proposal.pdf`.
Display order follows the organizer's requested ordering in the HTML. Cards show
the name, role, affiliation, and photo or placeholder. Email is listed only in the
Contact section, using the address supplied for Zijun Sha. The PDF's
“Toyota Motor North American” spelling is normalized to
[Toyota Motor North America](https://pressroom.toyota.com/toyota-motor-north-america-announces-executive-changes-15/),
the official company name. No personal profile links have been added.

Chuchu Chen and Zijun Sha have local copies of the portraits identified by name on
the [IROS 2026 workshop Speakers & Team page](https://chuchuchen.net/robotworker-26/speakers/),
retrieved on September 30, 2026. The original image files are preserved; CSS fits
them into the shared 4:5 portrait frames.

| Local image | Original source |
| --- | --- |
| `assets/images/organizers/chuchu-chen.jpg` | [Chuchu Chen portrait](https://chuchuchen.net/images/workshop/chuchu-chen.jpg) |
| `assets/images/organizers/zijun-sha.jpg` | [Zijun Sha portrait](https://chuchuchen.net/images/workshop/zijun-sha.jpg) |

Georgios Fainekos, Hideki Okamoto, and Abhijeet Kulkarni retain clearly labeled
photo placeholders. When their portraits are available, add the files under
`assets/images/organizers/` and replace each person's
placeholder `<div class="organizer-photo">…</div>` with an image, for example:

```html
<img class="organizer-photo" src="../assets/images/organizers/zijun-sha.jpg"
     width="240" height="300" alt="Zijun Sha" loading="lazy">
```

Keep the `organizer-photo` class and a 4:5 portrait crop. The layout uses a row of
five cards on wide screens, three columns on tablets, and one column with photos
beside the details on phones. Keep remaining placeholders as HTML until actual
photos are supplied, to avoid broken image URLs. Update the Contact section if
the workshop email address changes.

## Organizer input still needed

The date **December 7, 2026**, location **Santa Clara, California**, and
**full-day** format are provided workshop details. All unconfirmed participation
information is visibly marked “To be announced” or “forthcoming.”

Update `humanoids2026/index.html` when these details are confirmed:

- **Submission information** (`#submission`): portal URL, review process, and
  publication policy (including the proposed non-archival status above).
  Add an actual submission link only once a confirmed URL is available.
- **Demos** (`#call-for-demos`, `#important-dates`): submission portal, required
  materials, paper requirement if any, submission/notification dates, selection
  process, presentation format, and logistics for simulation and physical robots.
- **Invited speakers** (`#speakers`): confirmed names, affiliations, and talk
  details. No speaker identities or number of speakers have been assumed.
- **Organizers** (`#organizers`): portraits for Georgios Fainekos, Hideki Okamoto,
  and Abhijeet Kulkarni, plus optional personal profile links.
  The names, roles, and affiliations are populated from the proposal; the workshop
  email is provided separately in the Contact section.

The two central questions and the cross-layer safety perspective follow the
provided workshop brief. The supporting motivation, topic descriptions, and CFP
prose remain available for organizer review. No publication commitments or review
policies have been assumed.

## Editing without a build system

Keep workshop-specific participation details in `humanoids2026/index.html`.
Update the hero CFP status when the submission process is confirmed. The homepage
links to the workshop rather than duplicating its submission requirements.

The workshop date appears in the hero and Important Dates for readers' convenience;
the title, date, and location also appear in the homepage event card and page
metadata. Update those together if confirmed event details change. These values
remain static HTML so the site does not depend on JavaScript to display its content.
