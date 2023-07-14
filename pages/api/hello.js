// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

import {query} from "../../lib/db";

export default async function hello(req, res) {

    let body =
        {
            name: 'John Doe',
            version: '8',
            lastModified: '2023-07-14 18:30:00 kst'

        };
    let dbResult = await dbTest();

    body.node_env = process.env.NODE_ENV
    try {
        body.envName = process.env.ENV_NAME
        body.payloadConfigPath = process.env.PAYLOAD_CONFIG_PATH
        body.findme = process.env.FIND_ME
        body.test = process.env.TEST
        body.MYSQL_HOST = process.env.MYSQL_HOST
        body.MYSQL_DATABASE = process.env.MYSQL_DATABASE
        body.MYSQL_USER = process.env.MYSQL_USER
        body.dbResult = dbResult
    } catch (e) {
        e.status
    }
    res.status(200).json(body)
}


export async function dbTest() {
    try {
        const result = await query({
            query: `select 'success' as 'connection status'`,
        });
        return result;
    } catch (error) {
        error.status
    }
}