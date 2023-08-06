import { Injectable } from '@nestjs/common';
import { JwtService, JwtVerifyOptions } from '@nestjs/jwt';
import { TokenExpiredError, JsonWebTokenError } from 'jsonwebtoken';
import {jwtDTO } from 'src/Dto/use.Dto';
import { User } from 'src/database/user.entity';

@Injectable()
export class JWToken{
  constructor(private readonly jwtService: JwtService) {}

    private secret_key:String = '0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
    async generateToken(user:jwtDTO){
        return  this.jwtService.sign(user);
    }
    async verify(token):Promise<boolean>
    {
        try 
        {
          if (token)
          {
            console.log("Token verify is " + token + "\n\n\n\n\n\n\n\n");
            const decoded = await this.jwtService.verifyAsync(token, {secret:this.secret_key.toString()});
            console.log('Decoded:', decoded);
            // if (decoded.exp > currentTime) {
            //   console.log('EHO EHO');
            //   return true; // Token is valid and has not expired
            // } else {
            //   return false; // Token has expired
            // }
            return true;
          }
          else 
            return false;
        } 
        catch (error) {
          console.log('catch Verify : the token had expired\n\n\n');
          if (error instanceof TokenExpiredError) {
            console.error('Token has expired:', error.message);
          } else if (error instanceof JsonWebTokenError) {
            console.error('Invalid token:', error.message);
          } else {
            console.error('Token verification failed:', error);
          }
          return false; // Token is invalid
        }
    }
    async decoded (token):Promise<null|User>{
      try 
        {
          if (token)
          {
            const user = await this.jwtService.verifyAsync(token, {secret:this.secret_key.toString()});
            console.log('Decoded:', user);
            return user;
          }
          else 
            return null;
        } 
        catch (error) {
          console.log('4---------------->>>>');
          return null; // Token is invalid
        }
    }
  }