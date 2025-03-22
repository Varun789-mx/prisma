import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



async function Getpost(prop: number) {

	const post = await prisma.post.findMany({
		where: {
			authorId: prop
		},
	})

	console.log(post)
	prisma.$disconnect()

}
Getpost(4)
	.then(async () => {
		prisma.$disconnect()
		console.log("Query ran successfully")
	})
	.catch(async (e) => {
		await prisma.$disconnect()
		console.log(e)
	})


export default Getpost
