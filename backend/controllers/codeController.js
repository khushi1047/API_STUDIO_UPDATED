import ivm from 'isolated-vm';
import executionLog from '../models/executionLog.js';

export const executeCode = async (req, res) => {
  const { code } = req.body;
  const startTime = Date.now();

  try {
    const isolate = new ivm.Isolate({ memoryLimit: 128 });
    const context = await isolate.createContext();
    const jail = context.global;
    await jail.set('global', jail.derefInto());

    const script = await isolate.compileScript(code);
    const result = await script.run(context);

    const responseTime = Date.now() - startTime;

    await executionLog.create({
      type: 'code',
      input: { code },
      output: { result },
      status: 'success',
      responseTime
    });

    res.json({ result, responseTime });
  } catch (err) {
    const responseTime = Date.now() - startTime;

    await executionLog.create({
      type: 'code',
      input: { code },
      output: { error: err.message },
      status: 'error',
      responseTime
    });

    res.status(500).json({ error: err.message, responseTime });
  }
};
