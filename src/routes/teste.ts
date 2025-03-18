import { Router } from 'express';
import pool from '../config/database';

const router = Router();

router.get('/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS current_time');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao conectar ao banco de dados' });
  }
});

export default router;