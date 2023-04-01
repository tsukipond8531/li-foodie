import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import * as fs from 'fs'

type file = {
    id: string, offer: string, rate: string, imgName: string, imgUrl: string, category: string, type: string, name: string, des: string, tag1: string, tag2: string
}

type Data = file[]

const allowedOrigins:string[]  = [ 'http://localhost:3000', 'https://lifoodie-dev.web.app'];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    let dir: string[] = await fs.promises.readdir('json')

    let Data:file[] = []
    let currFile:string;
      
    for (let index = 0; index < dir.length; index++) {
      const curr:string = dir[index]  
        
      currFile = await fs.promises.readFile(('json/' + curr), 'utf-8')
      Data.push(JSON.parse(currFile))
    }
  
    // const origin = req.headers.origin;
    // console.log(origin)
    await NextCors(req, res, {
        methods: ['GET'],
        origin: allowedOrigins,
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });
  
    // if (allowedOrigins.includes(origin)) {
    //      res.setHeader('Access-Control-Allow-Origin', origin);
    // }
  
    res.status(200).json(Data)
}
