import db from '../models/index';

let createNewChungChi = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await db.chungchi.create({
                tenchungchi: data.tenchungchi,
                tieuchuanapdung: data.tieuchuanapdung
            })
            resolve(result);
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
let getChungChiId = (chungchi_id) => {
    return new Promise (async(resolve, reject) => {
        try {
            let chungchi = await db.chungchi.findOne({
                where : {id : chungchi_id}
            })
            if (chungchi){
                resolve (chungchi);
            }else {
                resolve ([]);
            }
        }catch(e){
            reject(e);
        }
    })
}

let updateChungChiData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.chungchi.update(
                {
                    tenchungchi: data.tenchungchi,
                    tieuchuanapdung: data.tieuchuanapdung
                },
                {
                    where: { id_chungchi: data.id_chungchi }
                }
            );
            resolve('Cập nhật thành công!');
        } catch (e) {
            console.log(e);
            reject(e);
        }
    });
}

module.exports = {
    createNewChungChi: createNewChungChi,
    getAllChungChi : getAllChungChi,
    getChungChiId : getChungChiId,
    updateChungChiData: updateChungChiData,

}