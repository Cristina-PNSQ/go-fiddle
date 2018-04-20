import * as fs from 'fs';
import config from '../config';
import { wrap } from 'async-middleware';

async function getCertificateHandler(req, res, next) {
  if (!fs.existsSync(config.CERTIFICATE_FILE)) {
    res.send(404, { message: 'Certificate not configured' });
    next();
    return;
  }

  res.header('Content-disposition', 'inline; filename=gofiddle-ca.pem');
  res.header('Content-type', 'application/x-pem-file');
  const stream = fs.createReadStream(config.CERTIFICATE_FILE);

  stream.on('error', (err) => {
    next(err);
  });

  stream.pipe(res);
  next();
}

export function register(server) {
  server.get('/certificate', wrap(getCertificateHandler));
}

export default {
  register,
};
