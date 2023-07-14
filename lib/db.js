import mysql from 'mysql2/promise';

export async function query({query, values = [] }) {
    let config = {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD
    }

    const dbconnection = await mysql.createConnection(config)
    console.log('db connection success')
    try {
        const [results] = await dbconnection.execute(query, values);
        dbconnection.end()
        return results;
    } catch (error) {
        error.stack
        throw Error(error.message);
        return { error };
    }
}

