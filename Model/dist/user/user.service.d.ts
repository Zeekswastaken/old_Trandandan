import { Repository } from 'typeorm';
import { User } from '../DB_tables/user.entities';
import { UserDto } from '../Dto/use.Dto';
export declare class UserService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    save(Body: UserDto): Promise<void>;
    update(Body: Partial<User>, id: any): Promise<void>;
    findByName(username: any): Promise<User>;
    findById(id: any): Promise<User>;
}
