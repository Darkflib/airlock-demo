const http = require('http');
const leftPad = require('left-pad');
const c = require('colorful-logs');

const started = Date.now();

function status() {
  const uptime = Math.floor((Date.now() - started) / 1000);
  return { service: 'status-api', ok: true, uptime: leftPad(String(uptime), 6, '0') };
}

if (require.main === module) {
  const port = process.env.PORT || 3000;
  http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(status()));
  }).listen(port, () => console.log(c.green(`status-api on :${port}`)));
}

module.exports = { status };
