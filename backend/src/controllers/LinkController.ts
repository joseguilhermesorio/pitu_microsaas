import { Request, Response } from 'express';
import Link from '../models/Link';
import { v4 as uuid } from 'uuid';
import LinksRepository from '../models/LinkRepository';

function generateCode() {
    let link = '';
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < 5; i++) {
        link += caracters.charAt(Math.floor(Math.random() * caracters.length));
    }

    return link;
}

async function postLink(request:Request, response:Response) {
    const link = request.body as Link;
    link.code = generateCode();
    link.id = uuid();
    link.hits = 0;
    const result = await LinksRepository.add(link);

    return response.status(201).json(result);
}

async function getLink(request:Request, response:Response) {
    const { code } = request.params;
    const link = await LinksRepository.findByCode(code);;
    if (!link) {
        return response.status(404).json({message: "NOT FOUND"});
    }

    return response.status(200).json(link);
}

async function hitLink(request:Request, response:Response) {
    const { code } = request.params;
    const link = await LinksRepository.hitLink(code);
    if (!link) {
        return response.status(404).json({message: "NOT FOUND"});
    }

    return response.status(200).json(link);
}

export default { postLink, getLink, hitLink }