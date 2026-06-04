import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Movie) {
    await db.Movie.bulkCreate([
      { id: 1, title: 'Eredet', director: 'Christopher Nolan', release: 2010 },
      { id: 2, title: 'Ponyvaregény', director: 'Quentin Tarantino', release: 1994 },
      { id: 3, title: 'Gladiátor', director: 'Ridley Scott', release: 2000 },
      { id: 4, title: 'A keresztapa', director: 'Francis F. Coppola', release: 1972 }
    ]);
  }else {
    await QueryInterface.bulkInsert('movies', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('movies');
}

export { up, down }
