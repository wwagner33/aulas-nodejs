const app = require('../app');

const server = app.listen(3030, () => {
  console.log(`App is running on port ${server.address().port}`);
});