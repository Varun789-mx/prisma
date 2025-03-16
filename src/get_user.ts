import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],});

async function main() { 
	const user = await prisma.user.findUnique({
		where : { 
			 email:"Harsh@pandeygmail.com",
		},
	})

	console.log(user)
}

 main()
 .then(async ()=> { 
	 await prisma.$disconnect()
	 console.log("query done successfully")
 })
 	.catch(async(e)=> { 
	 await prisma.$disconnect()
	 console.log(e)
	})

