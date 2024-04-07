import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { CheckInService } from '../check-in'

export function makeCheckInService() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const gyms = new PrismaGymsRepository()
  const service = new CheckInService(checkInsRepository, gyms)
  return service
}
