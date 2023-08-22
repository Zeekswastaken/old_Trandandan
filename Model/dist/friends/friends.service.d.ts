import { User } from '../database/user.entity';
import { UserFriends } from '../database/userFriends.entity';
import { Notification } from '../database/notifications.entity';
import { Repository } from 'typeorm';
export declare class FriendsService {
    private readonly userFriendsRepository;
    private readonly userRepository;
    private readonly notificationsRepository;
    constructor(userFriendsRepository: Repository<UserFriends>, userRepository: Repository<User>, notificationsRepository: Repository<Notification>);
    create(userid: Number, recipientid: Number): Promise<void>;
    findAll(): string;
    acceptRequest(userid: Number, recipientid: Number): Promise<void>;
    refuseRequest(userid: Number, recipientid: Number): Promise<void>;
    removeFriendship(userid: Number, recipientid: Number): Promise<void>;
    getUserFriends(userid: Number): Promise<{
        id: Number;
        username: String;
        avatar_url: any;
    }[]>;
}
