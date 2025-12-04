import { z } from 'zod'
import { serverSupabaseClient } from '#supabase/server'

const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z
    .email('Adresse e-mail invalide'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères'),
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const client = await serverSupabaseClient(event)

  const parseResult = contactSchema.safeParse(body)

  if (!parseResult.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation error',
      data: parseResult.error.flatten(),
    })
  }

  const datas = parseResult.data

  const {data, error} = await client
                                .from("Contact")
                                .insert(datas)

  if (error) {
    console.log(error);
    throw createError({
      statusCode: 400,
      statusMessage: 'Insertion Error',
      data: error,
    })
  }

  console.log('Contact message reçu:', data)

  return {
    message: 'Message reçu',
  }
})