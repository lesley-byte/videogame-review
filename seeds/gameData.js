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
    game_name: 'Castlevania',
    developer_id: 8,
    category_id: 5,
    date: '1987-9-17',
  },
  {
    game_name: 'Castlevania 2 Simons Quest',
    developer_id: 8,
    category_id: 5,
    date: '1989-4-19',
  },
  {
    game_name: 'Castlevania 3',
    developer_id: 8,
    category_id: 5,
    date: '1991-8-16',
  },
  {
    game_name: 'Metroid',
    developer_id: 9,
    category_id: 5,
    date: '1987-7-26',
  },
  {
    game_name: 'Zelda',
    developer_id: 9,
    category_id: 5,
    date: '1987-3-15',
  },
  {
    game_name: 'Mike Tysons Punch-Out!!',
    developer_id: 9,
    category_id: 5,
    date: '1987-8-9',
  },
  {
    game_name: 'Ninja Gaiden',
    developer_id: 22,
    category_id: 5,
    date: '1989-5-9',
  },
  {
    game_name: 'Tecmo Bowl',
    developer_id: 22,
    category_id: 5,
    date: '1989-3-5',
  },
  {
    game_name: 'Contra',
    developer_id: 8,
    category_id: 5,
    date: '1986-5-8',
  },
  {
    game_name: 'LifeForce',
    developer_id: 8,
    category_id: 5,
    date: '1987-4-2',
  },
  {
    game_name: 'MegaMan',
    developer_id: 6,
    category_id: 5,
    date: '1987-4-17',
  },
  {
    game_name: 'MegaMan 2',
    developer_id: 6,
    category_id: 5,
    date: '1988-2-15',
  },
  {
    game_name: 'NHL Hockey 94',
    developer_id: 7,
    category_id: 4,
    date: '1993-3-19',
  },
  {
    game_name: 'NHL Hockey 95',
    developer_id: 7,
    category_id: 4,
    date: '1993-3-19',
  },
  {
    game_name: 'Bayou Billy',
    developer_id: 8,
    category_id: 5,
    date: '1987-4-2',
  },




];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
