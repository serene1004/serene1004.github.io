import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { CreateEntryDto } from './dto/create-entry.dto'
import { QueryEntriesDto } from './dto/query-entries.dto'
import { EntriesService } from './entries.service'

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Get()
  findAll(@Query() query: QueryEntriesDto) {
    return this.entriesService.findAll(query.limit)
  }

  @Post()
  create(@Body() dto: CreateEntryDto) {
    return this.entriesService.create(dto)
  }
}
