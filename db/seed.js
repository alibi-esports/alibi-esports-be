// Strictly for development env
const { db } = require('./');
const { Player, Team } = require('./');

const players = [
  // {
  //   firstName: 'TestFname',
  //   lastName: 'TestLname',
  //   ign: 'TestIGN#TEST',
  //   isCaptain: true,
  //   rank: 'TestRank',
  //   discord: 'TestDiscord#TEST',
  //   teamName: 'Testers',
  // },
];

const teams = [
  // {
  //   name: 'Testers',
  // },
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
