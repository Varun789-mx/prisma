import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ log: ['info', 'query'], })

interface User {
	id: number;
}

async function Getpost(prop: User) {

	const post = await prisma.post.findUnique({
		where: {
			id: prop.id
		},
	})

	console.log(post)
	prisma.$disconnect()

}
Getpost({ id: 1 })
	.then(async () => {
		prisma.$disconnect()
		console.log("Query ran successfully")
	})
	.catch(async (e) => {
		await prisma.$disconnect()
		console.log(e)
	})


export default Getpost
