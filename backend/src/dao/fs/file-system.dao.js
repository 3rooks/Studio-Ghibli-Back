import fs from 'fs';

class FileSystem {
    constructor(path) {
        this.init();
        this.path = path;
    }

    init = async () => {
        if (!fs.existsSync(this.path)) {
            await fs.promises.writefile(this.path, JSON.stringify([]));
        }
    };
}

export default FileSystem;
