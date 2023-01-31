export class Lesson {
    id: number;
    lessonName: string;
    lessonPath: string;
    file: string;

    /**
     *
     */
    constructor(data: any = {}) {
        this.id = data.id;
        this.lessonName = data.lessonName;
        this.lessonPath = data.lessonPath;
        this.file = data.file;
    }
}