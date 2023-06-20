// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=3daaeb888170dc51bab5e1f13f77e79db7a169291a45117b4c5aa9b47aa17fe528d1976bc806fa4fbfdc5e35a8c836f8925072d329570a2928ed59cdba71d830

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.query.secret !== process.env.MY_SECRET_TOKEN){
        return res.status(401).json({message: "Invalid token!"})
    }

    const path  = req.query.path as string

    await res.revalidate(path)

    return res.json({ revalidated: true})
}