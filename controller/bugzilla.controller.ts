import { Response, Request } from 'express'
import { logger } from '../shared/logger'
// import BugzillaBugService from '../services/bugzilla.service'
import TrudeskTicketService from '../services/trudesk.service'

// const BugService = new BugzillaBugService();
const TrudeskService = new TrudeskTicketService();

class BugsController {
  async createBug(req: Request, res: Response) {
    const data = await TrudeskService.createBug(req, res)
     logger.info('POST Trudesk Endpoint hit with: ' + req.body)
    return data
  }

  async getAllBug(req: Request, res: Response) {
    const data = await TrudeskService.getBug(req, res)

    logger.info('POST Trudesk Endpoint hit with: ' + req.body)
    return data
  }

  async updateBug(req: Request, res: Response) {
    const data = await TrudeskService.updateBug(req, res)
    logger.info('Put Trudesk Endpoint hit with: ' + JSON.stringify(req.body))
    return data
  }
}

export default BugsController
