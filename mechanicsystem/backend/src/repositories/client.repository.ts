import { prisma } from "../utils/prisma";

export class ClientRepository {
  async create(data: any) {
    return prisma.client.create({ data });
  }

  async findAll() {
    return prisma.client.findMany({ include: { car: true, truck: true } });
  }

  async findById(id: string) {
    return prisma.client.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return prisma.client.update({ where: { id }, data });
  }

  async delete(id: string) {
    return prisma.client.delete({ where: { id } });
  }
}
