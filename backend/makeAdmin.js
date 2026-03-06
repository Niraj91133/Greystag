import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const email = process.argv[2];
    if (!email) {
        console.error('Please provide an email: node makeAdmin.js your@email.com');
        process.exit(1);
    }

    try {
        const user = await prisma.user.update({
            where: { email },
            data: { role: 'ADMIN' },
        });
        console.log(`✅ Success! User ${email} is now an ADMIN.`);
    } catch (error) {
        console.error(`❌ Error: User with email ${email} not found or update failed.`);
    } finally {
        await prisma.$disconnect();
    }
}

main();
