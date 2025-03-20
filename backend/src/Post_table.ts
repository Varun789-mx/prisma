import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['info', 'query'], })

async function main() {

   await prisma.post.createMany({
        data: [{
            title: "First post",
            content: "Random string",
            published: true,
            authorId: 1
        }, {
            title: "First post",
            content: "Random string",
            published: true,
            authorId: 5
        }, {
            title: "Second Post",
            content: "This is another random string for post content.",
            published: false,
            authorId: 6
        },
        {
            title: "Third Post",
            content: "Yet another post with some dummy content.",
            published: true,
            authorId: 9
        },{
            title: "Third Post",
            content: "Yet another post with some dummy content.",
            published: true,
            authorId: 9
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
        }],
    })
}
main()
    .then(async () => {
        console.log("query ran succesfully");
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })