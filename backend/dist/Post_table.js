"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['info', 'query'], });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.post.createMany({
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
                }, {
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
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("query ran succesfully");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
