import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProvider } from './services/auth-interceptor.interceptor';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { UserdashboardComponent } from './pages/User/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SideBArComponent } from './pages/Admin/side-bar/side-bar.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { AddCategoryComponent } from './pages/Admin/add-category/add-category.component';
import { ViewCategoryComponent } from './pages/Admin/view-category/view-category.component';
import { ViewQuizesComponent } from './pages/Admin/view-quizes/view-quizes.component';
import { AddQuizzesComponent } from './pages/Admin/add-quizzes/add-quizzes.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/Admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/Admin/view-questions/view-questions.component';
import { AddQuestionsComponent } from './pages/Admin/add-questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSideBarComponent } from './pages/User/user-side-bar/user-side-bar.component';
import { LoadQuizComponentComponent } from './pages/User/load-quiz-component/load-quiz-component.component';
import { InstructionComponent } from './pages/User/instruction/instruction.component';
import { StartQuizComponent } from './pages/User/start-quiz/start-quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SideBArComponent,
    WelcomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewQuizesComponent,
    AddQuizzesComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UserSideBarComponent,
    LoadQuizComponentComponent,
    InstructionComponent,
    StartQuizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    CKEditorModule,

  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
