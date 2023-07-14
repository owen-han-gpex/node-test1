// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

import {query} from "../../lib/db";

export default async function hello(req, res) {

    let body =
        {
            name: 'John Doe',
            version: '7',
            lastModified: '2023-07-14 16:55:00 kst'

        };
    let dbResult = await dbTest();

    body.node_env = process.env.NODE_ENV
    try {
        body.envName = process.env.ENV_NAME
        body.payloadConfigPath = process.env.PAYLOAD_CONFIG_PATH
        body.findme = process.env.FIND_ME
        body.test = process.env.TEST
        body.dbResult = dbResult
    } catch (e) {
        e.status
    }
    res.status(200).json(body)
}


export async function dbTest() {
    try {
        const result = await query({
            query: 'select * from network',
        });
        return result;
    } catch (error) {
        error.status
    }
}