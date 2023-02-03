// this is for the video game table
const { Game } = require('../models');

const gameData = [
  {
    game_name: 'Grand Theft Auto V',
    developer_id: 1,
    category_id: 1,
    date: '2013-09-17',
  },
  {
    game_name: 'Red Dead Redemption 2',
    developer_id: 1,
    category_id: 1,
    date: '2018-10-26',
  },
  {
    game_name: 'Red Dead Redemption',
    developer_id: 1,
    category_id: 1,
    date: '2010-05-18',
  },
  {
    game_name: 'Grand Theft Auto IV',
    developer_id: 1,
    category_id: 1,
    date: '2008-04-29',
  },
  {
    game_name: 'Grand Theft Auto: San Andreas',
    developer_id: 1,
    category_id: 1,
    date: '2004-10-26',
  },
  {
    game_name: 'Grand Theft Auto: Vice City',
    developer_id: 1,
    category_id: 1,
    date: '2002-10-27',
  },
  {
    game_name: 'Grand Theft Auto III',
    developer_id: 1,
    category_id: 1,
    date: '2001-10-22',
  },
  {
    game_name: 'Grand Theft Auto: London 1969',
    developer_id: 1,
    category_id: 1,
    date: '1999-10-31',
  },
  {
    game_name: 'Grand Theft Auto 2',
    developer_id: 1,
    category_id: 1,
    date: '1999-10-31',
  },
  {
    game_name: 'Grand Theft Auto',
    developer_id: 1,
    category_id: 1,
    date: '1997-10-22',
  },
  {
    game_name: 'The Elder Scrolls V: Skyrim',
    developer_id: 2,
    category_id: 1,
    date: '2011-11-11',
  },
  {
    game_name: 'The Elder Scrolls IV: Oblivion',
    developer_id: 2,
    category_id: 1,
    date: '2006-03-20',
  },
  {
    game_name: 'The Elder Scrolls III: Morrowind',
    developer_id: 2,
    category_id: 1,
    date: '2002-05-01',
  },
  {
    game_name: 'The Elder Scrolls II: Daggerfall',
    developer_id: 2,
    category_id: 1,
    date: '1996-03-02',
  },
  {
    game_name: 'The Elder Scrolls: Arena',
    developer_id: 2,
    category_id: 1,
    date: '1994-11-25',
  },
  {
    game_name: 'The Elder Scrolls: Redguard',
    developer_id: 2,
    category_id: 1,
    date: '1998-11-30',
  },
  {
    game_name: 'The Elder Scrolls: Battlespire',
    developer_id: 2,
    category_id: 1,
    date: '1998-11-30',
  },
  {
    game_name: 'The Elder Scrolls: Morrowind',
    developer_id: 2,
    category_id: 1,
    date: '2002-05-01',
  },
  {
    game_name: 'Super Mario Odyssey',
    developer_id: 2,
    category_id: 1,
    date: '2017-10-27',
  },
  {
    game_name: 'Legend of Zelda: Breath of the Wild',
    developer_id: 2,
    category_id: 1,
    date: '2017-3-3',
  },
  {
    game_name: 'Halo 2',
    developer_id: 2,
    category_id: 1,
    date: '2004-11-9',
  }, 
  {
    game_name: 'Lethal League Blaze',
    developer_id: 2,
    category_id: 1,
    date: '2018-10-24',
  },
  {
    game_name: 'Super Smash Bros. Ultimate',
    developer_id: 2,
    category_id: 1,
    date: '2018-12-07',
  },
  {
    game_name: 'Pokemon Ruby and Sapphire',
    developer_id: 2,
    category_id: 1,
    date: '2002-11-21',
  }
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
