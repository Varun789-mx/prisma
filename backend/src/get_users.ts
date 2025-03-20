import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

async function get_users() { 
	const users = await prisma.user.findMany()
	return users
	await prisma.$disconnect()

}

 get_users() 
 	.then(async()=> { 
		await prisma.$disconnect()
		console.log("query ran successfully")
	})
	.catch(async(e)=> { 
		await prisma.$disconnect()
		console.log(e)
	})

export default get_users
