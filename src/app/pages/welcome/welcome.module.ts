import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome.component";
import { WelcomeRouteModule } from "./welcome.route";
import { MatTableModule} from "@angular/material/table"
import { FormsModule } from "@angular/forms";
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    imports: [MaterialModule,WelcomeRouteModule, MatTableModule, FormsModule],
    declarations: [WelcomeComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule {}