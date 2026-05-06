---
name: page-update-skill
description: Page update skill for the Uni-Share website. Use when changing pages, assets, Figma implementations, or branch-scoped updates in this repository.
---

# Page Update Skill

## Project Context

- Work in the nested repository:
  `/Users/percy/Local/260416 Unishare Website/uni-share`
- Always verify the active branch before editing:
  `git branch --show-current`
- Current observed branch when this note was updated:
  `5/6-new-changes`
- Earlier draft work happened on `4/25-draft`; do not assume that branch is active.
- Changes on a draft branch do not affect `main` unless they are later merged, rebased, cherry-picked, or included in a PR.
- Before editing, check:
  `git status -sb`
- After editing, confirm the diff scope:
  `git diff -- <files>`

## Update Modes

Always identify which mode the user wants before making broad changes.

### Asset-Only

Use this when the user wants to replace photos, logos, or other media without changing layout.

Rules:
- Copy or replace only the relevant files under `public/`.
- Do not edit CSS, page components, shared layout, responsive rules, header, or footer.
- After copying, run `git status -sb` and confirm only asset files changed.
- Run `npm run lint` if code files were touched. If only assets changed, lint is optional unless requested.

Recommended user wording:

```text
Asset-only update.
Page: /collection
Source assets: /Users/percy/Local/260416 Unishare Website/new images
Do not change code, CSS, layout, spacing, header, footer, or responsive behavior.
After copying, confirm only asset files changed.
```

### Layout-Only

Use this when the user wants spacing, sizing, responsive behavior, or visual arrangement changed without replacing assets.

Rules:
- Keep edits scoped to the page and CSS selectors involved.
- Do not touch shared page shell rules unless the user explicitly approves.
- Check the page in the browser after editing.
- Run `npm run lint`.
- Run `npm run build` for larger layout changes.

Recommended user wording:

```text
Layout-only update.
Page: /collection
Change: desktop image grid spacing
Do not replace assets.
Do not touch other pages.
Verify in browser and run lint.
```

### Full Figma Implementation

Use this when the user wants a Figma node translated into production code.

Rules:
- Inspect the existing page and styling patterns before editing.
- Fetch both Figma design context and a Figma screenshot for the exact node before implementation.
- Create a block inventory before editing code:
  - node id and Figma block name
  - role: header, text, image, news, footer, navigation, etc.
  - dimensions, padding, margins, typography, and asset requirements
  - matching project component or CSS pattern, if one exists
- Classify every major block as one of:
  reuse existing component, extend existing component, create reusable component, or one-off page section.
- Use the Figma node only as design context; convert it to the project stack and existing CSS conventions.
- Confirm whether the implementation should affect desktop only, mobile only, or both.
- Desktop implementation should match the Figma frame measurements as closely as possible: typography, spacing, margins, section heights, image dimensions, and placement.
- Mobile support must be completed even when the supplied Figma node is desktop-only; use responsive adaptations that preserve hierarchy and avoid overflow.
- Prefer reusable components for repeated blocks. Ask before changing shared layout rules used by multiple pages unless the user explicitly asks to apply the change across all pages.
- Prefer existing component patterns. If a block appears on multiple pages or is likely to recur, create or extend a reusable component instead of writing page-specific markup/CSS.
- Keep shared blocks centralized: header, footer, news block, repeated image blocks, repeated text blocks, and repeated text+logo blocks should not drift page by page.
- When the user provides local assets, duplicate/copy them into the appropriate `public/site-assets/<page-or-shared>/` folder and use the duplicate in code. Do not reference source files outside the app.
- Run `npm run lint`.
- Run `npm run build` when code or layout changes are meaningful.
- Validate with the browser after implementation. For full-page work, capture/check at least desktop and mobile views when practical.

Recommended user wording:

```text
Full Figma implementation.
Figma node: <url>
Page: /collection
Target: desktop 1440px
Allowed files: app/collection/page.tsx, app/globals.css, public assets
Do not touch: mobile, header, footer, other pages
Ask before changing shared CSS.
```

#### Reusable Block Targets

Use these project block patterns when a Figma section matches them:

- `SiteHeader`: shared navigation/header from `components/site-shell.tsx`.
- `NewsBlock`: shared news section from `components/site-shell.tsx`; keep its spacing and typography consistent across pages.
- `SiteFooter`: shared footer from `components/site-shell.tsx`.
- Centered image section: one image centered in a measured section with Figma width, height, padding, and aspect ratio.
- Large JP text section: Japanese copy block using the Figma font family, size, weight, line-height, width, and padding.
- Text + logo section: measured text block paired with Uni-Share logo placement; make reusable if it appears beyond one page.

When adding a new block pattern, first check whether it belongs in `components/site-shell.tsx` or should stay page-local. Shared visual blocks should move into components once they appear on two pages.

#### Figma Measurement Table

For meaningful Figma work, make a concise table in the working notes before editing. Include:

```text
Block | Node | Role | Size | Padding/Margin | Typography | Asset | Code target
```

Use that table to drive implementation and final verification. If a Figma context response is incomplete, fetch child nodes or use a screenshot to confirm the missing measurements before guessing.

## Current Session Notes

- The collection page should keep the branch’s existing layout unless the user explicitly requests layout work.
- For `/collection`, the accepted update mode from this session was photo replacement only.
- Collection photo assets live in:
  `public/site-assets/collection/*.png`
- The source folder used for the new collection photos was:
  `/Users/percy/Local/260416 Unishare Website/new images`
- The higher-resolution logo asset available for global logo usage is:
  `/brand/unishare-logo-nav.png`
- Logo references may appear in:
  - `components/site-shell.tsx`
  - `app/page.tsx`
  - `app/about/page.tsx`
  - `app/stocklist/page.tsx`

## Efficiency Rules

- If a request says “just update photos,” treat it as asset-only.
- If the request mentions Figma, do not assume full implementation; clarify whether the user wants assets, layout, or both if the wording is ambiguous.
- For full Figma implementation, do the block inventory first so reusable sections are identified before writing CSS.
- Reuse or extend shared blocks before creating page-specific CSS.
- Avoid copying the same Figma spacing values into multiple page selectors; centralize them in reusable component classes when the block recurs.
- Before changing CSS, name the affected selectors and scope.
- After reverting code changes, verify with:
  `git diff -- app/collection/page.tsx app/globals.css`
- A clean code revert means that command returns no diff.
- Keep browser screenshots targeted: one before for diagnosis and one after for verification is usually enough.

## Verification Checklist

For asset-only:
- `git status -sb`
- Confirm changed files are only expected assets.

For code or CSS:
- `npm run lint`
- Browser check of the affected page.
- For Figma page implementation, compare the Figma screenshot against local desktop layout and check a mobile viewport for overflow/stacking.

For significant Next.js changes:
- `npm run build`
- If the sandbox blocks Google Font fetches, rerun the build with the needed network permission.
