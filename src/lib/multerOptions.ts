import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";

export const multerOptions = {
    fileFilter: (request, file, cb) => {
        if (file.mimetype.match(/\.(jpg|jpeg|png|gif)$/)) {
            cb(null, true);
        } else {
            cb(new Error('지원하지 않는 이미지 형식입니다.'));
        }
    },
    
    storage: diskStorage({
        destination: (request, file, cb) => {
            const uploadPath: string = 'public';

            if (!existsSync(uploadPath)) {
                mkdirSync(uploadPath);
            }
            cb(null, uploadPath);
        },

        filename: (request, file, cb) => {
            cb(null, file.originalname)
        }
    })
}