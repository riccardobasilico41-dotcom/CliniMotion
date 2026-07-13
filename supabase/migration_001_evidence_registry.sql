-- Migrazione: aggiunge formula_version, status a district_tests
-- e crea evidence_sources (nuova tabella)
-- Eseguire nel SQL Editor Supabase — sicuro anche se già eseguito una volta

alter table district_tests add column if not exists formula_version int not null default 1;
alter table district_tests add column if not exists status text not null default 'experimental';

create table if not exists evidence_sources (
  id uuid primary key default gen_random_uuid(),
  citazione text not null,
  identificatore text,
  distretto text,
  popolazione text,
  outcome text,
  limiti text,
  status text not null default 'draft',
  created_at timestamptz default now()
);

alter table evidence_sources enable row level security;

drop policy if exists "utenti autenticati leggono/scrivono fonti" on evidence_sources;
create policy "utenti autenticati leggono/scrivono fonti"
  on evidence_sources for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
