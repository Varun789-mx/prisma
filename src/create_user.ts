import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
	await prisma.user
}

main()
	.then(async () => {
		await prisma.$disconnect()
		console.log("query run successfull")
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
