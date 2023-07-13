// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function hello(req, res) {

    let body =
        {
            name: 'John Doe',
            version: '2',

        };

    body.node_env = process.env.NODE_ENV
    try {
        body.envName = process.env.ENV_NAME
        body.payloadConfigPath = process.env.PAYLOAD_CONFIG_PATH
        body.findme = process.env.FIND_ME
        body.test = process.env.TEST
    } catch (e) {
        console.log(e)
    }
    res.status(200).json(body)
}
