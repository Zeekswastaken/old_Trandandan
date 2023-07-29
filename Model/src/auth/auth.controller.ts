import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from 'src/Dto/use.Dto';
import { LocalStrategy } from './local.startegy';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { TokenGuard } from './guards';
import { error } from 'console';



@Controller('auth')
export class AuthController {
    constructor(private readonly authservice:AuthService,private readonly localStrategy:LocalStrategy){}
    @Get('signin')
   // @UseGuards(TokenGuard)
    singin(@Res() res:Response){
        this.authservice.singin(res);
    }
    @Get('signup')
    //@UseGuards(TokenGuard)
    singup(@Res() res:Response){
        this.authservice.singup(res);
    }
    @Post('signup')
    async create(@Body() Body:UserDto,@Res() res:Response){
        if(await this.authservice.check_and_create(Body)  != null)
        {
            res.sendFile('/Users/orbiay/Desktop/App2/app/views/login.html');
        }
        else
            return {
                user:Body,
                message:'something wrong with email or password',
            }
    }
    @Post('login')
    async checking(@Body() Body:UserDto,@Res() res:Response){

        const user = await this.localStrategy.validate(Body.email,Body.password);
        if (!user)
        {
            var obj:Object = {
                token:'error',
                user:Body,
                message:'something wrong with email or password'
            }
            res.send(obj);
            return obj;
        }
        else 
        {
            const jwtoken = await this.authservice.generatOken(Body);
             var obj:Object  = {
                token:jwtoken,
                user:Body,
                message:'the user entrance secssufully'
            }
            res.send(obj);
            return obj;
        }
    }
}
@Controller('auth')
export class googleController{
    constructor(private readonly authservice:AuthService){}
    //@UseGuards(TokenGuard)
    @Get('google')
    @UseGuards(AuthGuard('google'))
    googlelogin(@Res() response:Response){
        console.log("Auth/google");
        //response.redirect('https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S688648157%3A1690628583384724&client_id=154782931535-ftdo0053qmtsbcjb8rtpep6m13rhn7du.apps.googleusercontent.com&o2v=2&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Ffrom-google&response_type=code&scope=email+Profile&service=lso&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAPGR2GqJKOJkkWG3gupm3W4L17g5-s-sQUjYdX252QPpvXeXcIxoHprz5jC5MeQqrTjvRkO9YUVj6IYV-hkvHdjISC9BmDveISvbv3jxN7DKvhzYAszlocGYx8ZYsbJ2cmFJjM_KY1D-J3O2A1Rc5Bwf-KWwrRIgfl8h20gD0uwWYc2tRYrbSX-Gd1DM7X_lZDkVx0aar6ABgIfviRXRe3ywIqaZNCC1TwalgolwmL5rBvxNt4PUE2QqPvhUrxt6EZOovckEdDSMkqetQ54tlZkaePYYnkAmem-jkAy4yFgx2dn18HkLMC8rNPg5rtanNdlYMlvqCwqwu4O4s3eYnU7RO6QBSGA8W35slYr06J4Y6Bxn1jHqypPD9eIabbR_4pay-0Wn7J_84dihPqT8TLb4_ulV0imSJYu9e6RTcxup609X3p5FTvxW_DIzJGdf11KFEIFzLkVw0jryd22tfW48j5kkA%26as%3DS688648157%253A1690628583384724%26client_id%3D154782931535-ftdo0053qmtsbcjb8rtpep6m13rhn7du.apps.googleusercontent.com%23&app_domain=http%3A%2F%2Flocalhost%3A3000&rart=ANgoxcdyRNwbgwnx4WL0BaKJ3lZkHaKfZx2HPFGhkw88O02V5z_0G19q6MtRyNpDdtXQINFZ7tBKgmnTcEBdnW_7YcLCCbG06g')
    }

    @UseGuards(AuthGuard('google'))
    @Get('from-google')
    async googleloginredirect(@Req() req, @Res() res:Response){
        console.log("CallBack");
        const user = await req.user;
        console.log(user);
        if (await this.authservice.create_Oauth(user) == true)
        {
            const cookie_token = await this.authservice.generatOken(user);
            res.cookie('jwt', cookie_token, {
                httpOnly: true,
              });
            res.setHeader('Authorization', `Bearer ${cookie_token}`);
            //res.sendFile('/Users/orbiay/Desktop/App2/app/views/home.html');
            console.log('coockie token = '+ cookie_token);
            // res.status(200).redirect("http://localhost:3001/");
            return {
                token : cookie_token,
                user:user,
                message:'the user create secssufully',
            }
        }
        else{
            console.log('error');
            const cookie_token = await this.authservice.generatOken(user);
            console.log('create token2');
            res.cookie('jwt', cookie_token, {
                httpOnly: true,
            });
            console.log('coockie token = '+ cookie_token + "\n\n\n\n");
            res.setHeader('Authorization', `Bearer ${cookie_token}`);
            //res.sendFile('/Users/orbiay/Desktop/App2/app/views/home.html');
            // res.status(200).redirect("http://localhost:3001/");
            return{
                token: cookie_token,
                user:user,
                message:'the user already exist'
            } 
        }
    }
}

@Controller('auth')
export class fortytwo_Controller{
    constructor(private readonly authservice:AuthService){}
    @Get('42')
    @UseGuards(AuthGuard('42'))
    // @UseGuards(TokenGuard)
    googlelogin(@Req() req,@Res() res){
        console.log("heloWorld")
    }


    @Get('from-42')
    @UseGuards(AuthGuard('42'))
    async fortytwo_loginredirect(@Req() req, @Res() res:Response ){
        console.log("CallBack");
        const user = await req.user;
        if (await this.authservice.create_Oauth(user) == true)
        {
            const cookie_token = await this.authservice.generatOken(user);
            res.setHeader('Authorization', `Bearer ${cookie_token}`);
            console.log('coockie token = '+ cookie_token);
            //res.sendFile('/Usrs/orbiay/Desktop/App2/app/views/home.html');
            res.status(200).redirect("http://localhost:3001/");
            const user_data = {token: cookie_token,
                user:user,
                message:'the email already exist'}
            return user_data;
        }
        else{
            console.log('error');
            const cookie_token = await this.authservice.generatOken(user);
            console.log('create token2');
            res.cookie('Access Token', cookie_token, {
                httpOnly: true,
              });
            console.log('coockie token = '+ cookie_token);
            res.setHeader('Authorization', `Bearer ${cookie_token}`);
            //res.sendFile('/Users/orbiay/Desktop/App2/app/views/home.html');
            res.status(200).redirect("http://localhost:3001/");
            //res.redirect("http://localhost:3001/");
            const user_data = {token: cookie_token,
                user:user,
                message:'the email already exist'}
            return user_data;
        }
    }
}