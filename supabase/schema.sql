-- Only For Minhyuk Bakery — core schema (Phase 3)
-- Run in the Supabase SQL editor for a fresh project.

create extension if not exists pgcrypto;

create sequence if not exists cakes_public_number_seq start 1;

create table if not exists cakes (
  id uuid primary key default gen_random_uuid(),
  public_id text not null unique,
  public_number integer not null default nextval('cakes_public_number_seq'),
  nickname text not null check (char_length(nickname) between 1 and 20),
  country text,
  letter text not null check (char_length(letter) between 1 and 500),
  cake_data jsonb not null,
  final_image_url text,
  view_count integer not null default 0,
  created_at timestamptz not null default now(),
  status text not null default 'published' check (status in ('published', 'hidden', 'removed'))
);

create index if not exists cakes_created_at_idx on cakes (created_at desc);
create index if not exists cakes_view_count_idx on cakes (view_count desc);
create index if not exists cakes_public_id_idx on cakes (public_id);

-- Per-viewer view dedup (Phase 6 hardening). A view is only counted once per
-- visitor per cake within the window enforced by the API route.
create table if not exists cake_views (
  cake_id uuid not null references cakes (id) on delete cascade,
  visitor_hash text not null,
  viewed_at timestamptz not null default now(),
  primary key (cake_id, visitor_hash)
);

alter table cakes enable row level security;
alter table cake_views enable row level security;

-- Public (anon key) may only READ published cakes. All writes (insert,
-- moderation update/delete, view-count increments) go through the
-- server-side API using the service-role key, which bypasses RLS — so no
-- insert/update/delete policies are defined here for the anon role.
create policy "public can read published cakes"
  on cakes for select
  using (status = 'published');

-- cake_views has no public policies at all: only the service-role key
-- (server-side) ever touches it.
