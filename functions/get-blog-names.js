const fs = require('fs');

exports.handler = async (event, context) => {
  const path = 'blogs/';
  const files = fs.readdirSync(path);
  const fileNames = files.filter(file => file.endsWith('.html')).map(file => file.replace('.html', ''));
  return {
    statusCode: 200,
    body: JSON.stringify({ fileNames }),
  };
};
