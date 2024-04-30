import { Component, NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/User/userdashboard/userdashboard.component';
import { adminGuard } from './guard copy/admin.guard';
import { userGuard } from './guard copy/user.guard';
import { loginGuard } from './guard copy/login.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { ViewCategoryComponent } from './pages/Admin/view-category/view-category.component';
import { AddCategoryComponent } from './pages/Admin/add-category/add-category.component';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { AddQuizzesComponent } from './pages/Admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { LoadQuizComponentComponent } from './pages/User/load-quiz-component/load-quiz-component.component';
import { InstructionComponent } from './pages/User/instruction/instruction.component';
import { StartQuizComponent } from './pages/User/start-quiz/start-quiz.component';


const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
 },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
  },
  {
     path:'login',
     component:LoginComponent,
     pathMatch:'full',
     canActivate:[loginGuard]
  },
  {
     path:'navbar',
     component:NavbarComponent,
     pathMatch:'full'
  },
  {
     path:'admin',
     component:DashboardComponent,
     canActivate:[adminGuard],
     children:[
      {
        path:'',
        component:WelcomeComponent,
     },
        {
           path:'profile',
           component:ProfileComponent,
        },
        {
          path:'viewcategory',
          component:ViewCategoryComponent
        },
        {
          path:'add_category',
          component:AddCategoryComponent
        },
        {
          path:'quizess',
          component:ViewQuizesComponent
       },
       {
        path:'add_quizzes',
        component:AddQuizzesComponent
       },
       {
        path:'add-quiz',
        component:AddQuizzesComponent
       },
       {
        path:'update-quiz/:qid',
        component:UpdateQuizComponent
       },
       {
        path:'view-questions/:quizid/:qtitle',
        component:ViewQuestionsComponent
       },
       {
         path:'add-questions/:Quesqid/:Questitle',
         component:AddQuestionsComponent
       }
     ]
  },
  {
    path: 'userdashboard',
    component: UserdashboardComponent,
    canActivate: [userGuard],
    children: [
      {
        path:':catId',
        component: LoadQuizComponentComponent
      },
      {
        path:'instruction/:qid',
        component:InstructionComponent
      },
    
    ]
  },
  { path: 'start/:quizId', component: StartQuizComponent ,
  canActivate: [userGuard],

  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}