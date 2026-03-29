import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { loadEnvFile } from 'node:process'
import 'reflect-metadata'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const envFileName = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local'
const envFilePath = resolve(process.cwd(), envFileName)

if (existsSync(envFilePath)) {
  loadEnvFile(envFilePath)
}

const parseCorsOrigin = (value?: string) => {
  if (!value || value.trim() === '*' || value.trim() === '') {
    return true
  }

  return value
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )
  app.enableCors({
    origin: parseCorsOrigin(process.env.CORS_ORIGIN)
  })

  const port = Number(process.env.PORT ?? 4000)
  await app.listen(port)

  console.log(`Guestbook API running on http://localhost:${port}/api`)
}

bootstrap()
