import { update } from 'src/Dto/use.Dto';
import { JWToken } from 'src/auth/jwt.service';
import { UserService } from 'src/user/user.service';
export declare class ProfileController {
    private readonly userservice;
    private readonly jwt;
    constructor(userservice: UserService, jwt: JWToken);
    display(username: String, res: any): Promise<void>;
    update(Body: update, res: any, username: String): Promise<void>;
}
