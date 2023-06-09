import dotenv from 'dotenv'
dotenv.config()

export const sqlConfig = {
    user: process.env.USER as string,
    password: process.env.PASSWORD as string,
    server: process.env.SERVER as string,
    database: 'plandash',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}