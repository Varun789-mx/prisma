import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

async function main() { 
	await prisma.post.create({
		data: {
		title:"First post",
		content:"Random string",
		published:false,
		author:{
			connect:{
				id:1
			}
		}
		}
	})
}

main() 
	.then(async()=>{
		await prisma.$disconnect()
		console.log("query run succesfully");
	})
	.catch(async(e)=> { 
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
