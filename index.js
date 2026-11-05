const http = require('http');
const leftPad = require('left-pad');
const tinyconf = require('tinyconf');

// defaults < config.json < APP_* environment variables (e.g. APP_PORT=8080)
const config = tinyconf.load({ defaults: { port: 3000, service: 'status-api' } });

const started = Date.now();

function status() {
  const uptime = Math.floor((Date.now() - started) / 1000);
  return { service: config.service, ok: true, uptime: leftPad(String(uptime), 6, '0') };
}

if (require.main === module) {
  http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(status()));
  }).listen(config.port, () => console.log(`${config.service} on :${config.port}`));
}

module.exports = { status };
