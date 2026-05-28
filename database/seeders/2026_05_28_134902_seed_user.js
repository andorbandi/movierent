import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.User) {
    await db.User.bulkCreate([
      { name: 'peter', email: 'mari@gmail.com', password: '$2a$10$wEOSIcuQUREWfe4jUpcwF.yVzvwBoEtAvV7A2tQ7JFA0CYiCh5t3e', roleId: '0' }
    ]);
  }else {
    await QueryInterface.bulkInsert('users', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('users');
}

export { up, down }
