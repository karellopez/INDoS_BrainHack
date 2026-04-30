# INDoS BrainHack Landing Page - Project Context

Use this file as the starting context if work on the website continues later.

## Project Purpose

This repository contains a static landing page for INDoS BrainHack workshop proposals around two software tools:

- **BIDS Manager**: interactive raw-to-BIDS curation for MRI, MEG, and EEG workflows.
- **MEEGqc / MEGqc**: reproducible MEG/EEG quality assessment and quality-control reporting.

The page is intended to be hosted as a public URL and shared with the BrainHack organizers so they can attach it to their website.

Current page order:

1. Hero with tool GUI/MRI/topomap background images and a foreground workflow SVG animation.
2. Detailed June 12 workshop programme.
3. Reproducibility workflow.
4. BIDS Manager software section.
5. MEEGqc software section.
6. Software/documentation links.

Organizer context from Felix:

- INDoS and EEG101 should be listed separately on the BrainHack website because they happen in parallel.
- Traintrack submissions should include duration, target audience, and tags.
- The opening ceremony is June 11, 9:00-9:30, with concise 3-5 minute workshop advertisements.
- Hackproject pitches are June 11, 13:00-14:40, with 5-7 minute project pitches.
- Traintracks are best submitted 4-6 weeks before the event.

Current INDoS schedule shown on this page:

- **June 12, Deeper Traintrack:** BIDS Manager raw-to-BIDS curation, 1.5 hours.
- **June 12 afternoon, practical workshop:** MEEGqc reproducible MEG/EEG QA/QC, duration to be confirmed.
- **Optional fallback format:** 45-minute fast-track BIDS Manager session if the programme needs a shorter slot.

## Repository

Website repository:

```text
/Users/karelo/PycharmProjects/megqcpython14/INDoS_BrainHack
```

Main files:

```text
index.html      Main landing page content
styles.css      Visual design, layout, responsive styles, animation
script.js       Scroll reveal animation
README.md       Short repository overview
TESTING.md      Local testing and GitHub Pages instructions
PROJECT_INIT.md This project context file
assets/         Copied website images and GIFs
```

The site is dependency-free. It does not need Node, npm, or a build step.

## Testing Locally

From the website repo:

```bash
cd /Users/karelo/PycharmProjects/megqcpython14/INDoS_BrainHack
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Source Programme Text

The workshop programme copy should be synthesized from:

```text
/Users/karelo/PycharmProjects/megqcpython14/Workshop_Descriptions.md
/Users/karelo/PycharmProjects/megqcpython14/Workshop_Descriptions_v2.md
/Users/karelo/PycharmProjects/megqcpython14/Workshop_Descriptions_v3.md
```

Version 3 contains the strongest positioning and should be treated as the primary source. Versions 1 and 2 are useful for fallback phrasing and shorter descriptions.

Current sessions on the page:

- `Multimodal raw-to-BIDS curation with BIDS Manager: concepts, workflow, and practice`
- `Reproducible MEG/EEG quality control with MEEGqc`
- `Fast-track multimodal BIDS curation with BIDS Manager` as an optional fallback format only.

## Related Repositories

BrainHack reference landing page:

```text
/Users/karelo/PycharmProjects/megqcpython14/hackathon2026
```

BIDS Manager software:

```text
/Users/karelo/PycharmProjects/megqcpython14/BIDS-Manager
https://github.com/ANCPLabOldenburg/BIDS-Manager
```

MEGqc software:

```text
/Users/karelo/PycharmProjects/megqcpython14/MEGqc
https://github.com/ANCPLabOldenburg/MEGqc
```

## Documentation Sources And Visual Assets

BIDS Manager documentation repo:

```text
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation
https://ancplaboldenburg.github.io/bids_manager_documentation/
```

Useful asset folders:

```text
bids_manager_documentation/static/converter/
bids_manager_documentation/static/editor_gifs/
bids_manager_documentation/static/3d/
```

Current copied BIDS Manager assets:

```text
assets/bids-manager/software-logo.png
assets/bids-manager/gui-visual.png
assets/bids-manager/intro-3d.gif
assets/bids-manager/scanned-metadata.png
assets/bids-manager/filter-general.png
assets/bids-manager/filter-specific.png
assets/bids-manager/preview-tree.png
assets/bids-manager/editor-graph.png
assets/bids-manager/editor-json.png
assets/bids-manager/editor-metadata.png
assets/bids-manager/slices.gif
assets/bids-manager/logo.png
```

These were copied from the user-provided source paths:

```text
/Users/karelo/PycharmProjects/megqcpython14/BIDS-Manager/bids_manager/miscellaneous/images/Logo.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/converter/1_visual.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/3d/01_intro_2.gif
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/converter/3_scanned_metadata.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/converter/4_filter.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/converter/4_filter_specific.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/converter/5_preview_treee.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/editor/02_graph.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/editor/02_json.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/editor/02_metadata.png
/Users/karelo/PycharmProjects/megqcpython14/bids_manager_documentation/static/editor_gifs/2_slices.gif
```

MEGqc documentation repo:

```text
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation
https://ancplaboldenburg.github.io/megqc_documentation/
```

Useful asset folders:

```text
megqc_documentation/static/00_overview/
megqc_documentation/static/qa_subject/
megqc_documentation/static/qa_group/
megqc_documentation/static/gqi/
```

Current copied MEEGqc assets:

```text
assets/meegqc/software-logo.png
assets/meegqc/gui-main-dark.png
assets/meegqc/gui-main-light.png
assets/meegqc/report-tabs.gif
assets/meegqc/group-summary.gif
assets/meegqc/std-rotate.gif
assets/meegqc/std-cap.gif
assets/meegqc/psd-welch.gif
assets/meegqc/psd-topomap.gif
assets/meegqc/eog-topomap.gif
assets/meegqc/ecg-highest.gif
assets/meegqc/logo.png
```

`assets/meegqc/gqi-summary.png` may still exist locally from an earlier version, but it should not be displayed on the page.
The user asked to remove the GQI image and use only one topomap GIF for MEEGqc feature display.

These were copied from the user-provided source paths:

```text
/Users/karelo/PycharmProjects/megqcpython14/MEGqc/meg_qc/miscellaneous/GUI/logo.png
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/gui/gui_main_dark.png
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/gui/gui_main_light.png
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/qa_subject/ecg/4_ecg_highest.gif
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/qa_subject/psd/2_welch.gif
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/qa_subject/psd/4_topomap.gif
/Users/karelo/PycharmProjects/megqcpython14/megqc_documentation/static/qa_subject/std/2_cap_on.gif
```

INDoS logo source:

```text
/Users/karelo/PycharmProjects/megqcpython14/indos-costaction.github.io/assets/images/logo/
```

Current copied INDoS asset:

```text
assets/indos-logo-white.png
```

## Design Notes

- The page uses a dark BrainHack-inspired visual style.
- The hero includes overlapping software screenshots/GIFs from real tool GUIs, MRI/slice animations, and one MEEGqc topomap animation.
- The animation is a foreground workflow SVG above the title, representing `Raw data -> BIDS curation -> QA metrics -> Reports`.
- The workflow animation uses inline SVG `<animate>` and `<animateMotion>` elements because the earlier CSS-only neural-network style was unclear and not reliably visible.
- Text was intentionally reduced from earlier versions because the original hero and section headings were too large.
- The programme must remain first after the hero. Tool-selling sections come after the detailed programme.
- Keep typography restrained: avoid hero-scale text inside cards or compact sections.
- Avoid heavy dependencies unless there is a strong reason; the current static site is easy to host with GitHub Pages.

## Important Public Links On The Page

```text
https://github.com/ANCPLabOldenburg/BIDS-Manager
https://ancplaboldenburg.github.io/bids_manager_documentation/
https://github.com/ANCPLabOldenburg/MEGqc
https://ancplaboldenburg.github.io/megqc_documentation/
```

## Publishing

The simplest publishing route is GitHub Pages:

1. Push this repository to GitHub.
2. Open repository `Settings`.
3. Open `Pages`.
4. Select `Deploy from a branch`.
5. Select `main` and root `/`.
6. Use the generated public URL for the BrainHack website.
