import { ChannelMembership } from "./channelMembership.entity";
import { Stats } from "./stats.entity";
import { GameInvite } from "./gameInvite.entity";
import { Match } from "./match.entity";
import { BlockedUser } from "./blockedUser.entity";
export declare class User {
    id: Number;
    username: String;
    birthDay: Date;
    password: String;
    gender: String;
    privacy: Boolean;
    Bio: String;
    avatar_URL: String;
    memberships: ChannelMembership[];
    friends: User[];
    stats: Stats;
    sentInvites: GameInvite[];
    receivedInvites: GameInvite[];
    player1: Match[];
    player2: Match[];
    blockedUsers: BlockedUser[];
    usersBlocked: BlockedUser[];
    twoFactorSecret: string;
    twoFactorEnabled: boolean;
}
