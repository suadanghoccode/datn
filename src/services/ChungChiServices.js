import db from '../models/index';

let createNewChungChi = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            await db.ChungChi.create({
                tenchungchi: data.tenchungchi,
                tieuchuanapdung: data.tieuchuanapdung
            })
            resolve();
        }catch (e){
            reject(e);
        }
    })

}
let getAllChungChi = () => {
    return new Promise(async(resolve, reject) => {
        try{
            let chungchis = db.chungchi.findAll({
                raw:true,
            });
            resolve(chungchis);
        }catch(e){
            reject(e);
        }
    })
    
}
module.exports = {
    createNewChungChi: createNewChungChi,
    getAllChungChi : getAllChungChi,
}