//working with files
//fs - file system;

const fs = require('fs');
const path = require('path');

module.exports = class Wish {
    constructor(wishTitle){
        this.title = wishTitle;
    }

    saveWish() {
        //path to the wish.json file
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );
        fs.readFile(dataPath, (error, fileContent) => {
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }
            wishes.push(this);

            //saving wishes array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(wishes), (error) => {
                console.log(error);
            });

        });
        //before we save data to the file, we need to read it first

    }

    deleteWish(index) {
        //path to the wish.json file
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );
        fs.readFile(dataPath, (error, fileContent) => {
            let wishes = [];
            if(!error){
                wishes = JSON.parse(fileContent);
            }
            wishes.splice(index,1);

            //saving wishes array in json format to the file
            fs.writeFile(dataPath, JSON.stringify(wishes), (error) => {
                console.log(error);
            });

        });
        //before we save data to the file, we need to read it first

    }

    //to read the wishes.json file content
    static fetchAllWishes(callBack){
        const dataPath = path.join(path.dirname(process.mainModule.filename),
        'data',
        'wish.json'        
        );

        fs.readFile(dataPath, (error, fileContent) => {
            //in case of  error while opening the file
            if(error){
                return callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
    }
}