import {PrismaClient} from '@prisma/client'


const prisma = new PrismaClient({log:['info','query'],})

async function main() { 
	await prisma.post.createMany({
		data:[ {
                title: "First Post",
                content: "This is the first post content. which is published",
                published: true,
                authorId: 1
            },
            {
                title: "Second Post",
                content: "This is another random string for post content.",
                published: false,
                authorId: 1
            },
            {
                title: "Third Post",
                content: "Yet another post with some dummy content.",
                published: true,
                authorId: 2
            },
            {
                title: "Tech Trends 2025",
                content: "Discussion about upcoming tech trends.",
                published: true,
                authorId: 3
            },
            {
                title: "Learning Prisma",
                content: "Guide on how to use Prisma ORM effectively.",
                published: false,
                authorId: 4
            }
		]
	})
}

	main()
		.then(async()=> { 
			await prisma.$disconnect()
			console.log("Query ran successfully")
		})
		.catch(async(e)=> { 
			await prisma.$disconnect()
			console.log(e)
		})


