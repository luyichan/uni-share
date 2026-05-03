# Uni Share Website

This is a [Next.js](https://nextjs.org) project for the Uni Share website.

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Useful checks:

```bash
npm run build
```

## Update Page Workflow

Use this workflow when updating a page from Figma, a screenshot, or a written change request.

1. Update or confirm the source design in Figma.
2. Give Codex one exact target page or section to update.
3. Implement the code change locally.
4. Run the build check.
5. Deploy a Vercel preview.
6. Review the preview URL.
7. Deploy to production only after the preview looks right.

Recommended prompt:

```text
Update page: /about

Source of truth:
[Figma frame link or screenshot]

Change needed:
- Replace hero layout
- Update heading to "..."
- Use image X
- Keep existing footer/nav

Constraints:
- Do not change other pages
- Keep current responsive behavior
- Preview deploy only
```

For the fastest, lowest-token update request:

```text
Update /about from this Figma frame: [link].
Only change hero + first section.
Keep nav/footer.
Run build and deploy preview.
```

Token-saving rules:

- Send one page or section at a time.
- Link the exact Figma frame when possible, not the whole file.
- Say what should stay unchanged.
- Send exact text as written text, not only inside screenshots.
- Use screenshots for layout and visual direction.
- Clearly say `preview only` or `production deploy`.
- Reuse existing components unless a redesign is requested.

## Commit Workflow

Use this workflow after a focused code change has been reviewed locally.

1. Check the working tree:

```bash
git status -sb
```

2. Review the exact files being committed:

```bash
git diff -- path/to/file
```

3. Stage only the files that belong to the change:

```bash
git add path/to/file another/file
```

4. Commit with a short, specific message:

```bash
git commit -m "Refine about story layout"
```

5. Confirm no unrelated files were included:

```bash
git status -sb
```

Commit rules:

- Keep each commit focused on one page, section, or fix.
- Do not include unrelated local edits in the same commit.
- Run `npm run lint` before committing small CSS or copy changes.
- Run `npm run build` before committing layout, routing, data, or deployment-related changes.
- Use present-tense messages, such as `Update about page copy` or `Fix collection image sizing`.

## Vercel Deployment

The Vercel CLI is installed as a project dev dependency, so use it with `npx`.

Check the logged-in Vercel account:

```bash
npx vercel whoami
```

Create a preview deployment:

```bash
npx vercel
```

Deploy to production:

```bash
npx vercel --prod
```

Current production URL:

```text
https://uni-share-eta.vercel.app
```

Current linked Vercel project:

```text
percys-projects-76162fc8/uni-share
```

The normal GitHub/Vercel flow is:

```text
Figma change
-> targeted code update on a branch
-> npm run build
-> npx vercel preview
-> review preview URL
-> commit and push to GitHub
-> pull request or merge to main
-> production deploy
```

If Vercel is connected to GitHub, pushes and pull requests can create preview deployments automatically, and merges to the production branch can deploy production automatically.

## Learn More

To learn more about Next.js and Vercel:

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
