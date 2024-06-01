import bcrypt from 'bcrypt';
import prisma from "./db";

async function seed() {
  try {

    // delete all data
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.user.deleteMany();
    await prisma.role.deleteMany();


    // Seed roles
    const role1 = await prisma.role.create({
      data: {
        name: 'Admin',
      },
    });

    const role2 = await prisma.role.create({
      data: {
        name: 'User',
      },
    });

    // Seed users
    const user1 = await prisma.user.create({
      data: {
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mail.com',
        password: await bcrypt.hash('Admin123!', 10),
        roleId: role1.id,
      },
    });

    const user2 = await prisma.user.create({
      data: {
        username: 'janesmith',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'janesmith@mail.com',
        password: await bcrypt.hash('Admin123!', 10),
        roleId: role2.id,
      },
    });

    // Seed categories
    const category1 = await prisma.category.create({
      data: {
        name: 'Category 1',
      },
    });

    const category2 = await prisma.category.create({
      data: {
        name: 'Category 2',
      },
    });

    const category3 = await prisma.category.create({
      data: {
        name: 'Category 3',
      },
    });

    // Seed products
    for (let i = 1; i <= 10; i++) {
      const category = i <= 3 ? category1 : i <= 6 ? category2 : category3;

      await prisma.product.create({
        data: {
          name: `Product ${i}`,
          categoryId: category.id,
          createdById: user1.id,
          price: 100 * i,
          stock: 10 * i,
          description: `Description for product ${i}`,
          image: `https://via.placeholder.com/150?text=Product+${i}`,
        },
      });
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();