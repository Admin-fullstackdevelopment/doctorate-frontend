//MODULE IMPORTIEREN:
import { UserLoginComponent } from "./auth/user-login/user-login.component";
import { UserRegisterComponent } from "./auth/user-register/user-register.component";

export const childRoutes = [
    {
        path: 'login', component: UserLoginComponent,
    },
    {
        path: 'register', component: UserRegisterComponent,
    },
] 