# Project Guide

## Architecture

This is a TanStack Start React application deployed on Netlify. File-based routes live in `src/routes`; `__root.tsx` owns document metadata and the index route contains the Arabic storefront. Global visual styling is in `src/styles.css`.

## Key directories

- `src/routes/`: page routes and document shell
- `src/components/`: shared React components from the ecommerce foundation
- `src/data/`: product detail data
- `public/`: static assets

## Conventions

- The customer-facing interface is Arabic and uses RTL direction.
- Keep colors and typography in the CSS tokens at the top of `src/styles.css`.
- Use Lucide icons rather than emoji or inline icon artwork.
- Preserve responsive layouts and accessible labels when adding interactions.
- Keep product prices in Iraqi dinars and customer copy natural to an Iraqi audience.

## Design decisions

The visual language uses deep ink blue, warm amber, cream surfaces, asymmetric shapes, and editorial Arabic typography. The landing-page catalog is client-side and demonstrates search, category filters, cart feedback, and empty states. The existing Stripe-backed product detail route remains available for future checkout expansion.
