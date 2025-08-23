
-- -----------------------
-- FACTIONS
-- -----------------------
CREATE TABLE factions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  link TEXT
);

-- -----------------------
-- SOURCE
-- -----------------------
CREATE TABLE source (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT,
  edition TEXT,
  version TEXT,
  errata_date TEXT,
  errata_link TEXT
);

-- -----------------------
-- DATASHEETS
-- -----------------------
CREATE TABLE datasheets (
  id TEXT PRIMARY KEY,
  name TEXT,
  faction_id TEXT REFERENCES factions(id),
  source_id TEXT REFERENCES source(id),
  legend TEXT,
  role TEXT,
  loadout TEXT,
  transport TEXT,
  virtual BOOLEAN,
  leader_head TEXT,
  leader_footer TEXT,
  damaged_w TEXT,
  damaged_description TEXT,
  link TEXT
);

-- -----------------------
-- DATASHEETS_ABILITIES
-- -----------------------
CREATE TABLE datasheets_abilities (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  ability_id TEXT,
  model TEXT,
  name TEXT,
  description TEXT,
  type TEXT,
  parameter TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_KEYWORDS
-- -----------------------
CREATE TABLE datasheets_keywords (
  datasheet_id TEXT REFERENCES datasheets(id),
  keyword TEXT,
  model TEXT,
  is_faction_keyword BOOLEAN
);

-- -----------------------
-- DATASHEETS_MODELS
-- -----------------------
CREATE TABLE datasheets_models (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  name TEXT,
  M TEXT,
  T TEXT,
  Sv TEXT,
  inv_sv TEXT,
  inv_sv_descr TEXT,
  W TEXT,
  Ld TEXT,
  OC TEXT,
  base_size TEXT,
  base_size_descr TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_OPTIONS
-- -----------------------
CREATE TABLE datasheets_options (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  button TEXT,
  description TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_WARGEAR
-- -----------------------
CREATE TABLE datasheets_wargear (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  line_in_wargear TEXT,
  dice TEXT,
  name TEXT,
  description TEXT,
  range TEXT,
  type TEXT,
  A TEXT,
  BS_WS TEXT,
  S TEXT,
  AP TEXT,
  D TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_UNIT_COMPOSITION
-- -----------------------
CREATE TABLE datasheets_unit_composition (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  description TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_MODELS_COST
-- -----------------------
CREATE TABLE datasheets_models_cost (
  datasheet_id TEXT REFERENCES datasheets(id),
  line INTEGER,
  description TEXT,
  cost TEXT,
  PRIMARY KEY (datasheet_id, line)
);

-- -----------------------
-- DATASHEETS_STRATAGEMS
-- -----------------------
CREATE TABLE datasheets_stratagems (
  datasheet_id TEXT REFERENCES datasheets(id),
  stratagem_id TEXT
);

-- -----------------------
-- DATASHEETS_ENHANCEMENTS
-- -----------------------
CREATE TABLE datasheets_enhancements (
  datasheet_id TEXT REFERENCES datasheets(id),
  enhancement_id TEXT
);

-- -----------------------
-- DATASHEETS_DETACHMENT_ABILITIES
-- -----------------------
CREATE TABLE datasheets_detachment_abilities (
  datasheet_id TEXT REFERENCES datasheets(id),
  detachment_ability_id TEXT
);

-- -----------------------
-- DATASHEETS_LEADER
-- -----------------------
CREATE TABLE datasheets_leader (
  datasheet_id TEXT REFERENCES datasheets(id),
  attached_datasheet_id TEXT REFERENCES datasheets(id)
);

-- -----------------------
-- STRATAGEMS
-- -----------------------
CREATE TABLE stratagems (
  id TEXT PRIMARY KEY,
  faction_id TEXT REFERENCES factions(id),
  name TEXT,
  type TEXT,
  cp_cost TEXT,
  legend TEXT,
  turn TEXT,
  phase TEXT,
  description TEXT,
  detachment TEXT
);

-- -----------------------
-- ABILITIES
-- -----------------------
CREATE TABLE abilities (
  id TEXT PRIMARY KEY,
  name TEXT,
  legend TEXT,
  faction_id TEXT REFERENCES factions(id),
  description TEXT
);

-- -----------------------
-- ENHANCEMENTS
-- -----------------------
CREATE TABLE enhancements (
  id TEXT PRIMARY KEY,
  faction_id TEXT REFERENCES factions(id),
  name TEXT,
  legend TEXT,
  description TEXT,
  cost TEXT,
  detachment TEXT
);

-- -----------------------
-- DETACHMENT ABILITIES
-- -----------------------
CREATE TABLE detachment_abilities (
  id TEXT PRIMARY KEY,
  faction_id TEXT REFERENCES factions(id),
  name TEXT,
  legend TEXT,
  description TEXT,
  detachment TEXT
);

