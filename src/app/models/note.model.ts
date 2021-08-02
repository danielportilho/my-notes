import { Tag } from './tag.model';

export class Note {
    id: number;
    title: string;
    description: string;
    dateCreate: Date;
    tags: Tag[] = [];
}