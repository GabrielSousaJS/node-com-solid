import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricserviceRequest {
  userId: string
}

interface GetUserMetricserviceResponse {
  checkInsCount: number
}

export class GetUserMetricsService {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricserviceRequest): Promise<GetUserMetricserviceResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return {
      checkInsCount,
    }
  }
}
