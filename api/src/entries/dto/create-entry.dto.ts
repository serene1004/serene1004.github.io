import { Transform } from 'class-transformer'
import { IsString, MaxLength, MinLength } from 'class-validator'

const trimText = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value

export class CreateEntryDto {
  @Transform(trimText)
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  author!: string

  @Transform(trimText)
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  message!: string
}

