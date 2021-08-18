import { UnsupportedMediaTypeException } from "@nestjs/common";

export const multerOptions = {
    fileFilter: (request, file, cb) => {
        if (file.mimetype.match('image/jpeg')) {
            return cb(null, true);
        } else {
            return cb(new Error('지원하지 않는 이미지 형식입니다.'));
        }
    }
}