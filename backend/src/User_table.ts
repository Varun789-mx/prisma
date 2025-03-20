import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info','query'],})

async function main() { 
	await prisma.user.createMany({
		data:[
	    {email:"hpandey057@gmail.com",name:"Harsh"},
	    { email: "user2@example.com", name: "Bob" },
            { email: "user3@example.com", name: "Charlie" },
            { email: "user4@example.com", name: "David" },
            { email: "user5@example.com", name: "Eve" },
            { email: "user6@example.com", name: "Frank" },
            { email: "user7@example.com", name: "Grace" },
            { email: "user8@example.com", name: "Harsh" },
            { email: "user9@example.com", name: "Ivy" },
            { email: "user10@example.com", name: "Jack" },
            { email: "user11@example.com", name: "Karen" },
            { email: "user12@example.com", name: "Leo" },
            { email: "user13@example.com", name: "Mona" },
            { email: "user14@example.com", name: "Nathan" },
            { email: "user15@example.com", name: "Olivia" },
            { email: "user16@example.com", name: "Paul" },
            { email: "user17@example.com", name: "Quinn" },
            { email: "user18@example.com", name: "Rachel" },
            { email: "user19@example.com", name: "Steve" },
            { email: "user20@example.com", name: "Tina" },
            { email: "user21@example.com", name: "Uma" },
            { email: "user22@example.com", name: "Victor" },
            { email: "user23@example.com", name: "Wendy" },
            { email: "user24@example.com", name: "Xavier" },
            { email: "user25@example.com", name: "Yara" },
            { email: "user26@example.com", name: "Zane" },
            { email: "user27@example.com", name: "Amy" },
            { email: "user28@example.com", name: "Ben" },
            { email: "user29@example.com", name: "Cindy" },
            { email: "user93@example.com", name: "Owen" },
            { email: "user94@example.com", name: "Penelope" },
            { email: "user95@example.com", name: "Quinn" },
            { email: "user96@example.com", name: "Ralph" },
            { email: "user97@example.com", name: "Sophia" },
            { email: "user98@example.com", name: "Tyler" },
            { email: "user99@example.com", name: "Ursula" },
            { email: "user100@example.com", name: "Vince"}

			 
		],
        skipDuplicates:true,
	})
}

	main() 
		.then(async()=> { 
			await prisma.$disconnect()
			console.log("Query run succesfully")
		})
		.catch(async(e)=>{ 
			await prisma.$disconnect()
			console.log(e)
		})

                                                                                                                       
