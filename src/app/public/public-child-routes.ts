//MODULE IMPORTIEREN:
import { AuthGuard } from "src/authGuard/auth.guard";
import { UserLoginComponent } from "./auth/user-login/user-login.component";
import { UserProfileComponent } from "./auth/user-profile/user-profile.component";
import { UserRegisterComponent } from "./auth/user-register/user-register.component";
import { DoctorComponent } from "./doctor/doctor.component";

export const childRoutes = [
    {
        path: 'login',
        component: UserLoginComponent,
    },
    {
        path: 'register',
        component: UserRegisterComponent,
    },
    {
        path: 'doctor',
        component: DoctorComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: UserProfileComponent,
    }

] 