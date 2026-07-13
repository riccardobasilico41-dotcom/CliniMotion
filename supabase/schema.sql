-- CliniMotion v2 — Schema Supabase Fase 1
-- Eseguire nel SQL Editor del progetto Supabase

create table if not exists patients (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  data_nascita date,
  created_at timestamptz default now()
);

create table if not exists assessment_sessions (
  id uuid primary key default gen_random_uuid(),
  patient_id uuid references patients(id) on delete cascade,
  terapista_id uuid references auth.users(id),
  data timestamptz default now(),
  note text
);

create table if not exists district_tests (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references assessment_sessions(id) on delete cascade,
  distretto text not null, -- 'cervicale', 'spalla', ...
  movimento text not null, -- 'rotazione_dx', 'rotazione_sx', ...
  rom_gradi numeric,
  asimmetria_percent numeric,
  confidence_score numeric, -- 0-1
  formula_version int not null default 1, -- traccia quale versione formula ha prodotto il dato
  status text not null default 'experimental', -- 'experimental' | 'clinical' (vedi VALIDATION_PLAN)
  landmark_data jsonb, -- solo se serve rianalisi, mai video
  video_url text, -- null di default, popolato solo con opt-in esplicito
  created_at timestamptz default now()
);

-- Evidence Registry "light": traccia le fonti citate per soglie/norme,
-- senza il workflow di approvazione multi-step della versione completa.
-- Usare quando si aggiungono soglie normative comparative in futuro.
create table if not exists evidence_sources (
  id uuid primary key default gen_random_uuid(),
  citazione text not null,
  identificatore text, -- DOI, PMID o URL
  distretto text,
  popolazione text,
  outcome text,
  limiti text,
  status text not null default 'draft', -- 'draft' | 'reviewed' | 'active' | 'retired'
  created_at timestamptz default now()
);

create table if not exists interpretations (
  id uuid primary key default gen_random_uuid(),
  test_id uuid references district_tests(id) on delete cascade,
  testo_ai text,
  fonte_normativa text,
  disclaimer text default 'Dato da correlare con valutazione clinica diretta. Non costituisce diagnosi.',
  created_at timestamptz default now()
);

-- Row Level Security: ogni terapista vede solo le proprie sessioni
alter table patients enable row level security;

drop policy if exists "utenti autenticati gestiscono pazienti" on patients;
create policy "utenti autenticati gestiscono pazienti"
  on patients for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

alter table evidence_sources enable row level security;

drop policy if exists "utenti autenticati leggono/scrivono fonti" on evidence_sources;
create policy "utenti autenticati leggono/scrivono fonti"
  on evidence_sources for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

alter table assessment_sessions enable row level security;
alter table district_tests enable row level security;
alter table interpretations enable row level security;

create policy "terapista vede proprie sessioni"
  on assessment_sessions for select
  using (auth.uid() = terapista_id);

create policy "terapista crea proprie sessioni"
  on assessment_sessions for insert
  with check (auth.uid() = terapista_id);

create policy "terapista vede test delle proprie sessioni"
  on district_tests for select
  using (
    session_id in (
      select id from assessment_sessions where terapista_id = auth.uid()
    )
  );

create policy "terapista inserisce test nelle proprie sessioni"
  on district_tests for insert
  with check (
    session_id in (
      select id from assessment_sessions where terapista_id = auth.uid()
    )
  );

create policy "terapista vede interpretazioni proprie"
  on interpretations for select
  using (
    test_id in (
      select dt.id from district_tests dt
      join assessment_sessions s on s.id = dt.session_id
      where s.terapista_id = auth.uid()
    )
  );
