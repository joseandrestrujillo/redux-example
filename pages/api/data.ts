// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  speakers: Array<string>,
  schedule: Array<string>,
  partners: Array<string>
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  setTimeout(()=>{
    res.status(200).json({
      speakers: ['Buenosvinos', 'Rafa', 'Bolonio'],
      schedule: ['Como desplegar en AWS', 'Computacion Cuantica'],
      partners: ['Microsoft', 'Genially', 'Amazon']
    })
  }, 1000);

  
}
