export type PrismaUnit = {
  hp: number,
  data: UnitData,
  equips?: Equip[],
  skills: Skill[],
  auras: { [name in string]: any },
  on?: Triggers
}
export type UnitData = {
  vitality: number,
  name: string,
  element?: Element,
  skills?: Skill[],
  auras?: { [name in string]: any },
  on?: Triggers
}
export type Summon = UnitData & {
  duration: number
}
export type Aura = {
  duration: number
  on?: Triggers
}
export type Skill = {
  type: "normal" | "elemental" | "burst"
  desc?: string
  cooldown?: number
  hits?: {
    dice: number[],
    element?: Element
  }[],
  summon?: Summon,
  aura?: Aura,
  heal?: {
    target: string,
    value?: number,
    $value?: (k: Kombat) => number
  }
}
export type Equip = {
  desc?: string,
  name?: string,
  skills?: Skill[],
  on?: Triggers
}
export const elements = ["炎", "水", "氷", "電", "風", "岩", "草"] as const
export type Element = typeof elements[number];

const triggers = ["start", "atk", "hit", "defeated", "roll", "equip"] as const
type Trigger = typeof triggers[number];
export type Triggers = { [t in Trigger]?: any }

export const pieces = ["生の花", "死の羽", "時の砂", "空の杯", "理の冠"]
export type ArtifactPiece = typeof pieces[number];

export type Artifact = Equip & {
  slots: number,
  piece: ArtifactPiece,
  set: string,
  // flavor: string
}

export type Kombat = {
  team: PrismaUnit[],
  enemies: PrismaUnit[],
  summons: PrismaUnit[],
  cur: number,
  log: string,

  char: PrismaUnit
}

// type Attack = { damage: number, rolls: { roll:number, die:number }[] }