import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

interface User { 
	id:number;
	email:string;
	name:string;
}

async function Getpost(prop:User) {
       try{	
	const post = await prisma.post.findUnique({
		where: {
			id:prop.id
		},
	})

	console.log(post)
	prisma.$disconnect()
       }
 .catch(async(e)=> { 
	 await prisma.$disconnect()
	 console.log(e)
 })
}

export default Getpost
