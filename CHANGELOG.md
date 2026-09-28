# Changelog

## 1.0.1 (2026-09-28)

- Standardize package documentation, preserve the API reference and upstream attribution, and add Stackline community links.
- Add focused npm discovery keywords and consistent repository metadata.
- Keep runtime behavior and dependency versions unchanged.
- Correct the pinned artifact-upload action commit while preserving the publish.yml workflow and Prod environment.

## 1.0.0

- Correct CommonJS declarations using export =, with exported namespace types and numeric codepage indexing (upstream issue #23).
- Return an owned Buffer from cached UTF-8 encoding. The released shared-buffer slice could be overwritten by subsequent encode/decode calls; the algorithms and non-Buffer output formats are retained.
- Keep every published converter table and browser bundle; replace obsolete development tooling with node:test and a pinned current TypeScript compiler.

Initial scoped release based on upstream codepage@1.15.0. See UPSTREAM.json for exact source identity.
