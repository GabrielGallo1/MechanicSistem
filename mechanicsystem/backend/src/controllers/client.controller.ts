import { Request, Response } from "express";
import { ClientService } from "../services/client.service";

export class ClientController {
  private service = new ClientService();

  // 🔹 Valida ID uma única vez
  private validateId(res: Response, id?: string) {
    if (!id) {
      res.status(400).json({ error: "ID is required" });
      return null;
    }
    return id;
  }

  // 🔹 CREATE
  create = async (req: Request, res: Response) => {
    try {
      const client = await this.service.createClient(req.body);
      return res.status(201).json(client);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  // 🔹 LIST ALL
  list = async (req: Request, res: Response) => {
    try {
      const clients = await this.service.listClients();
      return res.json(clients);
    } catch (error: any) {
      return res.status(500).json({ error: "Failed to list clients" });
    }
  };

  // 🔹 GET BY ID
  get = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      const client = await this.service.getClient(id);
      return res.json(client);
    } catch (error: any) {
      return res.status(404).json({ error: error.message });
    }
  };

  // 🔹 UPDATE
  update = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      const client = await this.service.updateClient(id, req.body);
      return res.json(client);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };

  // 🔹 DELETE
  delete = async (req: Request, res: Response) => {
    const id = this.validateId(res, req.params.id);
    if (!id) return;

    try {
      await this.service.deleteClient(id);
      return res.status(204).send();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };
}
