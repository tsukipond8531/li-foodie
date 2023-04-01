import type { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import * as fs from 'fs'

type file = {
    id: string, offer: string, rate: string, imgName: string, imgUrl: string, category: string, type: string, name: string, des: string, tag1: string, tag2: string
}

type Data = file[]

const allowedOrigins:string[]  = [ 'http://localhost:3000', 'https://lifoodie-dev.web.app'];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    let dir: string[] = await fs.promises.readdir('./public/json')

    let Data:file[] = []
    let currFile:string;
      
    for (let index = 0; index < dir.length; index++) {
      const curr:string = dir[index]  
        
      currFile = await fs.promises.readFile(('./public/json/' + curr), 'utf-8')
      Data.push(JSON.parse(currFile))
    }
  
    // await NextCors(req, res, {
    //     methods: ['GET'],
    //     origin: '*',
    //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    // });
  
    
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins);
    
  
    res.status(200).json(Data)
}
