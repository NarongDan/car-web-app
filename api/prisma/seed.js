const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // delete existing data
  await prisma.car.deleteMany();

  // add new data
  const cars = await prisma.car.createMany({
    data: [
      {
        licensePlate: "ABC123",
        brand: "Toyota",
        model: "Corolla",
        color: "White",
        fuelType: "Petrol",
        status: "Available",
        insurance: "Full Coverage",
        notes: "Recently serviced",
      },
      {
        licensePlate: "XYZ789",
        brand: "Honda",
        model: "Civic",
        color: "Black",
        fuelType: "Diesel",
        status: "In Use",
        insurance: "Third Party",
        notes: "Needs tire replacement",
      },
      {
        licensePlate: "JKL456",
        brand: "Ford",
        model: "Focus",
        color: "Blue",
        fuelType: "Petrol",
        status: "Maintenance",
        insurance: "Full Coverage",
        notes: "Engine check required",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
