# Repository Guidelines

This is a small static site built with Zola and deployed to GitHub Pages.

## Tooling

- Use Zola 0.22.1 to match the GitHub Pages deployment workflow.
- Use `just` for common local commands when available.
- Do not commit generated output from `public/`.

## Common Commands

- `just serve` runs the local development server.
- `just serve-drafts` runs the local server including draft posts.
- `just build` builds the production site into `public/`.
- `just build-drafts` builds the site including drafts.
- `just check` validates the site with Zola without checking external links.
- `just check-links` validates the site and checks external links.
- `just clean` removes generated output.

## Content

- Posts live in `content/` as Markdown files with TOML front matter.
- Mark unpublished posts with `draft = true`.
- Prefer Zola page bundles (`content/<post-slug>/index.md`) for posts with co-located images.
- Keep draft-only images in the draft page bundle so they are not copied into production builds.

## Verification

Before handing off changes that affect content, templates, styles, config, or deployment, run:

```sh
just build
just check
```

If `just` is not installed, run the equivalent `zola build` and `zola check --skip-external-links` commands directly.

## Source Control

Use `jj` in preference to `git`.
