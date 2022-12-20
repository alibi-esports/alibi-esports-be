// Strictly for development env
const { db } = require('./');
const { Player, Team } = require('./');

const players = [
  {
    firstName: 'Ryan',
    lastName: 'Won',
    ign: 'handyice#XSET',
    isCaptain: true,
    rank: 'Radiant 2',
    email: 'iamsogood@gmail.com',
    discord: 'rwon#2503',
    teamName: 'Founders',
  },
  {
    firstName: 'Justin',
    lastName: 'Suhhh',
    ign: 'choob#12345',
    isCaptain: false,
    rank: 'Iron 4',
    email: 'ryanissobad@gmail.com',
    discord: 'jsuh#2503',
    teamName: 'Founders',
  },
  {
    firstName: 'Gloria',
    lastName: 'Choi',
    ign: 'chominnnn#CARRY',
    isCaptain: false,
    rank: 'Immortal 3',
    email: 'carry@gmail.com',
    discord: 'gchoi#2503',
    teamName: 'Founders',
  },
];

const teams = [
  {
    name: 'Founders',
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(teams.map((team) => Team.create(team)));
    await Promise.all(players.map((player) => Player.create(player)));
  } catch (err) {
    console.error(err);
  }
};

async function runSeed() {
  try {
    await seed();
    console.log('Seeding success!');
  } catch (err) {
    console.error('Something went wrong!');
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}