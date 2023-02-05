import express from "express"
import env from "./env.js";
import mongoose from "mongoose";
import router from "./config/router.js"
import cors from "cors"

const {PORT, DB_URL} = env

const app = express()

// app.use((req, res, next) => {
// 	console.log('preflight')
// 	res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
// 	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 	res.setHeader('Access-Control-Allow-Headers', '*');
// 	res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
// 	next()
// })
app.use(cors())


app.use(express.json())

app.use('/api', router)


async function startApp() {
	try {
		// mongoose.set('strictQuery', true);
		// await mongoose.connect(DB_URL, {useUnifiedTopology: true}, (e) => {
		// 	console.log('db connected', e)
		// })
		app.listen(PORT,() => {
			console.log(`app listening on port ${PORT}`)
		})
	} catch (e) {
		console.log('error on start app ' + e)
	}
}

await startApp()

