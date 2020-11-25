import LinkModel, {ILinkModel} from './LinkModel';
import Link from './Link';


function findByCode(code: string) {
    return LinkModel.findOne<ILinkModel>({ where: { code: code } });
}


function add(link:Link) {
    return LinkModel.create<ILinkModel>(link);
}

async function hitLink(code:string) {
    const link = await findByCode(code);
    if (!link) {
        return false;
    }

    link.hits!++;
    await link.save();

    return link;

}

export default { findByCode, add, hitLink }