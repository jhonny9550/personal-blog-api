import { Router } from 'express';
const router = Router();

/* Avoiding favicon.ico request */
router.get('/favicon.ico', (req, res) => res.status(204));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).end('Express working!');
});

export default router;
