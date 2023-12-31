export const elements = {
  barHealth: document.querySelector("#bar-health"),
  logInn: document.getElementById("logg-inn"),
  gameify: document.getElementById("game"),
  startGame: document.getElementById("start-game"),
  inventory: document.querySelector("#menu-card"),
  attack: document.querySelector("#attack"),
  escape: document.querySelector("#run"),
  healed: document.querySelector("#heal"),
  goForward: document.querySelector("#forth"),
  act: document.querySelector("#actions"),
  invBtn: document.querySelector("#inv-btn"),
  closeBtn: document.querySelector("#close-btn"),
  statLevel: document.querySelector("#statlvl"),
  statInv: document.querySelector("#stats-el"),
  bossFight: document.querySelector("#boss-fight"),
  goblinFight: document.querySelector("#boss-fight2"),
  nameEr: document.querySelector("#nameify"),
  gender: document.querySelector("#gender-el"),
  goldPage: document.querySelector("#gold-el"),
  experience: document.querySelector("#xp-el"),
  takeDamage: document.querySelector("#health-bar"),
  enemyBar: document.querySelector("#enemy-bar"),
  enemyPlace: document.querySelector("#enemy-img"),
  instantKill: document.querySelector("#instant-kill"),
  godMode: document.querySelector("#godmode"),
};

export const enemies = {
  frankStats: {
    name: "Frank",
    damage: 5,
    health: 50,
    maxHealth: 50,
    gold: 5,
    xp: 5,
    img: "./images/Frank.png",
  },
  bossEmil: {
    name: "Emil",
    health: 1000,
    maxHealth: 1000,
    damage: 500,
    gold: 1000,
    xp: 1000,
    img: "./images/EmilBossTaunt.png",
  },
  randO: {
    name: "Joe",
    damage: 10,
    health: 100,
    maxHealth: 100,
    gold: 10,
    xp: 10,
    img: "./images/Joe.webp",
  },
  gobelin: {
    name: "Goblin",
    damage: 100,
    health: 250,
    maxHealth: 250,
    gold: 50,
    xp: 20,
    img: "./images/japaneseGoblin.png",
  },
};
