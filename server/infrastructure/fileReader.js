import fs from 'fs';

export async function readFileToBuffer(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, null, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(Buffer.from(data));
    });
  });
}
