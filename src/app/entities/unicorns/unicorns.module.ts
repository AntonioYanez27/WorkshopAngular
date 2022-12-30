import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { UnicornsComponent } from "./unicorns.component";
import { UnicornsRouteModule } from "./unicorns.route";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    imports: [MaterialModule,UnicornsRouteModule, FormsModule],
    declarations: [UnicornsComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnicornsModule {}