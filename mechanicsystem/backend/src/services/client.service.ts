import { ClientRepository } from "../repositories/client.repository";

export class ClientService {
  private repo = new ClientRepository();

  async createClient(data: any) {
    // validações básicas
    if (!data.name || !data.document || !data.contact) {
      throw new Error("Missing required fields");
    }

    return this.repo.create(data);
  }

  async listClients() {
    return this.repo.findAll();
  }

  async getClient(id: string) {
    const client = await this.repo.findById(id);
    if (!client) throw new Error("Client not found");
    return client;
  }

  async updateClient(id: string, data: any) {
    return this.repo.update(id, data);
  }

  async deleteClient(id: string) {
    return this.repo.delete(id);
  }
}
