import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import executionLog from '../models/executionLog.js';

const TEMP_DIR = path.join(process.cwd(), 'express_temp');

// Ensure base temp folder exists
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

export const runExpressCode = async (req, res) => {
  const { code } = req.body;
  const startTime = Date.now();
  const userId = Date.now(); // unique per submission
  const userDir = path.join(TEMP_DIR, `${userId}`);

  try {
    // Create user folder
    fs.mkdirSync(userDir, { recursive: true });

    // 1️⃣ Write user's Express code
    const indexPath = path.join(userDir, 'index.js');
    fs.writeFileSync(indexPath, code);
    console.log('index.js created at:', indexPath);

    // 2️⃣ Minimal package.json
    const packagePath = path.join(userDir, 'package.json');
    fs.writeFileSync(
      packagePath,
      JSON.stringify({
        name: 'user-app',
        version: '1.0.0',
        dependencies: { express: "^4.18.2" }
      }, null, 2)
    );
    console.log('package.json created at:', packagePath);

    // 3️⃣ Dynamic Dockerfile
    const dockerfilePath = path.join(userDir, 'Dockerfile');
    fs.writeFileSync(
      dockerfilePath,
      `
FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
      `
    );
    console.log('Dockerfile created at:', dockerfilePath);

    // 4️⃣ Assign dynamic port
    const port = 3100 + (userId % 1000);

    // 5️⃣ Build and run Docker container
    const dockerCmd = `
      docker build -t user-app-${userId} ${userDir} &&
      docker run -d -p ${port}:3000 --rm user-app-${userId}
    `;

    exec(dockerCmd, (err, stdout, stderr) => {
      const responseTime = Date.now() - startTime;

      if (err) {
        console.error('Docker error:', stderr);

        executionLog.create({
          type: 'express',
          input: { code },
          output: { error: stderr },
          status: 'error',
          responseTime
        });

        return res.status(500).json({ error: stderr, responseTime });
      }

      console.log('Docker container started, ID:', stdout.trim());

      executionLog.create({
        type: 'express',
        input: { code },
        output: { containerId: stdout.trim(), port },
        status: 'success',
        responseTime
      });

      res.json({
        message: 'Express API running!',
        port,
        containerId: stdout.trim(),
        responseTime
      });
    });

  } catch (err) {
    console.error('Error in runExpressCode:', err);
    res.status(500).json({ error: err.message });
  }
};
