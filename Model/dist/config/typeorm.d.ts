import { DataSource } from "typeorm";
import { Stats } from '../database/stats.entity';
import { Match } from '../database/match.entity';
import { GameInvite } from '../database/gameInvite.entity';
import { BlockedUser } from '../database/blockedUser.entity';
import { UserFriends } from '../database/userFriends.entity';
import { Achievements } from '../database/achievements.entity';
import { Notification } from '../database/notifications.entity';
import { Message } from "../database/message.entity";
import { Channel } from "../database/channel.entity";
import { User } from "../database/user.entity";
import { ChannelMembership } from "../database/channelMembership.entity";
declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof UserFriends | typeof User | typeof Message | typeof Channel | typeof ChannelMembership | typeof Stats | typeof Match | typeof GameInvite | typeof BlockedUser | typeof Achievements | typeof Notification)[];
    logging: boolean;
    synchronize: boolean;
    migrations: string[];
    autoLoadEntities: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof UserFriends | typeof User | typeof Message | typeof Channel | typeof ChannelMembership | typeof Stats | typeof Match | typeof GameInvite | typeof BlockedUser | typeof Achievements | typeof Notification)[];
    logging: boolean;
    synchronize: boolean;
    migrations: string[];
    autoLoadEntities: boolean;
}>;
export default _default;
export declare const connectionSource: DataSource;
