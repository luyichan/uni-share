# Next Agent Context

## Workspace

- Repository: `/Users/percy/Local/260416 Unishare Website/uni-share`
- Current observed branch: `Animation-test`
- Current app URL in browser: `http://localhost:3000/`
- Current worktree status when this file was created: clean

## Project Workflow

- Read `AGENTS.md` first, then `SKILL.md`.
- `SKILL.md` is the project-local page update workflow. Use it for page changes, asset copying, Figma implementations, and verification.
- For Figma implementation, follow the block inventory workflow:
  - fetch Figma design context and screenshot
  - identify reusable blocks before editing
  - map shared sections to `SiteHeader`, `NewsBlock`, and `SiteFooter`
  - duplicate local image assets into `public/site-assets/<page>/`
  - finish mobile support
  - run lint/build and browser verification when practical

## Recent Design Work

- The `5/6-new-changes` work was merged before this context file was created.
- Recent merged commits include:
  - `d5d590c home &skill.md`
  - `bf2cd2c updated about page`
  - `a345289 new stocklist`
  - `d8388db collection page update`
- Header/footer responsive typography was adjusted before the merge:
  - tablet uses desktop-like typography: `16px / 38px`, weight `500`, letter spacing `0`
  - mobile uses compact typography: `12px / 24px`, weight `400`, letter spacing `0.32px`

## Important Files

- Shared shell components: `components/site-shell.tsx`
- Global layout and responsive rules: `app/globals.css`
- Homepage: `app/page.tsx`
- About page: `app/about/page.tsx`
- Collection page: `app/collection/page.tsx`
- Stocklist page: `app/stocklist/page.tsx`
- Project workflow: `SKILL.md`

## Asset Conventions

- Use app-served assets from `public/site-assets/...` in code.
- If the user provides files from `/Users/percy/Local/260416 Unishare Website/new images`, duplicate them into the matching `public/site-assets/<page>/` folder before referencing them.
- Some source duplicates also exist under `assets/<Page>/`; keep current project conventions unless the user asks otherwise.

## Verification

- For CSS/code changes, run:
  - `npm run lint`
  - `npm run build` for meaningful layout or Next.js changes
- For local visual checks, use the in-app browser when available.
- If browser automation is unavailable, state that clearly and use lint/build plus code inspection.
