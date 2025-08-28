import axios from 'axios';
import executionLog from '../models/executionLog.js';

export const executeRequest = async (req, res) => {
  const { url, method, body, headers } = req.body;
  const startTime = Date.now();

  try {
    const response = await axios({ url, method, data: body, headers });
    const responseTime = Date.now() - startTime;

    await executionLog.create({
      type: 'http',
      input: { url, method, headers, body },
      output: response.data,
      status: 'success',
      responseTime
    });

    res.json({ data: response.data, responseTime });
  } catch (err) {
    const responseTime = Date.now() - startTime;

    await executionLog.create({
      type: 'http',
      input: { url, method, headers, body },
      output: { error: err.message },
      status: 'error',
      responseTime
    });

    res.status(500).json({ error: err.message, responseTime });
  }
};
