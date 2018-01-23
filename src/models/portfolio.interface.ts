import { ChangeLog } from './changelog.interface';
import { Social } from './social.interface';
import { Updates } from './updates.interface';

export interface Portfolio {
    firstName: string;
    middleName: string;
    lastName: string;
    subHeading?: string;
    socialMedia: Social[];
    introduction: string;
    changeLog: ChangeLog[];
    updates: Updates[];
    speakerBio: string;
}
