import { Injectable } from '@nestjs/common'
import type { GuestbookEntry } from '../../generated/prisma/index.js'
import { PrismaService } from '../prisma/prisma.service'
import { CreateEntryDto } from './dto/create-entry.dto'

@Injectable()
export class EntriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(limit?: number) {
    const entries = await this.prisma.guestbookEntry.findMany({
      where: {
        isVisible: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: this.resolveListLimit(limit)
    })

    return entries.map((entry: GuestbookEntry) => this.toResponse(entry))
  }

  async create(dto: CreateEntryDto) {
    const entry = await this.prisma.guestbookEntry.create({
      data: {
        author: dto.author.trim(),
        message: dto.message.trim()
      }
    })

    return this.toResponse(entry)
  }

  private resolveListLimit(limit?: number) {
    const configuredLimit = Number(process.env.ENTRY_LIST_LIMIT ?? 20)
    const maxLimit =
      Number.isFinite(configuredLimit) && configuredLimit > 0 ? configuredLimit : 20

    if (!limit || limit < 1) {
      return maxLimit
    }

    return Math.min(limit, maxLimit)
  }

  private toResponse(entry: GuestbookEntry) {
    return {
      id: entry.id,
      author: entry.author,
      message: entry.message,
      createdAt: entry.createdAt.toISOString()
    }
  }
}
